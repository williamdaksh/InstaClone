require('dotenv').config()
const app = require('./src/app')
const connectToDB = require('./src/config/database')

connectToDB();

app.listen(process.env.PORT ,()=>{
    console.log("server in listion at port :"+process.env.PORT)
})