import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "../routes";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

dotenv.config();
app.use(bodyParser.json());

app.use("/", route);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
