import express from "express";
import { validateNodeType, validNodeParams } from "@src/utils/nodeValidations";
import { nodeType } from "../@types/nodes";
import {
  getAllNodes as getAllNodesService,
  createNode as createNodeService,
  getOneNode as getOneNodeService,
  deleteNode as deleteNodeService,
  updateNode as updateNodeService,
} from "@src/service/nodeService";

export const getAllNodes = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const allNodes = await getAllNodesService();
    return res.send({ status: 200, data: allNodes });
  } catch (error: any) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};

export const createNode = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (validNodeParams(req.body) && validateNodeType(req.body)) {
      const newNode = createNodeService(req.body);
      return res.send({ status: 200, data: newNode });
    }
    return res.status(400).send({ status: 400, message: "Bad Request" });
  } catch (error: any) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};

export const getOneNode = async (
  req: express.Request,
  res: express.Response
) => {
  try {
  } catch (error: any) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
