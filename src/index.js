import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";

await connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("Server is Running");
        
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed");
    
})
/*
import express from "express"
const app=express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERROR:",error);
            throw error
            
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw error
        
    }
})
*/
