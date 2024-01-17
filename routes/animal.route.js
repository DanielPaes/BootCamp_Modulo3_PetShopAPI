import express from "express";
import AnimalController from "../controllers/animal.controller.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Rota animal");
});

route.post("/", AnimalController.createAnimal);

export default route;
