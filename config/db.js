const mongoose = require('mongoose');
// const config = require('config');

const db = "mongodb+srv://dquanghuy4444:huy123456@cluster0.kf2np.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDb = async() =>{
    try {
        await mongoose.connect(db , {
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        console.log("da ket noi db");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDb;
