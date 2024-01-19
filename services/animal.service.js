import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function getAnimais() {
  return await AnimalRepository.getAnimais();
}

export default { createAnimal, getAnimais };
