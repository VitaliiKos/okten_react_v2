import {apiService} from "./apiService";
import {mainUrls} from "../config";

const registerService = {
    create:(user)=> apiService.post(mainUrls.users, user)
};

export {registerService};