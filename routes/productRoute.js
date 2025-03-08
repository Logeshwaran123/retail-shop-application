import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const productRouter = Router();

productRouter.route("/all").get(getProducts);
productRouter.route("/addProduct").post(createProduct);
productRouter.route("/updateProduct/:_id").patch(updateProduct);
productRouter.route("/deleteProduct/:_id").delete(deleteProduct);

export default productRouter;
