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


//app config
const app = express();

const port = process.env.PORT || 9000;

// dotenv.config();




//middleware
app.use(express.json());  
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

// app.use((req,res,next) =>{
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Header", "*");
//     next();
// })



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
