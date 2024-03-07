import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { GetRecipeByName } from '../service'
const RecipeList = ({ loader, setLoder }) => {
    const [searchItem, setSearchItem] = useState('')
    const [query, setQuery] = useState('pizza')
    const [data, setData] = useState('')

    const serachRecipe = async () => {
        try {
            setLoder(true)
            const response = await GetRecipeByName(query)
            setData(response)
            setLoder(false)
            console.log(response.hits)
        } catch (error) {
            console.log("something went wrong")
        }
    }
    useEffect(() => {
        serachRecipe()
    }, [])
    return (
        <div className='container'>
            <div className='heading-line'>
                <strong>Search Your Recipes</strong>
                <div className='input-wrapper' >
                    <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder='Search' />
                    <button onClick={() => serachRecipe()}  ><BsSearch /></button>
                </div>
            </div>
            <div className='flexbox'>
                {
                    data && data.hits.map((item, index) => (
                        <div key={index} className='flexItem'>
                            <div className='img-wrapper'>
                                <img src={item.recipe.image} />
                            </div>
                            <p>{item.recipe.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecipeList
