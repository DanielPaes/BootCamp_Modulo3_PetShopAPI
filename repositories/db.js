import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      "postgres://xoizcdhi:rvQsEefWwKY_D9XPXZGqmBFtkF1JerjF@batyr.db.elephantsql.com/xoizcdhi",
  });
  global.connection = pool;

  return pool.connect();
}

export { connect };
