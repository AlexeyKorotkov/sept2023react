const Post = ({post,getCurrentPost}) => {
    let {id, title} = post;

    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <button onClick={()=>getCurrentPost(post)}>Posts</button>

        </div>
    );
};

export {Post};