import userModel from "../model/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Function to create a JWT token
const createToken = (id) => {
    // Sign and return a token with the user's ID and a secret key
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

// Register a new user
const signup = async (req, res) => {
    const { name, password, email } = req.body;

    // Password validation regex for strong password requirements
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    try {
        // Check if a user with the given email already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate the password strength using regex
        if (!passwordRegex.test(password)) {
            return res.json({ success: false, message: "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special symbol." });
        }

        // Encrypt the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with the provided details and the hashed password
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        // Save the new user to the database
        const user = await newUser.save();
        // Generate a token for the new user
        const token = createToken(user._id);
        // Respond with success status and the token
        res.json({ success: true, token });
    } catch (error) {
        // Log any errors and respond with a failure message
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// Log in an existing user
const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // Find the user with the given email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        // Generate a token for the logged-in user
        const token = createToken(user._id);
        // Respond with success status and the token
        res.json({ success: true, token });
    } catch (error) {
        // Log any errors and respond with a failure message
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { signup, login }
