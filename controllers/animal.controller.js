import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;
    //   if (
    //     !client.name ||
    //     !client.cpf ||
    //     !client.phone ||
    //     !client.email ||
    //     !client.address
    //   ) {
    //     throw new Error("Name, CPF, Phone, Email e Address são obrigatórios.");
    //   }
    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
  } catch (err) {
    next(err);
  }
}

export default { createAnimal };
