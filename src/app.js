import express  from "express";
import path from 'path'
import exphbs from 'express-handlebars'
import indexRoutes from './routes/index.routes.js'
import morgan from "morgan";
import './database.js'

const app = express()

app.set('views', path.resolve('src/views'))

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

// Midllewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Routes
app.use(indexRoutes)

// static files
app.use(express.static(path.resolve('src/public')))

export default app