const express = require ('express')
const FrontController = require('../controllers/FrontController')
const route = express.Router()






// route (url)



route.get('/',FrontController.home)//static method
route.get('/about',FrontController.about)//static method
route.get('/team',FrontController.team)//static method
route.get('/blog',FrontController.blog)//static method






module.exports =route