import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('This is a test');
})

export { router as currentUserRouter };