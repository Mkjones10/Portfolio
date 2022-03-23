import React, { useContext } from "react";
// import axios from 'axios'
import { FoodContext } from "./FoodContext";
import './Home.css'
export default function Home() {
    const [search, setSearch] =React.useState('')
    function handleChange(event) {
        setSearch(event.target.value)
    }
    console.log(search)
    const {getHomeMeals, meals, message} = useContext(FoodContext)
    const handleSearch =React.useCallback(()=> {
        getHomeMeals (search)
    },[search, getHomeMeals])
    
    return (
        <div className="home">
            <div className="search">
                <input type="text" placeholder="Search our meals" value={search} onChange ={handleChange} className ='input'/>
                <button onClick={handleSearch} className ='searchbtn'>Seach Meal</button>
            </div>
            <div className="result">
                {meals.length >0 ? meals.map(meal =>(
                    <div className="meal" key={meal.idMeal}>
                        
                        <img  src={meal.strMealThumb} alt="#" className="img"/>
                        <h4>{meal.strMeal}</h4>
                        <h5>{meal.strCategory}</h5>
                        {/* <p className="in">{meal.strInstructions}</p> */}
                    </div>
                )): <h2>{message}</h2>}
            </div>
        </div>
    )
}