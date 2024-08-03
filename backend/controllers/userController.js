import userModel from "../model/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const createToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET)
}

//register user
const signup = async (req, res) => {
    const {name , password , email} = req.body;

        // Password validation regex
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //check email is already register or not
    try {
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,messsage:"User already exixts"})
        }

        // Check if the password is strong
        if (!passwordRegex.test(password)) {
            return res.json({ success: false, message: "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special symbol." });
        }

        // if (password.length<8) {
        //     return res.json({success:false,messsage:"Please enter strong password"})
        // }

        //to encrypt the passowrd
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        // create new user
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword,
        })

        // to save the user in database
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,messsage:"Error"})
    }
}

//login user
const login = async(req, res) => {
    const {email , password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false, messsage:"user Does not exist"})
        }
        const isMatch = await bcrypt.compare(password , user.password)
        if (!isMatch) {
            return res.json({success:false,messsage:"Invalid credentials"})
        }
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,messsage:"Error"})
    }
}
export {signup , login}