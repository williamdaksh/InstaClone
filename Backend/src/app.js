const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.routes');
const postRouter = require('./routes/post.routes');

const app = express();

app.use(cors({
        origin:"http://localhost:5173",
        credentials:true
}))
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth',authRouter);
app.use('/api/post',postRouter);



module.exports = app;