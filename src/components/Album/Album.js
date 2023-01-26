import React from 'react';

import css from "./album.module.css";

const Album = ({albumItem}) => {
    const {id, userId, title} = albumItem;
    return (
        <>
            <div className={css.container}>
                <div className={css.card}>
                    <div className={css.box}>
                        <div className={css.content}>
                            <h2>{id}</h2>
                            <h3>userId-{userId}</h3>
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export {Album};