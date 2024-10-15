
let loggedIn =true;
let hasValidRole = true;


function checkAuthentication(req, res, next) {
    if (!loggedIn) {
      return res.status(401).send();
    }
    console.log("checkAuthentication ");
    next(); // global ko next get chalxa yesari chalxa bakika route ni
  }
  
  function checkValidRole(req,res,next){
      if(!hasValidRole){
          return res.status(403).send();
      }
      next();
      
  }

  module.exports ={
    checkAuthentication,
    checkValidRole
  }
