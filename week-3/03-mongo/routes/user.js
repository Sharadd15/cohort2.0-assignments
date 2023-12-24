const { Router } = require("express");
const { User, Course } = require("../db/index");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const userName = req.body.username;
    const password = req.body.password;
    //console.log(req.body);
    User.findOne({username: userName})
                .exec()
                .then((data) => {
                    if(data)
                        res.status(409).json({message: 'User already exists.'});
                    else
                    {
                        User.create({
                            username: userName,
                            password: password
                        });
                        res.json({message: 'User created successfully'});
                    }
                })
                .catch(err => {
                    res.status(500).json({ message: "Internal server error." });
                    console.log(err);
                });
});

router.get('/courses', userMiddleware,  (req, res) => {
    // Implement listing all courses logic
    Course.find({}).exec()
                    .then(data =>
                    {
                        if(data)
                            res.json(data);
                    })
                    .catch(err => {
                        res.status(500).json({ message: "Internal server error."});
                        console.log(err);
                    });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    var userName = req.headers.username;
    var courseId = req.params.courseId;
    User.findOneAndUpdate(
        {username: userName},
        {$addToSet: {purchasedCourses: courseId} },
        {new: true})
        .exec()
        .then(updatedData => {
            res.json({
                message: "Course purchased successfully."
            });
            console.log(updatedData);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    let userName = req.headers.username;
    User.findOne({username: userName})
                .exec()
                .then(data => {
                    Course.find({_id: {$in: data.purchasedCourses}})
                           .exec()
                           .then(courses => {
                                res.json(courses);
                           })
                           .catch(err => {
                                res.status(500).json({message: "Internal server error"});
                                console.log(err);
                           });
                })
                .catch(err => {
                    res.status(500).json({message: "Internal server error"});
                    console.log(err);
                })
});

module.exports = router