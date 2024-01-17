import express from "express";
import ProprietarioController from "../controllers/proprietario.controller.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Rota proprietario");
});

route.post("/", ProprietarioController.createProprietario);

export default route;
