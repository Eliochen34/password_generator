const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
// const bodyParser = require('body-parser') 此寫法已過時
const generatePassword = require('./generate_password')


// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
// app.use(bodyParser.urlencoded({ extended: true })) 此寫法已過時
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('random password is:', generatePassword(req.body))
  const password = generatePassword(req.body)
  res.render('index', { password: password })
})

app.listen(port, () => {
  console.log(`This is the password generator project on http://localhost:${port}`)
})