import React from 'react';
import { Link } from 'react-router-dom';
import './mangalist.scss';

const MangaList = ( { id, title, src, genres, authors } )=>{
    return(
        <div className="mangaList">
            <div className="mangaList__card">
                <img key={`${title}_${src}`} src={src} alt="Img not found"/>
                <div className="mangaList__card--body">
                    <h2 id="manga-title">{title}</h2>
                    <div className="mangaList__body--genres">
                        {genres.map((genre)=>{
                            return <span>{genre.name} </span>
                        })}
                    </div>
                    <div className="authors">
                        {authors.map((author)=>{
                            return <span>{author.name}</span>;
                        })}
                    </div>
                    <button className="details-button">
                        <Link to={`/mangas/${id}`}>Ver detalles</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MangaList;