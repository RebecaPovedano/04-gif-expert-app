import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        // console.log(event);
        if(categories.includes(newCategory)) return;

        setCategories( [newCategory, ... categories]);
    }
  return (
    <>
    {/* Titulo */}
        <h1>Gif Expert App</h1>

        {/* Input */}
        <AddCategory 
            // onAddCategory={setCategories} categories={categories} 
            onNewCategory= { (event) => onAddCategory(event)}
        />

        {/* Listado de gifs */}
        <ol>
            {categories.map( (category, index) => {
                return <li key={index}>{category}</li>
            })}
        </ol>
            {/* Gif item */}
    </>
  )
};
