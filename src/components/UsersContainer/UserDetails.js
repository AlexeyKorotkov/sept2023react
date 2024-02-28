import {useNavigate} from "react-router-dom";


const UserDetails = ({userDetails}) => {

    const {id,name,username,email}=userDetails;
    const navigate= useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={()=>navigate('posts')}>GetPosts</button>
        </div>
    );
};

export  {UserDetails};