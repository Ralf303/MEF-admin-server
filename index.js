import express from "express";
import cors from "cors";

import userRouter from "./routers/userRouter.js";
import logsRouter from "./routers/logsRouter.js";
import bodyParser from "body-parser";

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/users", userRouter);
app.use("/logs", logsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
