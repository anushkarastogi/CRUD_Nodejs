const express = require('express');
const PORT = process.env.PORT || 8080
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const connectDB = require('./server/database/connection');

dotenv.config( { path : 'config.env'} )

app.use(bodyparser.urlencoded({ extended : true})) 

app.set("view engine", "ejs")

//app.set("views", path.resolve(__dirname, "views/ejs"))
 
app.use(morgan('tiny'));

connectDB();

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/routes'))

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})