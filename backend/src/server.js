import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { env } from './env';
import routes from './routes';

const { app: { port }, mongoDbUrl } = env;
const app = express();

app.use(cors());
app.use(express.json());

routes(app);

async function start() {
  try {
    await mongoose.connect(mongoDbUrl, {
      useNewUrlParser: 'true',
      useUnifiedTopology: 'true'
    });
    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
