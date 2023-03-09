import { useEffect, useState } from 'react';
import './mangalistcontainer.scss';
import MangaList from '../MangaList/MangaList';

const endpointAPI = 'https://api.jikan.moe/v4/manga?type=manga&page=0&limit=20';

const MangaListContainer = ()=>{
    const [animeData, setAnimeData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        fetch(endpointAPI)
        .then(data=>data.json())
        .then((dataParsed)=>{
            setIsLoading(true);
            setTimeout(()=>{
                setAnimeData(dataParsed.data);
            }, 1000);
        })
        .catch(err=>console.log(err));
    }, []);

    return(
        <div className="mangaListContainer">
            {isLoading || animeData == null ? animeData.map((anime)=>{
                return (<MangaList 
                    id={anime.mal_id}
                    title={anime.title}
                    src={anime.images.jpg.image_url}
                    genres={anime.genres}
                    authors={anime.authors}
                />);
            }) : <p>Cargando ...</p>}
        </div>
    );
};

export default MangaListContainer;