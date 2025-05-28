const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;


// ✅ REGISTRE
router.post('/register', async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password)
    return res.status(400).json({ message: "Falten camps obligatoris" });

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(400).json({ message: "Aquest correu ja està registrat" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, username, password: hashedPassword });
  await user.save();

  res.status(201).json({ message: "Usuari registrat correctament" });
});

// 🔑 LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ message: "Usuari no trobat" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "Contrasenya incorrecta" });

  const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
    expiresIn: '2h'
  });

  res.json({ token, username: user.username });
});

module.exports = router;
