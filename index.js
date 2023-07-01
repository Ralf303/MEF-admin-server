import express from "express";
import cors from "cors";
import router from "./routers.js";

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
