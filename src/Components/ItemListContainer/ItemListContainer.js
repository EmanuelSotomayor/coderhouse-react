import ItemList from '../ItemList/ItemList'
import './itemlistcontainer.css';

const ItemListContainer = ()=>{
    return(
        <div className="cardContainer">
            <ItemList Category="Anime" Title="Kurama"
            Description="Kurama (九喇嘛), more commonly known as the Nine-Tails (九尾, Kyūbi), 
            was one of the nine tailed beasts. 
            Centuries of being regarded as a mindless monster and sought 
            after as a tool for war caused Kurama 
            to hate humans."
            />
            <ItemList Category="Anime" Title="Kurama"
            Description="Kurama (九喇嘛), more commonly known as the Nine-Tails (九尾, Kyūbi), 
            was one of the nine tailed beasts. 
            Centuries of being regarded as a mindless monster and sought 
            after as a tool for war caused Kurama 
            to hate humans."
            />
            <ItemList Category="Anime" Title="Kurama"
            Description="Kurama (九喇嘛), more commonly known as the Nine-Tails (九尾, Kyūbi), 
            was one of the nine tailed beasts. 
            Centuries of being regarded as a mindless monster and sought 
            after as a tool for war caused Kurama 
            to hate humans."
            />
        </div>
    );
};

export default ItemListContainer;