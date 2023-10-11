const CategoryModal = require('../../models/Category')
class CategoryController{
    static display = async (req,res) => {
        try {
            res.render('admin/category/display')
        } catch (error) {
          console.log(error);  
        }
    }


    static categoryinsert = async (req,res) => {
        try {
            console.log(req.body)
        } catch (error) {
          console.log(error);  
        }
    }
}








module.exports = CategoryController