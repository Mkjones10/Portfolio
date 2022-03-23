import React from "react";
import { FoodContext } from "./FoodContext";
import'./Categories.css'
export default function Catagories(){
    const {getCategories,categories} =React.useContext(FoodContext)
    React.useEffect(()=>{
        getCategories()
    },[getCategories])
    return(
         <div className="cat">
             {categories.map(category =>(
                 <div className="idk" key={category.idCategory}>
                     <img src={category.strCategoryThumb} alt="" className="catimg"/>
                     <h4 className="hcat">{category.strCategory}</h4>
                     {/* <p className="pcat">{category.strCategoryDescription}</p> */}
                 </div>
             ))}
         </div>
    )
}