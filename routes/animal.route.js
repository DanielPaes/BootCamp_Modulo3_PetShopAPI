import express from "express";
import AnimalController from "../controllers/animal.controller.js";

const route = express.Router();

route.post("/", AnimalController.createAnimal);
route.get("/", AnimalController.getAnimais);
route.get("/:id", AnimalController.getAnimal);
route.delete("/:id", AnimalController.deleteAnimal);

export default route;
