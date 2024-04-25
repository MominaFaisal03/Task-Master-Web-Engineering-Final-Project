import bcrypt from "bcrypt";
import express from "express";
import { user } from "../models/userSchema.js";

const router = express.Router();

router.post("/addUser", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "Please provide all details" });
        }
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new user({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        return res.json({ success: true, message: "User added successfully" });
    } catch (err) {
        console.error("Error:", err);
        if (err.code === 11000) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

router.get("/display", async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export { router as userRouter };
