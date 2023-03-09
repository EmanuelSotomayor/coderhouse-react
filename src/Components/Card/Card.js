import Button from '../Button/Button';
import '../Card/card.scss';

const Card = (  {Titulo, src} )=>{
    return(
        <article className="card">
            <div className="card__body">
                <figure className="card__image">
                    <img  src={src} alt="Imagen no encontrada"/>
                </figure>
                <h2 className="card__body--title">{Titulo}</h2>
                <Button Titulo="Ver más"/>
            </div>
        </article>
    );
};

export default Card;