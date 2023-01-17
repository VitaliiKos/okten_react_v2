import React from 'react';

const UserDetail = (
    {userInfo: {
        id,
        name,
        username,
        email,
        phone,
        website,
        address:{
            city,
            street,
            suite,
            zipcode,
            geo:{
                lat,
                lng}},
        company:{
            name:companyName,
            catchPhrase,
            bs
        },

    }}) => {
    console.log()
    return (
        <div>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h3>{website}</h3>
            <h3>{city}</h3>
            <h3>{street}</h3>
            <h3>{suite}</h3>
            <h3>{zipcode}</h3>
            <h3>{lat}</h3>
            <h3>{lng}</h3>
            <h3>{companyName}</h3>
            <h3>{catchPhrase}</h3>
            <h3>{bs}</h3>

        </div>
    );
};

export {UserDetail};