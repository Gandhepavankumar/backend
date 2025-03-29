import dotenv from "dotenv";
import conncetDB from "./db/index.js";
import express from "express";
const app = express();
import cors from "cors";
dotenv.config({
    path:"./env"
});

conncetDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port, ${process.env.PORT}`);
    })
})
.catch(error => console.error(" MONGODB CONNECTION ERROR !!!!",error));    
























// const app = express();
// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("Server error");
//             throw error;
            
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log("Server is running on port 3000")
//         })
//     } catch (error) {
//         console.error(error)
//         throw error 
//     }
// })()