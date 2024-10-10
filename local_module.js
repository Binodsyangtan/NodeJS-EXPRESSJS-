const bcrypt = require('bcrypt');
const path = require("path")
const fetchproduct = require("./product");
const product = require('./product');
const { log } = require('console');


function signup(username,email,password){
    bcrypt.hash(password,10,function(err,hash){

         let data = {
            "username":username,
            email,
            password: hash
        }
        console.log("storein DB:",data);
    });
}
function login(username,email,password){
    let hash = "$2b$10$6XDAiD6Ef/yztimUg2fYPOzpv.m6tblvQgV0jUNGVzPI2AiKlyB1G";
    bcrypt.compare(password,hash,function(err,result ){
        if(result) {
            console.log("login sucess");
            
        }
        else{
            console.log("invalid");
            
        }})

};


signup ("ram", "ram344@gmail.com","passwrod")
login("ram", "ram344@gmail.com","passwrod") 

product.createproduct();
product.fetchproduct(); 
