import './banner.scss';
import Button from '../Button/Button';
import { BannerImg } from '../../assets/Images';

const Banner = ({ children })=>{
    return(
        <section className="bannerContainer">
            {children}
            <div className="bannerContainer__item">
                <div className="bannerBody">
                    <h1>¡Obtené tu <span>manga</span> favorito, ahora!</h1>
                    <p>Lorem ipsum is Simply dummy Text Of The Printing And Typesetting Industry.</p>
                    <Button Titulo="Obtener ahora"/>
                </div>
                <figure>
                    <img id="bannerImg" src={BannerImg} alt="Imagen no encontrada"/>
                </figure>
            </div>
        </section>
    );
};

export default Banner;