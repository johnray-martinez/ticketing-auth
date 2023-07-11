import mongoose from 'mongoose';

import { MissingCredentialsError } from './errors/missing-credentials-error';
import { app } from './app';

const start = async () => {
  if (!process.env.jwt) {
    throw new MissingCredentialsError('JWT key is not valid or is missing.');
  } 

  try {
    await mongoose.connect('mongodb://auth-mongo-clusterip-srv:27017/auth');
    console.log('Connected to mongodb');
  } catch (err) {
    console.error(err)
  }
}

app.listen('3000', () => {
  console.log('Listening on port 3000');
});

start();