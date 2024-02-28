import {Comments} from "../components/CommentsContainer/Comments";


const PostDetails = ({post}) => {
    const {id,userId,name,body,title}=post;

    return (
        <div>
            <div>:id {id}</div>
            <div>:userId {userId}</div>
            <div>:name {name}</div>
            <div>:body {body}</div>
            <div>:title {title}</div>
            <hr/>
            <Comments postId={id}/>
        </div>
    );
};

export {PostDetails};