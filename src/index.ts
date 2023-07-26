import "module-alias/register";
import express from "express";
import nodesRouter from "./routes/nodeRoutes";
// import { sqlConnection } from "./utils/sqlConection";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/node", nodesRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// sqlConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
