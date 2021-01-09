const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ReplySchema = new Schema({
    id: ObjectId,
    Reply:String,
    question:[{ type: Schema.Types.ObjectId, ref: 'Bay' }],
    upvotes:Number,
    downvotes:Number,
    date:{type:Date,default:Date.now}
})

module.exports = mongoose.model('Reply', ReplySchema);