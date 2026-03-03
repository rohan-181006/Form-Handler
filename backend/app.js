import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());    

import postRouter from "./src/routes/submission.routes.js"
import userRouter from "./src/routes/user.routes.js"

app.use("/api/v1/post",postRouter);
app.use("/api/v1/user",userRouter)

// example route: http://localhost:8000/api/v1/post/create
// example route: http://localhost:8000/api/v1/user/register

export default app;

