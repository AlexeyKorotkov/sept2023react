import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

let launchService={
    getAll:()=>axiosService.get(urls.launches),

}

export {
    launchService
}