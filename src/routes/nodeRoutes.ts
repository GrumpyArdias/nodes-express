import express from "express";
import {
  getAllNodes,
  createNode,
  getOneNode,
  deleteNode,
  updateNode,
} from "@src/controller/nodeController";

const router = express.Router();

router.get("/api/v1/node", getAllNodes);
router.get("/api/v1/node/:id", getOneNode);
router.delete("/api/v1/node/:id", deleteNode);
router.put("/api/v1/node/:id", updateNode);
router.post("/api/v1/node", createNode);
