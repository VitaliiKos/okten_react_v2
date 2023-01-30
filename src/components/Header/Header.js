import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {
    const {user} = useAuthContext();
    return (
        <div className={css.Header}>
            <NavLink to={""}>home</NavLink>
            <NavLink to={"users"}>users</NavLink>
            <NavLink to={"posts"}>posts</NavLink>
            <NavLink to={"about"}>about</NavLink>
            {user && <div>{user}<button>LogOutS</button>  </div>}
        </div>
    );
};

export {Header};