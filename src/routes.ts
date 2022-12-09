import express from "express";

import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router()

const classesController = new ClassesController()
const connectionsController = new ConnectionsController()

routes.post('/users', (req, res) =>{
  const users = [
    {nome: "Beijamin Arola", idade: 3540},
    {nome: "Tomas Turbando", idade: 5},
    {nome: "Paulo Cão", idade: 15}
  ]

  return res.json(users)
})

routes.get('/classes', classesController.list)
routes.post('/classes', classesController.create)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.retrieve)

export default routes