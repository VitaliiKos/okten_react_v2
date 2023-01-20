import React, {useEffect, useState} from 'react';

import {flightService} from "../../services";
import {Flight} from "../Flight/Flight";
import './flights.css';

const Flights = () => {
    const [missions, setMissions] = useState([]);

    useEffect(() => {

        flightService.getAll().then(flights => {
            let filteredMission = flights.filter(flight => flight.date_local.split('-')[0] !== '2020')
            setMissions(filteredMission)
        })
    }, [])

    return (

        <div className={'cards-list'}>
            {
                missions && missions.map(mission => <Flight key={mission.id} mission={mission}/>)
            }
        </div>
    );
};

export {Flights};