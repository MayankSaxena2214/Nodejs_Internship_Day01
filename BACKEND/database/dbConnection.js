import mongoose from "mongoose"

export const dbConnection=async()=>{
    await mongoose.connect(process.env.MONGODB_URL,{
        dbName:"Day01"
    })
    .then(()=>{
        console.log("Mongodb Connected");
    })
    .catch((err)=>{
        console.log(`Error occured ${err}`);
    })
}