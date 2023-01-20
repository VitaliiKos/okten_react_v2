import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import './userDetail.css';

const UserDetail = ({userId, getPosts}) => {
    const [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
        userService.getById(userId).then(value => setUserDetail(value))
    }, [userId])

    return (
        <>
            {userDetail &&
                <>
                    <div className={'userDetailCard'}>
                        <h3>UserId: {userDetail.id}</h3>
                        <h3>Name: {userDetail.name}</h3>
                        <h3>username: {userDetail.username}</h3>
                        <h3>email: {userDetail.email}</h3>
                        <h3>phone: {userDetail['phone']}</h3>
                        <h3>website: {userDetail['website']}</h3>

                        <div className={'userAddress'}>
                            <h2>address</h2>
                            <h3>city: {userDetail.address['city']}</h3>
                            <h3>street: {userDetail.address['street']}</h3>
                            <h3>suite: {userDetail.address['suite']}</h3>
                            <h3>zipcode: {userDetail.address['zipcode']}</h3>

                            <div className={'geo'}>
                                <h2>geo</h2>
                                <h3>lat: {userDetail.address['geo']['lat']}</h3>
                                <h3>lng: {userDetail.address['geo']['lng']}</h3>
                            </div>
                        </div>

                        <div className={'company'}>
                            <h2>company</h2>
                            <h3>Company name: {userDetail['company'].name}</h3>
                            <h3>catchPhrase: {userDetail['company']['catchPhrase']}</h3>
                            <h3>bs: {userDetail['company']['bs']}</h3>
                        </div>
                    </div>

                    <div className={'userButtonPost'}>
                        <button onClick={() => getPosts(userDetail.id)}>Get posts</button>
                    </div>

                </>
            }
        </>
    );
};

export {UserDetail};