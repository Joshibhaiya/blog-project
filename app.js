const express = require('express')
// console.log(express)
const app = express()
const port = 3000
const web =require('./routes/web')



// express engine link for 
app.set('view engine', 'ejs')




// html css link
app.use(express.static('public'))




// routing load 
app.use('/',web)







// server create

app.listen(port, () => {
    console.log(`server is runing localhost:3000 ${port}`)
  })