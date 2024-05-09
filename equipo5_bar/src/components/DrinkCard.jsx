import { Link } from "react-router-dom"

import "../assets/css/DrinkCard.css"


export const DrinkCard = ({drink}) => {
    
    return(
        <li className="drinkCard">
            <Link to = {`/tragos/${drink.idDrink}`} className="drinkCard"> 
            <img className="drinkImg" src={drink.strDrinkThumb} alt={drink.strCategory} />
            <p>{drink.strCategory} {drink.strDrink}</p>
            </Link>
        </li>
    )
}