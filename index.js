import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();
// const PORT = 8080;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("public"));
app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
