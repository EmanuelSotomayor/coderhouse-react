import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MangaDetail from '../MangaDetail/MangaDetail';
import './mangadetailcontainer.scss';

const endpointAPI = `https://api.jikan.moe/v4/manga/`;


const MangaDetailContainer = ()=>{
    const { id } = useParams();
    const [manga, setManga] = useState({});

    useEffect(()=>{
        fetch(`${endpointAPI}${id}`)
        .then((data)=>data.json())
        .then((dataParsed)=>setManga(dataParsed.data))
        .catch((err)=>console.log(err));
    }, [id]);

    return(
        <div>
            {/*En el atributo src, verificamos que exista la imagen, si no, se rompe toda la renderización*/}
            <MangaDetail
                title={manga.title}
                synopsis={manga.synopsis}
                rank={manga.rank}
                src={manga.images && manga.images.jpg && manga.images.jpg.image_url}
            />
        </div>
    );

};

export default MangaDetailContainer;