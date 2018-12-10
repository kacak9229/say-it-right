const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const passport = require('passport')
const dotenv = require('dotenv')
const helmet = require('helmet')
const app = express()

const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)

mongoose.connect(
  process.env.MONGO,
  err => {
    if (err) {
      throw err
    }
    console.log('Connected to the database')
  }
)

app.use(helmet())
/* Middlewares for setting up templates and static folders - SPECIFICALLY FOR BUILDING WEB PAGES LATER ON */
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
  noCache: true
})

app.set('view engine', 'html')
app.use(express.static(__dirname + '/public'))
/* END */

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

/* App routes */
const mainRoutes = require('./routes/main')
const accountRoutes = require('./routes/account')
app.use('/api', mainRoutes)
app.use('/api', accountRoutes)

app.listen(process.env.PORT, err => {
  if (err) {
    throw err
  }
  console.log('Listening on Port', process.env.PORT)
})
