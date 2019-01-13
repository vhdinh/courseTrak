const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
import Course from '../models/Course';

const port = 4000;

mongoose.connect('mongodb://localhost/courseTrak', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true })
    .then(() => console.log(`connection success to MONGODB FOR courseTrak port: ${port}`))
.catch((err) => console.error(err));


// Course get all
router.route('/courses').get((req, res) => {

    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        } else {
            res.json(courses);
        };
    });
});

// Course get by id
router.route('/courses/:id').get((req, res) => {
    Course.findById(req.params.id, (err, course) => {
        if (err) {
            console.log(err);
        } else {
            res.json(course);
        }
    });
});

// Course update
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
            course.status = req.body.status;
            course.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        };
    });
});

// Course add
router.route('/courses/add').post((req, res) => {
    let course = new Course(req.body);
    course.save()
        .then(course => {
            res.status(200).json({'courese': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new course');
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


export default router;