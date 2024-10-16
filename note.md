     REVISION

oct-9 (dayone - feb-11)
    -learn about bcrpt ,nodemon etc.
    -nodemodule

oct-9(feb-12)
    -signup , login ko example of bcrypt of password
    - module export herriyo how to export and link file 
    -default export youta page matra export garna milne
    -
oct-10(feb-13)
    -named exports ko example and use object typeko 

    -EXPRESS INSTALL AAJA 

oct-13(feb-15)
    .status code
        2. 200,201,202,203,204  -> success
        3. -> redirect
        4. -> client error
            400 -> bad request
            401 -> unauthorized // not logged in.
            404 -> invalid(resourse not found)

    -MIDDLEWARE 
        -simply a function which has access to req and res
        -global middleware

oct-15(feb-16)

    -route level middleware 
        -global middleware nabanai direct kun kun lai chaheko xa post or delete route lai middleware chaheko xa vane direct route mai halne jun jun ma middleware haleko xa tesley matra magxa middleware ko logic bakile magdaina
        app.delete("/api/todos/reset",checkAuthentication,checkValidRole, (req, res) => {
  // console.log("response  created todos"); //test garni and colsole hatauni clean code banauna
  todos = [];
  return res.status(204).send();
});

    ->delete ma rakhya xa so delete matra check garnxa middleware ko logic
    -> app.use(express.json())  // sets up req.body // () =>{return(req,res,next) =>{}}
