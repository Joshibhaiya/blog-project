class AboutController{
    static display = async (req,res) => {
        try {
            res.render('admin/about/display')
        } catch (error) {
          console.console.log(error);  
        }
    }
}





module.exports = AboutController