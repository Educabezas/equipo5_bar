import { get } from "../utils/conexionDetailsAPI"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const DrinkDetails = () => {
    
    const [drinks, setDrinks] = useState (null)
    const {tragosId} = useParams()
        
    useEffect(()=>{
        get(`${tragosId}`).then((data)=>{
         
            console.log(data.drinks)
            setDrinks(data.drinks)
        })
    }), [tragosId]

    if(!drinks){
        return (
            "Algo raro pasa"
        )
    }

    return(
        <div className="detail">
        <img className="imgDrink" src={strDrinkThumb} alt="No me trae la img" />
            <div className="drinkDetail">
                <p className="drink">
                    Nombre e Info del trago  
                </p>
            </div>
        </div>
    )
}