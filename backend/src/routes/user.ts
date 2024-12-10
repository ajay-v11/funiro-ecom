import {Hono} from 'hono';
import {PrismaClient} from '@prisma/client/edge';
import {withAccelerate} from '@prisma/extension-accelerate';
import {signinSchema} from '../../../common/src/index';
import {decode, sign, verify} from 'hono/jwt';
import {signupSchema} from '@appollohera/furnero';

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const result = signupSchema.safeParse(body);

  if (!result.success) {
    c.status(411);
    return c.json({
      message: 'invalid inputs',
      errors: result.error.flatten(),
    });
  }

  // Create Prisma client with detailed logging
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    log: ['query', 'info', 'warn', 'error'],
  }).$extends(withAccelerate());

  try {
    // Attempt to create user
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password, // Note: Use proper hashing in production
        name: body.name || undefined,
      },
    });

    console.log('User created successfully:', user.id);

    const token = await sign({id: user.id}, c.env.JWT_SECRET);

    // Return success response
    return c.json(
      {
        message: 'Signup successful',
        userId: user.id,
        token: token,
      },
      201
    );
  } catch (createError) {
    console.error('User Creation Error:', createError);
    return c.json(
      {
        error: 'Failed to create user',
        details:
          createError instanceof Error ? createError.message : 'Unknown error',
      },
      500
    );
  } finally {
    // Always disconnect to prevent connection leaks
    await prisma.$disconnect();
  }
});

userRouter.post('/signin', async (c) => {
  console.log('signin route accessed');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    log: ['query', 'info', 'warn', 'error'],
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const result = signinSchema.safeParse(body);

  if (!result.success) {
    c.status(411);
    return c.json({
      message: 'invalid inputs',
      errors: result.error.flatten(),
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.text('user doesnot exit');
    }

    const token = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json(
      {
        message: 'Signup successful',
        userId: user.id,
        token: token,
      },
      201
    );
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.text('error signin in');
  }
});
