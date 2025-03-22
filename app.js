import express from "express";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view-engine", ejs);

app.use("/api/v1/users", userRouter);
app.use(express.static("public"));

app.use("/api/v1/products", productRouter);

app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login", (req, res) => {
  const data = req.body;
  console.log(data);
  res.render("index.ejs", { fname: data.username });
});

export default app;
