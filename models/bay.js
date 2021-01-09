const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BaySchema = new Schema({
    creator:String,
    id: ObjectId,
    title: String,
    content:String,
    comments:[{ 
        username:String,
        comment:String
     }],
    upvotes:{type:Number,default:0},
    downvotes:{type:Number,default:0},
    date:{type:Date,default:Date.now}
})
 
module.exports = mongoose.model('Bay', BaySchema);