import {Pool} from "pg";
export async function connect() {
  if (global.connection) return global.connection.connect();

  const pool = new Pool({
    idleTimeoutMillis: 2000,
    connectionString: "postgres://user:password@test-node_postgres_1:5432/db_test",
  });

  //apenas testando a conexão
  const client = await pool.connect();
  
  client.release();

  //guardando para usar sempre o mesmo
  global.connection = pool;
  return pool.connect();
}
