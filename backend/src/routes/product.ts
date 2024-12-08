import {PrismaClient} from '@prisma/client/edge';
import {withAccelerate} from '@prisma/extension-accelerate';
import {Hono} from 'hono';
import {verify} from 'hono/jwt';
import {productSchema} from '../../../common/src';

export const productRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

productRouter.use('/*', async (c, next) => {
  console.log('in the middlewarea');
  const jwt = c.req.header('Authorization');
  if (!jwt) {
    c.status(401);
    return c.json({error: 'can not find auth headr'});
  }
  try {
    const token = jwt.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload || typeof payload.id !== 'string') {
      c.status(401);
      return c.json({error: 'unauthorized'});
    }

    c.set('userId', payload.id);
    await next();
  } catch (e) {
    console.log('there was an authentication error', e);
    c.status(403);
    return c.json({
      message: 'error with jwt auth',
    });
  }
});

productRouter.post('/update', async (c) => {
  console.log('in the product update route');
  console.log('Received body:', await c.req.json()); // Debugging li
  console.log('Environment Details:', {
    databaseUrl: c.env.DATABASE_URL ? 'Present' : 'Missing',
    jwtSecret: c.env.JWT_SECRET ? 'Present' : 'Missing',
  });

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    log: ['query', 'info', 'warn', 'error'],
  }).$extends(withAccelerate());

  const body = await c.req.json();
  console.log('Parsed body:', body);

  const result = productSchema.safeParse(body);

  if (!result.success) {
    c.status(411);
    return c.json({
      message: 'invalid inputs',
      errors: result.error.flatten(),
    });
  }

  try {
    const product = await prisma.product.create({
      data: {
        name: body.name,
        url: body.url,
        price: body.price,
        sku: body.sku,
        imageUrl: body.imageUrl,
        details: body.details,
      },
    });
    return c.json({
      id: product.id,
    });
  } catch (e) {
    console.log('error during create a product', e);
    c.status(403);
    return c.text('failed to create a product post');
  }
});

productRouter.get('/allItems', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const products = await prisma.product.findMany({
      select: {
        name: true,
        sku: true,
        imageUrl: true,
        price: true,
        details: true,
        available: true,
      },
    });
    if (products.length === 0) {
      return c.json({
        message: 'No products found',
      });
    }
    return c.json(products);
  } catch (e) {
    console.error('there was an error while fetching products', e);
    c.status(404);
    return c.text('can not fetch products');
  }
});
