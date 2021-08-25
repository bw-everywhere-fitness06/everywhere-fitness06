import express from "express";
import { getClasses, createClass, updateClass } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getClasses);
router.post("/", createClass);
router.patch("/:id", updateClass);
export default router;
