export function getProducts(req, res) {
  const data = {
    pid: "n001",
    pname: "Product Name",
    seller: "Veggies Store",
    prate: 200,
    stock: 100,
  };
  res.status(200).json({ status: "Success", data });
}
