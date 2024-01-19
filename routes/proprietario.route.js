import express from "express";
import ProprietarioController from "../controllers/proprietario.controller.js";

const route = express.Router();

route.post("/", ProprietarioController.createProprietario);
route.get("/", ProprietarioController.getProprietarios);
route.get("/:id", ProprietarioController.getProprietario);

export default route;
