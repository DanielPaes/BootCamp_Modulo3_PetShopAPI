import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error("Nome, tipo e proprietario_id são obrigatórios.");
    }
    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
  } catch (err) {
    next(err);
  }
}

async function getAnimais(req, res, next) {
  try {
    console.log(req.query.proprietario_id);
    res.send(await AnimalService.getAnimais(req.query.proprietario_id));
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  res.send(await AnimalService.getAnimal(req.params.id));
}

async function deleteAnimal(req, res, next) {
  res.send(await AnimalService.deleteAnimal(req.params.id));
}

export default {
  createAnimal,
  updateAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
};
