import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id }; // Ensure the decoded ID is correctly attached
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: "Error" });
    }
}

export default authMiddleware;
