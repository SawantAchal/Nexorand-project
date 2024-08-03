import jwt from 'jsonwebtoken';

// Middleware function to authenticate requests using JWT
const authMiddleware = async (req, res, next) => {
    // Extract the token from the 'Authorization' header (assumes format "Bearer <token>")
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // If no token is provided, return a 401 Unauthorized response
    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
    }

    try {
        // Verify the token using the secret key from environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach the decoded user ID to the request object
        req.user = { id: decoded.id };
        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Log any errors and return a 401 Unauthorized response if token verification fails
        console.log(error);
        res.status(401).json({ success: false, message: "Error" });
    }
}

export default authMiddleware;
