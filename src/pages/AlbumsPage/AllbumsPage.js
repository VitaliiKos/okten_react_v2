import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services";
import {Album} from "../../components";
import css from './albumPage.module.css';

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(value => setAlbums([...value]))
    }, [])

    return (
        <div className={css.listBlock}>
            {
                albums.length && albums.map(album => <Album key={album.id} albumItem={album}/>)
            }
        </div>
    );
};

export {AlbumsPage};