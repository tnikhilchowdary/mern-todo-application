import {getTodo} from "../controllers/todoController.js";

import express from "express";

const router = express.Router();

router.get("/", getTodo);

export default router;
