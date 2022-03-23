import React from "react";
import { FoodContext } from "./FoodContext";
import './random.css'
export default function RandomMeal() {
    const { getRandom, random } = React.useContext(FoodContext)
    React.useEffect(() => {
        getRandom(random)
    }, [getRandom])
    return (
        <div className="random">
            {random.map(meal => (
                <div className="new" key={meal.idMeal}>
                    <h3>{meal.strMeal}</h3>
                    <img src={meal.strMealThumb} alt="#" className="rimg" />
                    <button className="btn" onClick={getRandom}>Get new meal</button>

                    <div className="inst">

                        <h4>Instructions</h4>
                        <p className="pr">{meal.strInstructions}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
// 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