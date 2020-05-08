// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const generateTrashTalk = require('./generate_trash')
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  console.log('req.body : ', req.body)
  // console.log(generateTrashTalk(req.body))
  const trashtalk = generateTrashTalk(req.body)
  let role = ''
  if (req.body.role === 'engineer') {
    role = '工程師'
  }
  if (req.body.role === 'designer') {
    role = '設計師'
  }
  if (req.body.role === 'entrepreneur') {
    role = '創業家'
  }
  const options = req.body
  // console.log(trashtalk)
  res.render('index', { trashtalk: trashtalk, role: role, options: options })
})
// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})