const express = require ('express')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const route = express.Router()






// route (url)



route.get('/',FrontController.home)//static method
route.get('/about',FrontController.about)//static method
route.get('/team',FrontController.team)//static method
route.get('/blog',FrontController.blog)//static method
route.get('/contact',FrontController.contact)//static method
route.get('/login',FrontController.login)//static method


// admin conntrooler
// route.get('/admin/dashboard',AdminController.dashboard)
route.get('/admin/dashboard',AdminController.dashboard)





module.exports =route