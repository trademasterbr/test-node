import {connect} from "../server";
interface User {
  id?: number;
  user: string;
  name: string;
  status: string;
  password: string;
}
//TODO TROCAR PELO ARRAY DE USERS DO ARQUIVO
export class AuthService {
  static async login(user, password) {
    try {
      const res = await global.connection.query(
        `SELECT * FROM users WHERE "user" = '${user}' AND password = '${password}'`
      );
      console.log("res.rows");
      console.log(res.rows);
      if (!res.rows.length) throw "No such user registered!";
      return {token: "JWT"};
    } catch (error) {
      throw error;
    }
  }

  static async delete(id){
    try {
      const res = await global.connection.query(`
        DELETE FROM users WHERE "id" = ${id}
      `)
      if(res.rowCount == 0) throw 'no register changed'
      return {ok: true}
    } catch (error) {
      throw error
    }
  }

  static async getById(id){
    try {
      const res = await global.connection.query(`
        SELECT * FROM users WHERE "id" = ${id}
      `)
      if(!res.rows.length) throw 'no user found'
      return res.rows[0]
    } catch (error) {
      throw error
    }
  }

  static async create(user: User) {
    try {
      const select = await global.connection.query(`SELECT * FROM users WHERE "user" = '${user.user}'`);
      if (select.rows.length) throw "User already exists!";
      const res = await global.connection.query(
        `INSERT INTO users ("user", password, name, status) VALUES 
        ('${user.user}','${user.password}','${user.name}','${user.status}');
        SELECT * FROM users WHERE "user" = '${user.user}'`
      );
        return res[1].rows[0]
    } catch (error) {
      throw error;
    }
  }

  static async patch(name, password, id) {
    try {
      const res = await global.connection.query(
        `UPDATE users SET name = '${name}', password = '${password}' WHERE id = ${id};
        SELECT * FROM users WHERE "id" = ${id}`
      ); throw 'no register changed'
      return res[1].rows[0]
    } catch (error) {
      throw error;
    }
  }
  async getUsers() {
    const client = await connect();
    const res = await client.query("SELECT * FROM users");
    return res.rows;
  }
}
