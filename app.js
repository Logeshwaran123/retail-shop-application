import express from "express";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

const app = express();

app.use("/api/v1/users", userRouter);

app.use("/api/v1/products", productRouter);

export default app;
