import Post from '../Post/Post';
import Share from "../Share/Share";
import "./feed.css";
import { useState, useEffect} from "react";
// import axios from "../../axios";
import axios from 'axios';

export default function Feed({username}) {

    const[posts, setPosts] = useState([]);
    // const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () =>{
            const res = username
            ? await axios.get("/posts/profile/" + username)
            : await axios.get("/posts/timeline/6216fa2d2f6851f751007d5c") 
            setPosts(res.data);
        }
        
        fetchPosts();

    }, [username])
    
  return (
    <div className="feed">
      <div className="feedWrapper">
        
      {/* {(!username || username === user.username) && <Share />} */}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}