import express from 'express';

const router = express.Router();

router.get('/api/users/signin', (req, res) => {
  res.send('This is a signin');
})

export { router as signinUserRouter };