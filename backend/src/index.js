// import express from "express"
// import notesRoutes from "./routes/notesRoutes.js"
// import { connectDB } from "./config/db.js";
// import dotenv from "dotenv"
// import rateLimiter from "./middleware/rateLimiter.js";
// import cors from "cors"
// import path from "path"


// dotenv.config();
// const app=express();
// const PORT=5000;
// const __dirname=path.resolve();


// if(process.env.NODE_ENV!=="production"){
// app.use(cors({
//     origin:"http://localhost:5173"
// }));
// }

// app.use(rateLimiter);
// app.use(express.json());



// app.use("/api/notes",notesRoutes);


// if(process.env.NODE_ENV==="production"){
// app.use(express.static(path.join(__dirname,"../frontend/dist")))
// app.get("*",(req,res)=>{

//     res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))

// });
// }
//   // it will ensure that the number req should less inorder to handle the large number 
// // console.log(v


// app.get("/",(req,res)=>{
//     res.send("dekh chal ra hai ki ni");
// })
// app.listen(PORT,()=>{
//     console.log("server is running at the port number 5000");
//     connectDB();
// })

import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"
import path from "path"

dotenv.config();
const app = express();
const PORT = 5000;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(cors({
    origin: "http://localhost:5173"
  }));
}

app.use(rateLimiter);
app.use(express.json());

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html")); // ✅ fixed here
  });
}

app.get("/", (req, res) => {
  res.send("dekh chal ra hai ki ni");
});

app.listen(PORT, () => {
  console.log("server is running at the port number 5000");
  connectDB();
});
