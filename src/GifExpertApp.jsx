import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

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
            {categories.map( (category) => 
                 (
                    <GifGrid key= {category } category={category}/>
                )
            )}
   
            {/* Gif item */}
    </>
  )
};
