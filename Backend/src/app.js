const express = require('express');
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/user.auth')

const app = express();

app.use(express.json())
app.use(cookieParser())


app.use('/api',authRouter)
app.use('/api',authRouter)



module.exports = app;