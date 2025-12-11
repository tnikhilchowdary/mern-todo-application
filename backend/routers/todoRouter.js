import {getTodo,addTodo, updateTodo} from "../controllers/todoController.js";

import express from "express";

const router = express.Router();

router.get("/", getTodo);
router.post("/", addTodo);
router.put("/:id", updateTodo);

export default router;
