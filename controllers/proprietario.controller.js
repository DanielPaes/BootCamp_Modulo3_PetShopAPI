import PropritarioService from "../services/proprietario.service.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    if (!proprietario.nome || !proprietario.telefone) {
      throw new Error("Nome e telefone são obrigatórios.");
    }
    proprietario = await PropritarioService.createProprietario(proprietario);
    res.send(proprietario);
  } catch (err) {
    next(err);
  }
}

async function getProprietarios(req, res, next) {
  res.send(await PropritarioService.getProprietarios());
}

async function getProprietario(req, res, next) {
  res.send(await PropritarioService.getProprietario(req.params.id));
}

async function deleteProprietario(req, res, next) {
  try {
    const arr = await AnimalRepository.getAnimalbyProprietarioId(req.params.id);
    if (arr.length == 0) {
      await PropritarioService.deleteProprietario(req.params.id);
      res.end();
    } else {
      throw new Error("Proprietario vinculado a um animal");
    }
  } catch (err) {
    next(err);
  }
}

async function updateProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    proprietario = await PropritarioService.updateProprietario(proprietario);
    res.send(proprietario);
  } catch (err) {
    next(err);
  }
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
