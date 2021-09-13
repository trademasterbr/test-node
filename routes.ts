import { Application } from 'express';
import authRoutes from "./auth/auth.routes";
const apiBaseUrl = '/api';


export default function routes(app: Application): void{
  app.use(apiBaseUrl, authRoutes)
}