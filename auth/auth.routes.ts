import express from 'express';
import { AuthController } from './auth.controller';

const Controller = new AuthController();

export default express.Router()
.get('/login', Controller.login)
.get('/user/:id', Controller.getById)
.post('/user', Controller.create)
.patch('/user/:id',  Controller.patchUser)
.delete('/user/:id', Controller.delete);

