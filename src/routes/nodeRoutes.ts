import express from "express";
import {
  getAllNodes,
  createNode,
  getOneNode,
  deleteNode,
  updateNode,
} from "../controller/nodeController";

const router = express.Router();

router.get("/", getAllNodes);
router.get("/:id", getOneNode);
router.delete("/:id", deleteNode);
router.patch("/:id", updateNode);
router.post("/", createNode);

export default router;
