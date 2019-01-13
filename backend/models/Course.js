
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Course = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    professor: {
        type: String
    },
    seat: {
        type: Number
    },
    student: [{
        type: String
    }],
    status: {
        type: String,
        default: 'Open'
    }
}, { timestamps: true});

export default mongoose.model('Course', Course);