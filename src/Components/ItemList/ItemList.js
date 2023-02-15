import './itemlist.css';

const ItemList = ( {Category, Title, Description} ) =>{
    return(
        <article className="cardItem">
            <header>
                <img src="https://images7.alphacoders.com/126/1267118.jpg" alt="Imagen no encontrada"/>
            </header>
            <div className="cardItem__item">
                <h2 id="category">{Category}</h2>
                <div className="cardItem__item--body">
                    <p id="title">{Title}</p>
                    <p id="description">{Description}</p>
                </div>
            </div>
        </article>
    );
};

export default ItemList;