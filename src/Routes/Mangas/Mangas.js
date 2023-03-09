import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import CartWidget from '../../Components/CartWidget/CartWidget';
import MangaListContainer from '../../Components/MangaListContainer/MangaListContainer';

const Mangas = ()=>{
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
            <MangaListContainer/>
        </div>
    );
};

export default Mangas;