const express = require('express')
const cors = require('cors')
const multer = require('multer')



const storage = multer({storage})




const app = express();
const port = 8080



app.get('/',(req,res)=>{
    res.json({message:"Hello World"})
})

app.post('/api/upload',multer.diskStorage('test'),(req,res)=>{
    res.json({message:"complete"})
})
app.listen(port,()=>{
    console.log(`server running is http://localhost:${port}`)
})