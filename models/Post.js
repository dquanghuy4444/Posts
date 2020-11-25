const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const postShema = new Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('post' , postShema);