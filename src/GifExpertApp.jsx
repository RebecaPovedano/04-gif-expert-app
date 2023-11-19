import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

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
            {categories.map( (category) => 
                 (
                    <GifGrid key= {category } category={category}/>
                )
            )}
   
            {/* Gif item */}
    </>
  )
};
