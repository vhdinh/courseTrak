import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import Course from '../models/Course';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwtSecret from '../secrets/jwt';

const JWT_Secret = jwtSecret;

const port = 4000;

mongoose.connect('mongodb://localhost/courseTrak', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true })
    .then(() => console.log(`connection success to MONGODB FOR courseTrak port: ${port}`))
.catch((err) => console.error(err));


// Course get all
router.route('/course').get((req, res) => {

    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        } else {
            res.json(courses);
        };
    });
});

// Course get by id
router.route('/course/:id').get((req, res) => {
    Course.findById(req.params.id, (err, course) => {
        if (err) {
            console.log(err);
        } else {
            res.json(course);
        }
    });
});

// Course update
router.route('/course/update/:id').put((req, res) => {
    Course.findById(req.params.id, (err, course) => {
        if (!course)
            return next(new Error('Could not load Course'));
        else {
            course.title = req.body.title;
            course.description = req.body.description;
            course.professor = req.body.professor;
            course.seat = req.body.seat;
            // course.student = req.body.student;
            // course.status = req.body.status;
            course.save().then(updatedCourse => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        };
    });
});

// Course add
router.route('/course/add').post((req, res) => {
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
router.route('/course/delete/:id').get((req, res) => {
    Course.findByIdAndRemove({_id: req.params.id}, (err, course) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

// User get all
router.route('/user').get((req, res) => {
    User.find((err, users) => {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        };
    });
});

// User get ID
router.route('/user/:id').get((req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});


// User add
router.route('/user/add').post((req, res) => {
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            return console.log(err)
        }
        else{
            if(user){
                return res.json({'alert': 'Email already in the system'})
            }
            else{
                var new_user = new User({
                    email: req.body.email,
                    password: req.body.password,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    role: ['Admin', 'Professor', 'Student']
                })
                new_user.save().then(user => {
                    // res.status(200).json({'user': 'Added successfully'});
                    var token = jwt.sign(user.toJSON(), jwtSecret);
                    res.status(200).send({
                        signed_user: user.toJSON(),
                        token: token
                    })
                    }).catch(err => {
                        res.status(400).send('Failed to create new user');
                    });
            }
        }
    });
});

// User update
router.route('/user/update/:id').put((req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (!user)
            return next(new Error('Could not load user'));
        else {
            user.password = req.body.password;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.role = req.body.role;
            user.save().then(updatedUser => {
                res.json('Update done', updatedUser);
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        };
    });
});

// User delete
router.route('/user/delete/:id').get((req, res) => {
    User.findByIdAndRemove({_id: req.params.id}, (err, user) => {
    if (err)
        res.json(err);
    else
        res.json('Removed successfully');
    });
});


router.route('/login').post((req, res) => {
    User.find({email: req.body.email}, function(err, user){
        if(user[0] === undefined || user[0].length == 0 || user[0].email === undefined){
            console.log("LOGIN RESULT - ", user[0])
            res.json({'alert': "Unable to find email"});
        }
        else{
            bcrypt.compare(req.body.password, user[0].password, function(err, isMatch){
                if(isMatch == false){
                    res.json({'alert': 'Incorrect password'})
                }
                else{
                    var token = jwt.sign(user[0].toJSON(), jwtSecret);
                    res.status(200).send({
                        signed_user: user[0].toJSON(),
                        token: token
                    })
                }
            })
        }
    });
})


export default router;