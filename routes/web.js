const express = require ('express')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const AboutController = require('../controllers/admin/AboutController')
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

// admin/blogcontroller

route.get('/admin/blog/display',BlogController.display)
route.post('/bloginsert',BlogController.bloginsert)
route.get('/blogview/:id',BlogController.bolgview)
route.get('/blogEdit/:id',BlogController.blogedit)
route.post('/blogupdate/:id',BlogController.blogupdate)
route.get('/blogDelete/:id',BlogController.blogdelete)



// categotry controller

route.get('/admin/category/display',CategoryController.display)
route.post('/categoryinsert',CategoryController.categoryinsert)
route.get('/categoryview/:id',CategoryController.categoryview)
route.get('/categoryEdit/:id',CategoryController.categoryedit)
route.post('/categoryupdate/:id',CategoryController.categoryupdate)
route.get('/categoryDelete/:id',CategoryController.categorydelete)

// about controller
route.get('/admin/about/display',AboutController.display)




module.exports =route