const express = require('express')
const app = express()


let todos = ["html","css"]
let loggedIn = false;

/* middleware
    -simply a function which has access to req and res
*/
//function normal nai ho but access req and res pako le middleaware bak0
function checkAuthentication(req,res,next){
    if(!loggedIn){
        return res.status(401).send()
    }
    console.log("checkAuthentication ");
    next();
    

}
app.use(checkAuthentication) //global middleware


app.get("/api/todos",(req,res) =>{
    console.log("response list of todos");
    res.send(todos)
    

})

app.post("/api/todos",(req,res) =>{
    
        // console.log("response  created todos"); //test garni and colsole hatauni clean code banauna
        todos.push("git")
         return res.send("todos created")
    
  
    

})
app.delete("/api/todos/reset",(req,res) =>{
    
        // console.log("response  created todos"); //test garni and colsole hatauni clean code banauna
        todos = [];
         return res.status(204).send(); 
})

app.listen(8000,() =>{
    console.log("server started..");
    
})