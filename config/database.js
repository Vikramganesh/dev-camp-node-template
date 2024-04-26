const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser:true
        });
        console.log('Database Connected..');
    } catch (error) {
        console.log('Database Not Connected..',error);
    }
}


module.exports = connectDB;