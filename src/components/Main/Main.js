import React, {useState} from 'react';

import {Users} from "../Users/Users";
import {Flights} from "../Flights/Flights";
import './main.css';

const Main = () => {
    const [userTask, setUserTask] = useState(false);
    const [userButtonText, setUserButtonText] = useState('Show users');

    const [missionTask, setMissionTask] = useState(false);
    const [missionButtonText, setMissionButtonText] = useState('Show missions');

    const showUsers = () => {
        setUserTask(!userTask)
        userTask ? setUserButtonText('Show users') : setUserButtonText('Hide users')
    }
    const showMissions = () => {
        setMissionTask(!missionTask)
        missionTask ? setMissionButtonText('Show missions') : setMissionButtonText('Hide missions')
    }

    return (
        <div className={'main'}>
            <div>
                <button className={'showUser'} onClick={() => showUsers()}>{userButtonText}</button>
            </div>
            {
                userTask && <Users/>
            }

            <div>
                <button className={'showMission'} onClick={() => showMissions()}>{missionButtonText}</button>
            </div>

            {
                missionTask && <Flights/>
            }

        </div>
    );
};

export {Main};