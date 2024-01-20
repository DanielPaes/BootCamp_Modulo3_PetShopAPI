import pg from "pg";
import { readFile } from "fs/promises";

const apiConfig = JSON.parse(await readFile("./config/config.json"));
const uri = apiConfig.uri;

async function connect() {
  console.log(process.cwd());
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: uri,
  });
  global.connection = pool;

  return pool.connect();
}

export { connect };
