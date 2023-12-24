// Middleware for handling auth
const jwtAdmin = require('jsonwebtoken');
const jwtAdminPass = "AdminPass"
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    jwtAdmin.verify(token.slice(7), jwtAdminPass, err => {
        if(err)
            res.status(404).json({ message: "Invalid token"});
        else
            next();
    });
}

module.exports = {adminMiddleware, jwtAdmin, jwtAdminPass};