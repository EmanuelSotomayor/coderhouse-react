import Card from '../Card/Card';
import '../CardContainer/cardcontainer.scss';
import { ShounenImg } from '../../assets/Images';
import { ShoujoImg } from '../../assets/Images';
import { SeinenImg } from '../../assets/Images';

const CardContainer = ()=>{
    return(
        <section className="cards">
            <Card Titulo="Shounen" src={ShounenImg}/>
            <Card Titulo="Seinen" src={SeinenImg}/>
            <Card Titulo="Shoujo" src={ShoujoImg}/>
        </section>
    );
};

export default CardContainer;