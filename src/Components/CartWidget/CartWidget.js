import { CartShoppingIcon, UserIcon} from '../../assets/Images';
import './cartwidget.css';

const CartWidget = ()=>{
    return(
        <div className="icons">

                <div id="counter">
                    <span>2</span>
                </div>

                <figure className="icons__item">
                    <img className="icon" src={CartShoppingIcon} alt="Icono no encontrado"/>
                </figure>

                <figure className="icons__item">
                    <img className="icon" src={UserIcon} alt="Icono no encontrado"/>
                </figure>

            </div>
    );
};

export default CartWidget;