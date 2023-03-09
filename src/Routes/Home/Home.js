import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import CartWidget from '../../Components/CartWidget/CartWidget';
import OurCategories from '../../Components/OurCategories/OurCategories';
import CardContainer from '../../Components/CardContainer/CardContainer';

const Home = ()=>{
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
            <OurCategories>
                <CardContainer/>
            </OurCategories>
        </div>
    );
};

export default Home;