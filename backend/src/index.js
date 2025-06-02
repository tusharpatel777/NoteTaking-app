import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"


dotenv.config();
const app=express();

app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(rateLimiter);
app.use(express.json());



app.use("/api/notes",notesRoutes);
  // it will ensure that the number req should less inorder to handle the large number 
// console.log(v
const PORT=5000;

app.get("/",(req,res)=>{
    res.send("dekh chal ra hai ki ni");
})
app.listen(PORT,()=>{
    console.log("server is running at the port number 5000");
    connectDB();
})