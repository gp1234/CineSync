import jwt from "jsonwebtoken";

import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  return res.json({ message: "Login successful" });
});

router.post("/register", (req, res) => {
  return res.json({ message: "Registration successful" });
});

router.post("/logout", (req, res) => {
  return res.json({ message: "Logout successful" });
});

router.post("/refresh-token", (req, res) => {
  return res.json({ message: "Token refreshed" });
});

export default router;
