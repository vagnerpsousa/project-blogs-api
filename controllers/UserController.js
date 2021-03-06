const express = require('express');

const router = express.Router();
const userService = require('../services/UserService');
const { validateUser, checkEmailExists, validateToken } = require('../middlewares');

const statusSucessCreate = 201;
const ok = 200;

router.post('/', validateUser, checkEmailExists, async (req, res, _next) => {
  const token = await userService.create(req.body);

  res.status(statusSucessCreate).json({ token });
});

router.get('/', validateToken, async (_req, res, _next) => {
  const users = await userService.getAll();

  return res.status(ok).json(users);
});

router.get('/:id', validateToken, async (req, res, _next) => {
  const user = await userService.getById(req.params.id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(ok).json(user);
});

module.exports = router; 