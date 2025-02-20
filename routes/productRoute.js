import { Router } from "express";
import { getProducts } from "../controllers/productController.js";

const productRouter = Router();

productRouter.route("/all").get(getProducts);

export default productRouter;
