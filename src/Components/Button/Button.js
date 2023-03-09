import './button.scss';

const Button = ( { Titulo } )=>{
    let classNameVar = Titulo.replace(' ', '');
    return(
        <button className={`buttonTitle ${classNameVar}`} type="button">{Titulo}</button>
    );
};

export default Button;