import { createError } from "../../helpers/index.js";
import { User } from "../../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import "dotenv/config";
const { JWT_SECRET } = process.env;

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw createError(400, "Email or password invalid")
    }

    const isPasswordCompare = await bcrypt.compare(password, user.password);

    if (!isPasswordCompare) {
        throw createError(400, "Email or password invalid")
    }
    // if (!user.verify) {
    //     throw createError(401, "Verify invalid")
    // }
    const verifyToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    await User.findByIdAndUpdate(user._id, { token: verifyToken });

    res.status(200).json({
        user: {
            email,
            _id: user._id
        },
        token: verifyToken
    });

}
export default loginUser;