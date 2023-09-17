const express = require('express')
// console.log(express)
const app = express()
const port = 3000





// routing of expresss
app.get('/',(req,res)=>{
    res.send('hello home page')
})





// server create

app.listen(port, () => {
    console.log(`server is runing localhost:3000 ${port}`)
  })