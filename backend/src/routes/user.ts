import {Hono} from 'hono';
import {PrismaClient} from '@prisma/client/edge';
import {withAccelerate} from '@prisma/extension-accelerate';
import {signinSchema} from '../../../common/src/index';
import {decode, sign, verify} from 'hono/jwt';

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post('/signup', async (c) => {
  // Extensive logging for diagnostics
  console.log('Signup route accessed');
  console.log('Environment Details:', {
    databaseUrl: c.env.DATABASE_URL ? 'Present' : 'Missing',
    jwtSecret: c.env.JWT_SECRET ? 'Present' : 'Missing',
  });

  try {
    // Attempt to parse request body
    let body;
    try {
      body = await c.req.json();
      console.log('Received Body:', JSON.stringify(body));
    } catch (parseError) {
      console.error('Body Parsing Error:', parseError);
      return c.json(
        {
          error: 'Failed to parse request body',
          details:
            parseError instanceof Error ? parseError.message : 'Unknown error',
        },
        400
      );
    }

    // Create Prisma client with detailed logging
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
      log: ['query', 'info', 'warn', 'error'],
    }).$extends(withAccelerate());

    // Validate input (basic example)
    if (!body.email || !body.password) {
      return c.json(
        {
          error: 'Email and password are required',
        },
        400
      );
    }

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
            createError instanceof Error
              ? createError.message
              : 'Unknown error',
        },
        500
      );
    } finally {
      // Always disconnect to prevent connection leaks
      await prisma.$disconnect();
    }
  } catch (globalError) {
    console.error('Unexpected Global Error:', globalError);
    return c.json(
      {
        error: 'Unexpected server error',
        details:
          globalError instanceof Error ? globalError.message : 'Unknown error',
      },
      500
    );
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
        email: body.emazil,
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
