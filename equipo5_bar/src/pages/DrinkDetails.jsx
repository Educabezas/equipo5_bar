import { get } from "../utils/conexionDetailsAPI"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//ESTO TRAE EL ARRAY PERO NO MUESTRA NADAAAAAAAAAAAAA
export const DrinkDetails = () => {
    
    const [drink, setDrinks] = useState (null)
    const {tragosId} = useParams()
        
    useEffect(()=>{
        get(`${tragosId}`).then((data)=>{
         
            console.log(data.drinks)
            setDrinks(data.drinks)
        })
    }, [tragosId])//Ver ()

    if(!drink){
        return (
            "Algo raro pasa..."
        )
    }

    return(
        
        <div className="detail">
            <img src={drink.strDrinkThumb} alt="Error al cargar img" />
     
            <div className="drinkDetail">
                <p className="drink">
                    Nombre e Info del taaarago  
                </p>
            </div>
        </div>
    )
}