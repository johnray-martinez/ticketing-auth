import request from 'supertest';

import { signup } from '../../test/signUpUser';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  await signup();
});

it('returns a 400 with an invalid email or password', async () => {
  await signup();

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'iamvalidemail@gmail.com',
      password: ''
    })
    .expect(400);
});

it('disallows duplicate emails', async () => {
  await signup();

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'iamvalidemail@gmail.com',
      password: 'password'
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const cookie = await signup();

  expect(cookie).toBeDefined();
});