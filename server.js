import app from "./app.js";
import { connect } from "mongoose";

const DBCONNSTR = `mongodb+srv://logesh:ySpQpxeMsCX7Daf@retail-db-cluster.yivan.mongodb.net/main?retryWrites=true&w=majority&appName=retail-db-cluster`;

async function connectDB() {
  try {
    await connect(DBCONNSTR);
    console.log("Connected Successfully");
  } catch {
    console.log("Connection Failed");
  }
}
connectDB();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
