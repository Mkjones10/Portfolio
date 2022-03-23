import React, { useCallback } from "react";
import axios from 'axios'

const FoodContext = React.createContext()

function FoodProvider(props) {

    const [meals, setMeals] = React.useState([])
    const [categories, setCategories] = React.useState([])
    const [random, setRandom] = React.useState([])
    const [message, setMessage] = React.useState('')
    const getHomeMeals = React.useCallback((search) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>{
            if(res.data.meals === null){
                setMeals([])
                setMessage('No Meals found! Try another word!')
            }
            else{ 
                setMeals(res.data.meals)
            }
            
        })
        .catch(err=>console.log(err))
    },[])

    const getCategories = useCallback(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>{console.log(res.data.categories)
        setCategories(res.data.categories)})
        
        .catch(err=>console.log(err))
    },[])

    const getRandom = useCallback(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>{console.log(res.data.meals)
        setRandom(res.data.meals)})
        
        .catch(err=>console.log(err))
    },[])
    return (
        <FoodContext.Provider value={{getHomeMeals, meals, message,getCategories,categories, getRandom, random}}>
            {props.children}
        </FoodContext.Provider>
    )

}


export { FoodContext, FoodProvider }