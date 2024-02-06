import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../../Services/axiosService";
import {urls} from "../../Constants/urls";
import {postService} from "../../Services/postService";



const Posts = () => {
    let [posts, setPosts] = useState([])
    // let[postDetails,setPostDetails]=useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    let getCurrentPost=(post)=>{
        console.log(post);
    }
    return (
        <div>

            {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            <hr/>
            {/*{postDetails!==null&&<PostDetails postDetails={postDetails}/>}*/}
        </div>
    );
};

export {Posts};