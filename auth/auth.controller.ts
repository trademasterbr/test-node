import {AuthService} from "./auth.service";

export class AuthController {
  async getById(req: any, res: any){
    try {
      const {id} = req.params;
      if(!id) throw 'no such id'
      res.status(200).json(await AuthService.getById(id))
    } catch (error) {
      res.status(400).send(error)
    }
  }

  async delete(req: any, res: any){
    try {
      const {id} = req.params;
      if(!id) throw 'no such Id!'
      res.status(200).json(await AuthService.delete(id))
    } catch (error) {
      res.status(400).send(error)
    }
  }

  async login(req: any, res: any, next: any) {
    try {
      const {user, pwd} = req.query;
      if (!user || !pwd) throw "No user or password informed!";
      res.status(200).json(await AuthService.login(user, pwd));
    } catch (error) {
      res.status(500).json({error});
    }
  }

  async create(req: any, res: any, next: any) {
    try {
      const {user, name, status, password} = req.body;
      if (!user || !name || !status || !password) throw "Body must have user, name, status and password!";
      res.status(201).send(await AuthService.create({user, name, status, password}));
    } catch (error) {
      res.status(500).json({error});
    }
  }

  async patchUser(req: any, res: any, next: any) {
    try {
      const {name, password} = req.body;
      const {id} = req.params;
      if (!name || !password) throw "Body must have name and password!";
      res.status(200).json(await AuthService.patch(name, password, id));
    } catch (error) {
      console.log(error);

      res.status(500).json({error});
    }
  }
}
