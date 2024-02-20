import express from "express";
import fs from "fs";

import cors from "cors";
import { userRouter } from "./Routes/userRouter.js";

const app = express();

const port = 8000;

app.use(express.json());
app.use(cors());

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
