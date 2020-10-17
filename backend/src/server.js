import express from 'express';
import mongoose from 'mongoose';
import { env } from './env.js';

const { app: { port }, mongoDbUrl } = env;
const server = express();

server.get('/', (req, res) => {
  res.send('Hello world!')
});

async function start() {
  try {
    await mongoose.connect(mongoDbUrl, {
      useNewUrlParser: 'true',
      useUnifiedTopology: 'true'
    });
    server.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
