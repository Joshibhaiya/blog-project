class CategoryController{
    static display = async (req,res) => {
        try {
            res.render('admin/category/display')
        } catch (error) {
          console.console.log(error);  
        }
    }
}







module.exports = CategoryController