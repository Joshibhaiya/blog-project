class FrontController{



    static home = async(req,res)=>{
        try{
            res.render('home')
        } catch (error) {
            console.log(error)
        }
    }
    static about = async(req,res)=>{
        try{
            res.render('about')
        } catch (error) {
            console.log(error)
        }
}

static team = async(req,res)=>{
    try{
        res.render('team')
    } catch (error) {
        console.log(error)
    }
}

static blog = async(req,res)=>{
    try{
        res.render('blog')
    } catch (error) {
        console.log(error)
    }
}
}

    



module.exports = FrontController

