import  Mongoose  from "mongoose";


const wechatSchema = Mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

export default Mongoose.model('messagecontents', wechatSchema)