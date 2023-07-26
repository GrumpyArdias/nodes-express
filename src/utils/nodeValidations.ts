import { nodeType } from "../@types/nodes";
import { idText } from "typescript";

export function validateNodeType(data: any): data is Partial<nodeType> {
  if (typeof data.name === "string" && typeof data.parentId === "number") {
    return true;
  }
  return false;
}

export function validNodeParams(params: any) {
  const validParams = ["id", "name", "parentId"];
  const providedParams = Object.keys(params);
  const invalidParams = providedParams.filter(
    (param) => !validParams.includes(param)
  );

  if (invalidParams.length > 0) {
    return false;
  }
  return true;
}
