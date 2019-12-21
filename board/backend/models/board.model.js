const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    imageName:{  type:String, default:"none",  required:true },
    imageData:{ type:String, required:true },
    category1:{ type:Boolean, required:true },
    category2:{ type:Boolean, required:true },
    category3:{ type:Boolean, required:true },
    category4:{ type:Boolean,required:true },
    subject:{type:String, required:true },
    content:{ type:String,  required:true },
    no:{ type:Number, required:true },
    address:{   type:String, required:true  }
});

const Board = mongoose.model('Board', exerciseSchema);

module.exports = Board;