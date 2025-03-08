import express from "express";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import bodyParser from "body-parser";

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);

app.use("/api/v1/products", productRouter);

export default app;
