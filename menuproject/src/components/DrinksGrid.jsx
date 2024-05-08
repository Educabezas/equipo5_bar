import {DrinkCard} from "./DrinkCard"
import {get} from "../utils/conexionAPI"
import {useState, useEffect} from "react"


export const DrinksGrid = () => {

const [drinks, setDrinks] = useState([])   

useEffect(() => {
get().then((data) => {
    console.log(data.drinks)
    setDrinks(data.drinks)
})

}, [])

return(
    <ul className="drinksGrid">
        {drinks.map((drink) => (
        <DrinkCard key = {drink.idDrink} drink = {drink} />    
        ))}
    </ul>
)

}