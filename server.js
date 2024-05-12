const express = require('express');
const db = require('./db/DB.js');
const app = express();
const Person = require('./model/person.js');
const bodyParser = require('body-parser')
const MenuItem = require('./model/menu.js')
const personRouter = require('./routers/personRoutes.js')
const routerMenu = require('./routers/menuRoutes.js')


app.use(bodyParser.json());
app.use('/person', personRouter)
app.use('/menu', routerMenu)



app.listen(5000, () => {
    console.log(`server is running on port:5000🎃🍔`);
});


// 13:00












/*

{
  "name": "John Doe",
  "age": 35,
  "work": "Chef",
  "mobile": "123-456-7890",
  "address": "123 Main Street",
  "salary": 50000
}



    // newPerson.name = data.name;
    // newPerson.age = data.age;
    // newPerson.mobile = data.mobile;
    // Old Method no need now
    // newPerson.save((error,savePerson)=>{
    //     if(error){
    //         console.log('Error',error);
    //         res.status(500).json({error:'Internal server error'})
    //     }
    //     else{
    //         console.log(data);
    //         res.status(200).json(savePerson)

    //     }
    // })
*/