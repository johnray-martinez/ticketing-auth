import request from 'supertest';
import { signup } from '../../test/signUpUser';

import { app } from '../../app';

it('returns a current user if user is signed in', async () => {
  const cookie = await signup();
  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send({})
    .expect(200)

  expect(response.body.currentUser.email).toEqual('iamvalidemail@gmail.com');
})