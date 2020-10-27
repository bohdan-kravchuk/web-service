import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import { env } from './env';
import routes from './routes';
import authorizationMiddleware from './middlewares/authorizationMiddleware';
import routesWhiteList from './configs/routesWhiteListConfig';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';
import './configs/passportConfig';

const { app: { port }, mongoDbUrl } = env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/api', authorizationMiddleware(routesWhiteList));

routes(app);

app.use(errorHandlerMiddleware);

async function start() {
  try {
    mongoose.set('useCreateIndex', true);
    await mongoose.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
