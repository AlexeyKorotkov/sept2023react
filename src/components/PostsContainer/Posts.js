import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post} from "./Post";


const Posts = () => {
    const [post,setPost]=useState(null)
    const {state:{postId}}=useLocation();

    useEffect(() => {
        postService.getById(postId).then(({data})=>setPost(data))
    }, [postId]);


    return (

            <div>
                {post&& <Post post={post}/>}
            </div>

    );
};

export {Posts};