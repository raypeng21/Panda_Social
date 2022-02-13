//importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors"

//app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1346904",
    key: "739310b287ee5fb66200",
    secret: "1bc04da4dede5c39a59a",
    cluster: "us3",
    useTLS: true
  });



//middleware
app.use(express.json());

app.use(cors());

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

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log(change);

        if(change.operationType == "insert"){
            const messageDetail = change.fullDocument;
            pusher.trigger('message', 'insert',
            {
                name: messageDetail.name,
                message: messageDetail.message,

            })
        }else {
            console.log("error triggering Pusher")
        }
    })
})



//api route
app.get("/",(req,res) => res.status(200).send("hello world"))     //200's ====> Means OKAY


app.get('/messages/sync',(req, res) => {
    Messages.find((err,data) => {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})


app.post('/messages/new', (req, res) => {
    const dbMessage = req.body
    
    Messages.create(dbMessage, (err,data) => {
        if(err){
            res.status(500).send(err)                       //501 error
        } else{
            res.status(201).send({data})   //201 created
        }

    })
})




//listen

app.listen(port,() => console.log(`Listening on localhost:${port}`))
