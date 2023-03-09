import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import CartWidget from '../../Components/CartWidget/CartWidget';
import MangaDetailContainer from '../../Components/MangaDetailContainer/MangaDetailContainer';

const MangaById = ()=>{
    return(
        <div>
        <Banner>
            <Navbar Home="Inicio" Mangas="Mangas" 
                Novelas="Novelas ligeras" 
                Figuras="Figuras" 
                Contacto="Contacto">
                <CartWidget/> 
            </Navbar>
        </Banner>
        <MangaDetailContainer/>
        </div>
    );
};

export default MangaById;