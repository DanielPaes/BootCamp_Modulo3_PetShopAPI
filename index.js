import express from "express";
import cors from "cors";
import animalRouter from "./routes/animal.route.js";
import proprietarioRouter from "./routes/proprietario.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/animal", animalRouter);
app.use("/proprietario", proprietarioRouter);
app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

app.listen(3001, () => console.log("API Iniciada."));
