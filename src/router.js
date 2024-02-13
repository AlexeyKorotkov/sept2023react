import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {ErrorPage} from "./pages/ErrorPage";
import {PostsIdPage} from "./pages/PostsIdPage";


const router=createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<ErrorPage/> ,children:[
            {
                index:true, element:<Navigate to={'comments'}/>
            },
            {
                path:'todos', element:<TodosPage/>
            },
            {
                path:'albums', element:<AlbumsPage/>
            },
            {
                path:'comments', element:<CommentsPage/>,children:[
                    {path: 'posts',element:<PostsIdPage/>}
                ]
            }

        ]
    }
]);


export {
    router
}