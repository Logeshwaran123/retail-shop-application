import { model, Schema } from "mongoose";

const productSchema = new Schema({
  pid: {
    type: String,
    required: [true, "Mandatory Field"],
    unique: [true, "Duplicate PID not allowed"],
  },
  productName: {
    type: String,
    required: [true, "Mandatory Field"],
  },
  description: {
    type: String,
    required: [true, "Mandatory Field"],
  },
  stock: {
    type: Number,
    required: [true, "Mandatory Field"],
  },
  rate: {
    type: Number,
    required: [true, "Mandatory Field"],
  },
});

const ProductModel = model("products", productSchema);

export default ProductModel;
