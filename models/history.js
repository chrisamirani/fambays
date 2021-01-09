const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const HistorySchema = new Schema({
    id: ObjectId,
    hist: [{}],
    date:{type:Date,default:Date.now}
})



module.exports = mongoose.model('History', HistorySchema);