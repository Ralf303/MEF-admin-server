import express from "express";
import cors from "cors";
import https from "https";
import fs from "fs";

import userRouter from "./routers/userRouter.js";
import logsRouter from "./routers/logsRouter.js";

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/logs", logsRouter);

// Start the server
const options = {
  key: fs.readFileSync(process.env.SECRET_KEY),
  cert: fs.readFileSync(process.env.SERTIFICATE),
};
https.createServer(options, app).listen(PORT, () => {
  console.log("сервер работает на порту", PORT);
});
