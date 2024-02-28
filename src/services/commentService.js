import {apiSesvice} from "./apiService";
import {urls} from "../constants/urls";


const commentService={
    getByPostId:(postId)=>apiService.get(urls.comments, {params:{postId}})
}

export {
    commentService
}