import "../OurCategories/ourcategories.scss";
import Button from '../Button/Button';
import { MediumCloud } from "../../assets/Images";

const OurCategories = ({ children })=>{
    return(
        <div className="cardsContainer">
            <div className="cardsContainer__header">
                <div className="cardsContainer__header--title">
                    <h1>Nuestras <span>categorías</span></h1>
                </div>
                <figure className="cardsContainer__header--cloud">
                    <img src={MediumCloud} alt="Imagen no encontrada"/>
                </figure>
            </div>
            {children}
            <Button Titulo="Más categorías"/>
        </div>
    );
};

export default OurCategories;