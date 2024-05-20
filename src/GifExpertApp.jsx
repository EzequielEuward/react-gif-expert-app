import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import './card.css'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }
    return (
        <>
            <h1 className='text'>GifExpertApp</h1>
            <AddCategory onNewCategory={(event) => onAddCategory(event)} />
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}

export default GifExpertApp
