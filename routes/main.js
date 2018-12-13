const router = require('express').Router()

/* Landing page */
router.get('/', (req, res) => {
  res.render('landing', {
    header: 'Welcome to say it right',
    title: 'Say it right'
  })
})

module.exports = router
