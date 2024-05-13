const passpost = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const Person = require('../model/person.js');


passpost.use(new LocalStrategy(async (USERNAME, password, done) => {
    // authentication logic here
    try {
      console.log('recive Credientils', USERNAME, password);
      const user = await Person.findOne({ username: USERNAME })
      if (!user)
        return done(null, false, { message: "Incorrect Usrname" });
      const isPasswordMatch = user.comparePassword(password)
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect Password." })
      }
    }
    catch (error) {
      return done(error)
    }
  }))



  module.exports = passpost