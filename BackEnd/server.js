import express from "express"
import cors from "cors"
import dotenv from"dotenv"
import { userRouter } from "./routes/user.js"
const app=express();
dotenv.config();
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true, 
    })
  );
app.use("/addUser", userRouter);
app.listen(process.env.PORT,()=>{
    console.log("Server Created");
})