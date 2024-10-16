const express = require("express");
const app = express();
const {checkAuthentication,checkValidRole}= require('./middleware/auth');
/* object destructing */
let todos = ["html", "css"];

/* middleware
    -simply a function which has access to req and res and can modify them
*/
//function normal nai ho but access req and res pako le middleaware bak0
//next: points to the next upcomming valid middleware

  
// app.use(checkAuthentication); //global middleware
// app.use(checkValidRole); //global middleware
app.use(express.json())  // sets up req.body // () =>{return(req,res,next) =>{}}

const createTodos = (req,res) =>{
    todos.push(req.body.title);
    return res.send("todos created");

}
app.get("/api/todos", (req, res) => {
  console.log("response list of todos");
  res.send(todos);
});

// auth_middlware object vakole auth_middleware.checkauth gareko 
// or object destructing gareo le yesto nagrda ni hunxa
app.post("/api/todos",checkAuthentication,checkValidRole,createTodos, (req, res) => {
  // console.log("response  created todos"); //test garni and colsole hatauni clean code banauna 
  
  return res.send("todos created");
});
app.delete("/api/todos/reset",checkAuthentication,checkValidRole, (req, res) => {
  // console.log("response  created todos"); //test garni and colsole hatauni clean code banauna
  todos = [];
  return res.status(204).send();
});

app.listen(8000, () => {
  console.log("server started..");
});
