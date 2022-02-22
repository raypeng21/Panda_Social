import Post from '../Post/Post';
import Share from "../Share/Share";
import "./feed.css";
// import { Posts } from "../../dummyData";
import { useState, useEffect} from "react";
import axios from "axios";

export default function Feed() {

    const[posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () =>{
            const res = await axios.get("posts/timeline/6210169879f1542c7b864e40");
            setPosts(res.data);
        }
        
        fetchPosts();

    }, [])
    
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}