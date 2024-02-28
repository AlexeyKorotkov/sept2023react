import {useLoaderData} from "react-router-dom";
import {PostDetails} from "../PostsContainer/PostDetails";


const PostDetailsPage = () => {
    const {data}=useLoaderData();
    return (
        <div>
            <PostDetails post={data}/>
        </div>
    );
};

export {PostDetailsPage};