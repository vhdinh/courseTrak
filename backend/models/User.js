
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';

const User = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    role : [{
        type: String
    }]
}, { timestamps: true});

User.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')){
        return next();
    }

    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(user.password, salt, function(err, hash){
            user.password = hash;
            next();
        })
    })
});

export default mongoose.model('users', User);