const express = require('express')
// console.log(express)
const app = express()
const port = 3000
const web = require('./routes/web')
const connectDB = require('./db/connectdb')
const fileUpload = require("express-fileupload");
app.use(fileUpload({ useTempFiles: true }));

// image uplaod code

const { connection } = require('mongoose')




// express engine link for 
app.set('view engine', 'ejs')





// data get
app.use(express.urlencoded({ extended: false }))





// connectiondb
connectDB()






// html css link
app.use(express.static('public'))




// routing load 
app.use('/', web)







// server create

app.listen(port, () => {
  console.log(`server is runing localhost:3000 ${port}`)
})