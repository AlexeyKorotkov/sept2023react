import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {UserDetails} from "../components/UsersContainer/UserDetails";


const UserDetailsPage = () => {
    const {userId}=useParams();
    const [user,setUser]=useState(null)
    const {state}=useLocation()


    useEffect(() => {
        if (state){
            setUser(state.user)
        }else {
        userService.getById(userId).then(({data})=>setUser(data))
        }
    }, [userId]);

    return (
        <div>
            {user &&<UserDetails user={user}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};