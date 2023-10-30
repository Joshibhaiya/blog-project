const CategoryModel = require('../../models/Category')
const BlogModel = require('../../models/Blog')
var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dhe2ezvkn',
    api_key: '829226325625528',
    api_secret: 'U9m3_3Z0wRv4Lm3NJ5cnrZ1ibOA'
});
class BlogController {
    static display = async (req, res) => {
        try {
            const blog = await BlogModel.find()
            const category = await CategoryModel.find()
            res.render('admin/blog/display', { c: category, b: blog })
        } catch (error) {
            console.log(error)
        }
    }
    // bolg ka insert karnai kailea 
    static bloginsert = async (req, res) => {
        try {
            // console.log(req.body)
            // console.log('hello insert')
            // console.log(req.files.image)
            //image upload cloudnerry
            const file = req.files.image
            // image upload cloudanary
            const imageupload = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'blogimage'
            })
            // console.log(imageupload)
            const result = new BlogModel({
                cname: req.body.category,
                title: req.body.title,
                description: req.body.description,
                image: {
                    public_id: imageupload.public_id,
                    url: imageupload.secure_url
                }
            })
            await result.save()
            res.redirect('/admin/blog/display')
        } catch (error) {
            console.log(error)
        }
    }
    // blog kai andar kai lea view mai janai kai lea 
    static bolgview = async (req, res) => {
        try {
            const data = await BlogModel.findById(req.params.id)
            // console.log(req.params.id)
            // console/log(data)
            res.render('admin/blog/view', { d: data })
        } catch (error) {
            console.log(error)
        }
    }

    // blog ko edit karnai kai lea
    static blogedit = async (req, res) => {
        try {
            const data = await BlogModel.findById(req.params.id)
            // console.log(req.params.id)
            // console/log(data)
            res.render('admin/blog/edit', { d: data })
        } catch (error) {
            console.log(error);
        }
    }
    //blog update karnai kal lea
    static blogupdate = async (req, res) => {
        try {
            // console.log(req.files.image)
            if (req.files) {
                const blog = await BlogModel.findById(req.params.id)
                const imageid = blog.image.public_id
                // console.log(imageid)
                await cloudinary.uploader.destroy(imageid) //image delete code hai
                const file = req.files.image
                // image upload cloudanary
                const imageupload = await cloudinary.uploader.upload(file.tempFilePath, {
                    folder: 'blogimage'
                })
                var data = {
                    cname: req.body.category,
                    title: req.body.title,
                    description: req.body.description,
                    image: {
                        public_id: imageupload.public_id,
                        url: imageupload.secure_url
                    }
                }
            }
            else {
                var data = {
                    cname: req.body.category,
                    title: req.body.title,
                    description: req.body.description,

                }
            }
            const result = await BlogModel.findByIdAndUpdate(req.params.id,data)
            res.redirect('/admin/blog/display')
        } catch (error) {
            console.log(error)
        }
    }


    //blog ko delete karnai kai lea
    static blogdelete = async (req, res) => {
        try {
            const blog = await BlogModel.findById(req.params.id)
                const imageid = blog.image.public_id
                // console.log(imageid)
                await cloudinary.uploader.destroy(imageid) //image delete code hai
            const data = await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/blog/display')
        } catch (error) {
            console.log(error)
        }
    }

}










module.exports = BlogController