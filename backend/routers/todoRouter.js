import {getTodo,addTodo, updateTodo, deleteTodo} from "../controllers/todoController.js";

import express from "express";

const router = express.Router();

router.get("/", getTodo);
router.post("/", addTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
