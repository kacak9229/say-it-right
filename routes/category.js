const router = require('express').Router()
const Category = require('../models/category')
const Message = require('../models/message')

router
  .route('/categories')
  .get((req, res) => {
    Category.find({}, (err, categories) => {
      res.render('main/categories', categories)
    })
  })
  .post((req, res) => {
    let category = new Category()
    category.title = req.body.category
    category.save()
    res.redirect('/categories')
  })

router.get('/categories/:id', (req, res) => {
  Message.find({ category: req.params.id }, (err, messages) => {
    res.render('main/messages', {
      messages
    })
  })
})

/** API for posting messages as guy or girls */
router.post('/categories/:id/:gender', (req, res) => {
  const message = new Message()

  if (req.params.gender === 'guy') {
    message.content = req.body.message
    message.category = req.params.id
    message.gender = 0
    message.save()
  } else {
    message.content = req.body.message
    message.category = req.params.id
    message.gender = 1
    message.save()
  }

  res.json({
    sucess: true,
    message: `Success ${message.gender} ${req.params.gender}`
  })
})

module.exports = router
