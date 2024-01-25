const mongoose = require('mongoose')
const colors = require("colors");
require('dotenv').config();
const connectDB = async()=>{
    try {
        await  mongoose.connect(process.env.MONGO_URI);
         console.log(`Connected to database ${mongoose.connection.host}`.bgGreen.white);
    }catch(error){
        console.log(`MONGO Connection Error ${error}`.bgRed.white);
    }

}
module.exports = connectDB;