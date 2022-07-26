const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
require('dotenv').config()

const indexRouter = require('./src/modules/routersIndex')

const port = process.env.PORT

const app = express()
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(fileUpload({
  limits: { fileSize: process.env.MAXSIZEUPLOAD * 1024 * 1024 },
  createParentPath: true,
}))
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(process.env.PORT || 3030, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor funcionando en el puerto ${process.env.PORT}`)
})

module.exports = app