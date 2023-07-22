import "module-alias/register";
import express from "express";
import { sqlConnection } from "./utils/sqlConection";
const app = express();
const port = 3000;

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});
sqlConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
