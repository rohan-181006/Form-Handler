import express from "express";

const app = express();

app.use(express.json());

import postRouter from "./src/routes/submission.routes.js"

app.use("/api/v1/post",postRouter);

// example route: http://localhost:8000/api/v1/post/create

export default app;

