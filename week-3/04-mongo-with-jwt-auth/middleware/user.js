const jwtUser = require('jsonwebtoken');
const jwtUserPass = "UserPass"
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    jwtUser.verify(token.slice(7), jwtUserPass, err => {
        if(err)
            res.status(404).json({ message: "Invalid token"});
        else
            next();
    });
}

module.exports = {userMiddleware, jwtUser, jwtUserPass};