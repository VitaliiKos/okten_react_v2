import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services";
import {Album} from "../../components";

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(value => setAlbums([...value]))
    }, [])

    return (
        <div>
            {
                albums.length && albums.map(album => <Album key={album.id} albumItem={album}/>)
            }
        </div>
    );
};

export {AlbumsPage};