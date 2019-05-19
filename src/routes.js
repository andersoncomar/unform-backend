const express = require('express')
const routes = express.Router()

const controllers = require('./controllers')

routes.get('/users', controllers.UserController.index)
routes.get('/users/:id', controllers.UserController.show)
routes.post('/users', controllers.UserController.store)
routes.put('/users/:id', controllers.UserController.update)
routes.delete('/users/:id', controllers.UserController.destroy)

module.exports = routes
