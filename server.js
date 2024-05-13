const express = require('express');
// ---------------------------
const db = require('./db/DB.js');
// ---------------------------
const app = express();
const bodyParser = require('body-parser')
const personRouter = require('./routers/personRoutes.js')
const routerMenu = require('./routers/menuRoutes.js')

// ------------------------
const passpost = require('./middleware/Auth.js')
// ------------------------
require('dotenv').config()

// MiddleWare function
// const logRequest = (req, res, next) => {
//   console.log(`${new Date().toLocaleDateString()} Request made to : ${req.originalUrl}`);
//   next() // Move on to the next phase 
// }



app.use(passpost.initialize())
// app.use(logRequest)
const localAuthmiddleWare = passpost.authenticate('local', { session: false })

app.get('/', function (req, res) {
  res.send("welcome to our Hotel")

})

app.use(bodyParser.json());
app.use('/person',localAuthmiddleWare, personRouter)
app.use('/menu', routerMenu)


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`server is running on port:${port}🎃🍔`);
});
