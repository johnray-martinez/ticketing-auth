import express from 'express';

const router = express.Router();

router.get('/api/users/signout', (req, res) => {
  res.send('This is a signout');
})

export { router as signoutUserRouter };