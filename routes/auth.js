import express from "express";
import { login, register } from "../controllers/auth.js";

const CLIENT_URL = "http://localhost:8000/";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is auth endpoint");
});

router.post("/register", register);
router.post("/login", login);
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

export default router;
