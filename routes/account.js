const router = require('express').Router()
const passport = require('passport')

router
  .route('/login')
  .get((req, res) => {
    res.render('main/login', {
      header: 'Say it right',
      title: 'Say it right now hehe'
    })
  })
  .post(
    passport.authenticate('local', {
      successRedirect: '/categories',
      failureRedirect: '/login'
    })
  )

module.exports
