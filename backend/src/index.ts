import {Hono} from 'hono';
import {cors} from 'hono/cors';
import {userRouter} from './routes/user';
import {productRouter} from './routes/product';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use('/*', cors());

app.route('/api/v1/user', userRouter);
app.route('/api/v1/product', productRouter);

export default app;
