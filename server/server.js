const express = require('express')
const cors = require('cors')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require("./config/connect");

dotenv.config();
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')
connectDB();
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog",blogRoutes)

app.get("/",(req,res) =>{
    res.status(200).send({
        message:"Node Server",
    });
});
const PORT = process.env.PORT ||  8000;
app.listen(PORT, () =>{
    console.log(`Server is running on ${process.env.DEV_MODE} port no ${PORT}`.blue);
});