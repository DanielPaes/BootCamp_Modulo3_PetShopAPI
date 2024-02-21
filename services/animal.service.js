import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
  return await AnimalRepository.updateAnimal(animal);
}

async function getAnimais(proprietario_id) {
  if (proprietario_id) {
    return await AnimalRepository.getAnimalbyProprietarioId(proprietario_id);
  }
  return await AnimalRepository.getAnimais();
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id) {
  return await AnimalRepository.deleteAnimal(id);
}
export default {
  createAnimal,
  updateAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
};
