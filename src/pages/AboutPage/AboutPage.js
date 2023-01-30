import {useContext} from "react";
import {MyContext} from "../../index";
import {Button} from "../../components";

const AboutPage = () => {
    const context = useContext(MyContext);
    context.gender = 'male';
    Object.assign(context, {status:true})
    delete context.name
    return (
        <div>
            <Button click={()=>console.log("click Button")} style={{background:'yellow'}}>Click</Button>
            AboutPage
        </div>
    );
};

export {AboutPage};