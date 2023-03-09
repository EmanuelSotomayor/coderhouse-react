import React from 'react';
import './mangadetail.scss';

const MangaDetail = ( {title, synopsis, rank, src} )=>{
    return(
        <div className="mangaDetail">
            <img key={`${src}_${rank}`} src={src} alt="Not found"/>
            <p>{title}</p>
            <p>{synopsis}</p>
            <p>{rank}</p>
        </div>
    );
};

export default MangaDetail;