import {useContext} from "react";
import {MyContext} from "../../index";

const UsersPage = () => {
    const context = useContext(MyContext);
    return (
        <div>
            {JSON.stringify(context)}
        </div>
    );
};

export {UsersPage};