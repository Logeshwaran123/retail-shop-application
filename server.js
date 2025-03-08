import app from "./app.js";
import { connect } from "mongoose";
import { config } from "dotenv";
config();

const PORT = 8000;

async function connectDB() {
  try {
    await connect(process.env.DB_STRING);
    console.log("Connected Successfully");
  } catch {
    console.log("Connection Failed");
  }
}
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
