const express = require('express');
const db = require('./db/DB.js');
const app = express();
const bodyParser = require('body-parser')
const personRouter = require('./routers/personRoutes.js')
const routerMenu = require('./routers/menuRoutes.js')
require('dotenv').config()



app.use(bodyParser.json());
app.use('/person', personRouter)
app.use('/menu', routerMenu)


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`server is running on port:${port}🎃🍔`);
});














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