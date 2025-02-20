export function getUser(req, res) {
  console.log(req.params);
  const data = {
    uid: "001",
    premium: true,
    uname: "Logesh",
    address: "123, Abc st",
    landmark: "near Ginger hotel",
    city: "Pondicherry",
  };
  res.status(200).json({ status: "Success", data });
}
