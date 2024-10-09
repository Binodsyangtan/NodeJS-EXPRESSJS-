const bcrypt = require('bcrypt');

function signup(username,email,password){
    bcrypt.hash(password,10,function(err,hash){

         let data = {
            "username":username,
            email,
            password: hash
        }
        console.log(data);
    });
}
signup ("ram", "ram344@gmail.com","passwrod")