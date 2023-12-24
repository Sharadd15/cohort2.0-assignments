const Admin = require('../db/index').Admin;
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const userName = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({username: userName})
         .exec()
         .then((data) => {
            if(data.password === password)
                next();
            else
                res.status(404).json({
                    message: "Invalid UserName or password."
            });
        })
        .catch(err =>
        {
            res.status(500).json({
                message: "Internal server error."
            });
            console.log(err);
        });
}

module.exports = adminMiddleware;