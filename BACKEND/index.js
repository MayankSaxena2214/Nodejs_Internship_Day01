import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { ErrorMiddleware } from "./middlewares/error.js";
import { userRouter } from "./routers/userRouter.js";


const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
dotenv.config();
dbConnection();

app.use("/api/v1/users",userRouter);

app.use(ErrorMiddleware);
app.listen(process.env.PORT,()=>{
    console.log(`App is listening on the port ${process.env.PORT}`);
})