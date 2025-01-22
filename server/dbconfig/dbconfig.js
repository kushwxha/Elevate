const mongoose = require('mongoose');

require('dotenv').config();
const dbconnect = () => {
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('Database Connected Successfully');
    }).catch((err) =>{
        console.log("Database connection failed ",err);
        process.exit(0);
    })
}

module.exports = dbconnect;