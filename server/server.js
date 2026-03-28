const express = require('express')
const cors = require('cors')



const app = express();


const port = 8080




app.get('/',(req,res)=>{
    res.json({message:"Hello World"})
})

app.listen(port,()=>{
    console.log(`server running is http://localhost:${port}`)
})