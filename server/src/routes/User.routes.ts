import express, { Request, Response } from "express";
import { UserModel } from "../models/User.model";
import bcrypt from "bcrypt";
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

// REGISTER
userRouter.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // H A S H I N G
  try {
    bcrypt.hash(password, 8, async (err, hashedPassword) => {
      if (err) {
        console.log(err);
        res.send("Error in Registration");
      } else {
        const user = new UserModel({
          name,
          email,
          password: hashedPassword,
        });
        await user.save();

        res.send(`${name}, You are Successfully Registered`);
      }
    });
  } catch (err) {
    res.send("Error in Registration");
    console.log(err);
  }
});

// LOGIN
userRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      const hashed_password = user.password;
      bcrypt.compare(password, hashed_password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user._id }, process.env.key, {
            expiresIn: "1d",
          });
          console.log("Login Success");
          res.send("Login Successful");
        } else {
          res.send("Wrong Credentials");
        }
      });
    } else {
      res.send("Enter Correct Details");
    }
  } catch (err) {
    console.log(err);
    res.send("Something Went Wrong");
  }
});

export { userRouter };
