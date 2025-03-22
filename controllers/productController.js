import ProductModel from "../models/productModel.js";

export async function getProducts(req, res) {
  const data = await ProductModel.find();
  res.status(200).json({ status: "Success", data });
}

export async function createProduct(req, res) {
  try {
    await ProductModel.create(req.body);
    res.status(201).json({ status: "Success", message: "Product Created" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "Failed", message: "Bad Request" });
  }
}

export async function updateProduct(req, res) {
  await ProductModel.updateOne(req.params, req.body);
  res.status(200).json({ status: "Success", message: "Product Updated" });
}

export async function deleteProduct(req, res) {
  await ProductModel.deleteOne(req.params);
  res.status(204).json({ status: "Succes", message: "Product Deleted" });
}

export async function getProduct(req, res) {
  const data = await ProductModel.find({ _id: req.params._id });
  res.status(200).json({ status: "Success", data });
}
