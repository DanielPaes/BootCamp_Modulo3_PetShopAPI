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

export default { createProprietario };
