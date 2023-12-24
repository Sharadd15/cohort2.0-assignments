const { Router } = require("express");
const { Admin, Course } = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const userName = req.body.username;
    const password = req.body.password;
    //console.log(req.body);
    Admin.findOne({username: userName})
        .exec()
        .then((data) => {
            if(data)
                res.status(409).json({message: 'User already exists.'});
            else
            {
                Admin.create({
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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
    })
    .then(data => {
        res.json({
            message: 'Course created successfully', 
            courseId: data._id
        });
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create course internal server error."});
    });
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
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

module.exports = router;