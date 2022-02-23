import mongoose from "mongoose";


const PostSchema = new mongoose.Schema(
    {
    userId: {
        type:String,
        required: true
    },
    desc:{
        type:String,
        max:500
    },
    img:{
        type: String
    },
    likes: {
        type:Array,
        default:[]
    }
},

{timestamps: true}

);

// var Post = mongoose.model('Post', PostSchema)

export default mongoose.model('Post', PostSchema)