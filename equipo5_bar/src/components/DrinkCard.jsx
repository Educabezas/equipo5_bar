import { Link } from "react-router-dom"

import "../assets/css/DrinkCard.css"


export const DrinkCard = ({drink}) => {
    
    return(
        <li className="drinkCard">
            <Link to = {`/tragos/${drink.idDrink}`} className="drinkCard"> 
            <img className="drinkImg" src={drink.strDrinkThumb} alt={drink.strCategory} />
            <h3>{drink.strCategory} {drink.strDrink}</h3>
            <small className="drinkAlcohol">
                {drink.strAlcoholic}
            </small>
            <p className="drinkGlass">Se sirve en: {drink.strGlass}</p>        
            </Link>
            {/* <Link to = {`/drinks/${drink.strDrink}`} className="drinkCard"> 
            <img className="drinkImg" src={drink.strDrinkThumb} alt={drink.strCategory} />
            <p>{drink.strCategory} {drink.strDrink}</p>
            <p className="drinkAlcohol">
                {drink.strAlcoholic}
            </p>
            <p className="drinkGlass">Se sirve en: {drink.strGlass}</p>
            <p>Como se hace: {drink.strInstructions}</p>
            </Link> */}
        </li>
    )
}