const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    username:String,
    password: String,
    email:String,
    level:Number,
    banned:{type:Number,default:0},
    confirmed:{type:Number,default:0}
})


UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(15, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();

        });
    });
});

/* comparing passwords*/
UserSchema.methods.comparePass = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);