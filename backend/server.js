import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Course from './models/Course';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

mongoose.connect('mongodb://localhost/courseTrak', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true })
    .then(() => console.log(`connection success to MONGODB FOR courseTrak port: ${port}`))
    .catch((err) => console.error(err));


// get all courses
router.route('/courses').get((req, res) => {

    Course.find((err, courses) => {
        console.log('TESTING GET ALL COURSES');
        if (err) {
            console.log(err);
        } else {
            res.json(courses);
        }
    });
});

// get course by id
router.route('/courses/:id').get((req, res) => {
    Course.findById(req.params.id, (err, course) => {
        if (err) {
            console.log(err);
        } else {
            res.json(course);
        }
    });
});

// add course
router.route('/courses/add').post((req, res) => {
    let courese = new Course(req.body);
    course.save()
        .then(course => {
            res.status(200).json({'courese': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new course');
        });
});

// update course
router.route('/courses/update/:id').post((req, res) => {
    Course.findById(req.params.id, (err, course) => {
        if (!course)
            return next(new Error('Could not load Course'));
        else {
            course.title = req.body.title;
            course.description = req.body.description;
            course.professor = req.body.professor;
            course.seat = req.body.seat;
            course.student = req.body.student;
            issue.status = req.body.status;
            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// delete course
router.route('/courses/delete/:id').get((req, res) => {
    Course.findByIdAndRemove({_id: req.params.id}, (err, course) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/', router);

app.listen(port, () => {
    console.log(`EXPRESS SET UP ON ${port}`);
});