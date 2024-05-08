import { Link } from "react-router-dom"

export const DrinkCard = ({drink}) => {
    
    return(
        <li className="drinkCard">
            <Link to = {"/"}> 
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <p>Info de cada trago</p>
            </Link>
        </li>
    )

}