import dotenv from "dotenv";
import conncetDB from "./db/index.js";


dotenv.config({
    path:"./env"
});

conncetDB();
























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