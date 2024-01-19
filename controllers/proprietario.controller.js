import PropritarioService from "../services/proprietario.service.js";

async function createProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    //   if (
    //     !client.name ||
    //     !client.cpf ||
    //     !client.phone ||
    //     !client.email ||
    //     !client.address
    //   ) {
    //     throw new Error("Name, CPF, Phone, Email e Address são obrigatórios.");
    //   }
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

export default { createProprietario, getProprietarios, getProprietario };
