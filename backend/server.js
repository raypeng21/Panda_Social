//importing
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import Pusher from "pusher";
import cors from "cors"
import userRouter from "./routes/users.js"
import authRouter from "./routes/auth.js"
import postRouter from "./routes/posts.js"
import conversationRouter from "./routes/conversations.js"
import messageRouter from "./routes/messages.js"


import multer from "multer";
import path from "path";
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//app config
const app = express();

const port = process.env.PORT || 9000;

// dotenv.config();
app.use("/images", express.static(path.join(__dirname, "public/images")));




//middleware
app.use(express.json());  
app.use(helmet());
app.use(morgan("common"));
app.use(cors());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/conversations", conversationRouter);
app.use("/api/messages", messageRouter);




//DB config
const connection_url = "mongodb+srv://admin:2zGA2FOTCULAQHG1@cluster0.lltxt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(connection_url,{
    // useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });



const db = mongoose.connection;

db.once('open', () => {
    console.log("DB connected");
})



//api route
// app.get("/",(req,res) => res.status(200).send("hello world"))     //200's ====> Means OKAY







//listen

app.listen(port,() => console.log(`Listening on localhost:${port}`))
