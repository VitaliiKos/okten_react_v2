import {useContext} from "react";
import {AuthContext} from "../hok/AuthProvider";

const useAuthContext = () => useContext(AuthContext);

export {useAuthContext}