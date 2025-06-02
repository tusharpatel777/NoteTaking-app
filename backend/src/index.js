// // import express from "express"
// // import notesRoutes from "./routes/notesRoutes.js"
// // import { connectDB } from "./config/db.js";
// // import dotenv from "dotenv"
// // import rateLimiter from "./middleware/rateLimiter.js";
// // import cors from "cors"
// // import path from "path"


// // dotenv.config();
// // const app=express();
// // const PORT=5000;
// // const __dirname=path.resolve();


// // if(process.env.NODE_ENV!=="production"){
// // app.use(cors({
// //     origin:"http://localhost:5173"
// // }));
// // }

// // app.use(rateLimiter);
// // app.use(express.json());



// // app.use("/api/notes",notesRoutes);


// // if(process.env.NODE_ENV==="production"){
// // app.use(express.static(path.join(__dirname,"../frontend/dist")))
// // app.get("*",(req,res)=>{

// //     res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))

// // });
// // }
// //   // it will ensure that the number req should less inorder to handle the large number 
// // // console.log(v


// // app.get("/",(req,res)=>{
// //     res.send("dekh chal ra hai ki ni");
// // })
// // app.listen(PORT,()=>{
// //     console.log("server is running at the port number 5000");
// //     connectDB();
// // })

// import express from "express"
// import notesRoutes from "./routes/notesRoutes.js"
// import { connectDB } from "./config/db.js";
// import dotenv from "dotenv"
// import rateLimiter from "./middleware/rateLimiter.js";
// import cors from "cors"
// import path from "path"

// dotenv.config();
// const app = express();
// const PORT = 5000;
// const __dirname = path.resolve();

// if (process.env.NODE_ENV !== "production") {
//   app.use(cors({
//     origin: "http://localhost:5173"
//   }));
// }

// app.use(rateLimiter);
// app.use(express.json());

// app.use("/api/notes", notesRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));
//   app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
// });

// }

// app.get("/", (req, res) => {
//   res.send("dekh chal ra hai ki ni");
// });

// app.listen(PORT, () => {
//   console.log("server is running at the port number 5000");
//   connectDB();
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});