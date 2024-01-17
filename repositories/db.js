import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString: "Endereço BD",
  });
  global.connection = pool;

  return pool.connect();
}

export { connect };
