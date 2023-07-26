import express from "express";
import { validateNodeType, validNodeParams } from "../utils/nodeValidations";
import { nodeType } from "../@types/nodes";
import {
  getAllNodes as getAllNodesService,
  createNode as createNodeService,
  getOneNode as getOneNodeService,
  deleteNode as deleteNodeService,
  updateNode as updateNodeService,
} from "../service/nodeService";

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
    const node = await getOneNodeService(parseInt(req.params.id));
    if (!node) {
      return res.status(404).send({ status: 404, message: "Not Found" });
    }
    return res.send({ status: 200, data: node });
  } catch (error: any) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};

export const deleteNode = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deleteNode = await deleteNodeService(parseInt(req.params.id));
    return res.send({ status: 200, data: deleteNode });
  } catch {
    return res
      .status(500)
      .send({ status: 500, message: "Internal Server Error" });
  }
};

export const updateNode = async (
  req: express.Request,
  res: express.Response
) => {
  console.log(validateNodeType(req.body));
  try {
    if (validNodeParams(req.body) && validateNodeType(req.body)) {
      const updatedNode = updateNodeService(parseInt(req.params.id), req.body);
      return res.send({ status: 200, data: updatedNode });
    }
    return res.status(400).send({ status: 400, message: "Bad Request" });
  } catch (error: any) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
