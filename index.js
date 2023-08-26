const express = require("express");
const app = express();
const port = 3000;
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("public"));
app.use("/", routes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
