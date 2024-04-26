const express = require('express')
const dotenv  = require('dotenv')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/database')



// load the env variables.
dotenv.config({ path: './config/config.env' })

// calling db

connectDB()

// router

const bootCamps = require('./routes/bootcamps.route')

const errorHandler = require('./middlewares/error')
const auth = require('./routes/auth')

const app = express()

app.use(express.json())
app.use(cookieParser())



// dev logging middleware

if(process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootCamps);
app.use(errorHandler);
app.use('/api/v1/auth', auth);


const PORT = process.env.PORT

const server = app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`)
})

// unhandledRejection

process.on('unhandledRejection', (err,Promise)=>{
    console.log(`Error: ${err.message}`);
    // close server & exit
    server.close(()=>Promise.exit(1))
})