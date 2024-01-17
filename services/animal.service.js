import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

export default { createAnimal };
