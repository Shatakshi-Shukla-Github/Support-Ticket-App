const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

//Function for protecting the route:-
const protect = asyncHandler(async (req, res, next) => {
    let token


    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            //Get token from Header
            //Here "split" will split the content of the header to get token. So the header consists of "Bearer" and the token so "split" will decode the content of the header into an array of elements with the help of a "space" where on the Zeroth index lies the "Bearer" and on First index lies the token
            token = req.headers.authorization.split(" ")[1]


            //Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)


            //Get user from token [we only need the user id and not the password therefore minus it]
            req.user = await User.findById(decoded.id).select("-password")


            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Not Authorized")
        }
    }


    if (!token) {
        res.status(401)
        throw new Error("Not Authorized")
    }
})


module.exports = { protect }