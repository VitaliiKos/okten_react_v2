import React, {useState} from 'react';

import {CarForm, Cars} from "../../components";

const CarPage = () => {

    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div>
            CarPage
            <CarForm carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarPage};