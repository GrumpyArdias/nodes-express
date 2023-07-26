import fs from "fs";
import { nodeType } from "../@types/nodes";
import nodes from "./node.json";

export const getAllNodes = () => {
  if (fs.existsSync(`${__dirname}/node.json`)) {
    const nodes: nodeType[] = JSON.parse(
      fs.readFileSync(`${__dirname}/node.json`, "utf-8")
    );
    return nodes;
  }
  return [];
};

export const createNode = (newNode: Partial<nodeType>) => {
  const nodes: nodeType[] = getAllNodes();
  const lastNode = nodes[nodes.length - 1];
  const sanitizeNode = {
    ...newNode,
    id: lastNode.id + 1,
  };
  return fs.writeFileSync(
    `${__dirname}/node.json`,
    JSON.stringify(sanitizeNode)
  );
};

export const getOneNode = (id: number) => {
  const nodes = getAllNodes();
  if (nodes.length > 0) {
    const node = nodes.find((node) => node.id === id);
    return node;
  } else {
    return null;
  }
};

export const deleteNode = (id: number) => {
  const nodes = getAllNodes();
  const newNodeList = nodes.filter((node) => node.id !== id);
  fs.writeFileSync(`${__dirname}/node.json`, JSON.stringify(newNodeList));
};

export const updateNode = (id: number, newNode: Partial<nodeType>) => {
  const nodes = getAllNodes();
  const newNodeList = nodes.map((node) => {
    if (node.id === id) {
      return { ...newNode, id };
    }

    return node;
  });
  console.log(newNodeList);
  fs.writeFileSync(`${__dirname}/node.json`, JSON.stringify(newNodeList));
};
