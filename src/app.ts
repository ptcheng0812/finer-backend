import express from "express";
import cors from 'cors';
import router from "./routes/route"
import connection from "./db/config";
import { json, urlencoded } from "body-parser";

const app = express();

const PORT: string | number = process.env.PORT || 3050;

app.use(cors({
  origin: '*'
}));

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/api", router);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
