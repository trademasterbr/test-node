import express from "express";
import routes from "./routes";
import { connect } from "./server";
const port = 3000;
const HOST = "0.0.0.0";

const app = express();
app.use(express.json());
routes(app);
connect();

app.listen(port, HOST, () => {
  console.log("listening ...");
});
