const express = require('express')
const app = express()

app.get("/api/todos",(req,res) =>{
    console.log("send todos");
    
    // let todos = ["html", "css", "js"]
    // res.send(todos)
    let product = [
        {
            fruits: ["mango","orange","banana"]
        },{
            latops:["dell", "hp"]
        }
    ]
    res.send(product)

})


app.listen(8000,() =>{
    console.log("server started");
    
})


