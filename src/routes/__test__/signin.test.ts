import request from 'supertest';

import { signup } from '../../test/signUpUser';
import { app } from '../../app';

it('fails when email supplied was not signed up', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'iamvalidemail@gmail.com', 
      password: 'password'
    })
  .expect(400)
});

it('fails when an incorrect password is supplied', async () => {
  await signup();

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'iamvalidemail@gmail.com',
      password: 'iamwrong'
    })
    .expect(400);
});

it('responds with a cookie with successful signin', async () => {
  const cookie = await signup();

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'iamvalidemail@gmail.com',
      password: 'password'
    })
    .expect(201)

  expect(cookie).toBeDefined();
});