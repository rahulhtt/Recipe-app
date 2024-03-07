import React, { useEffect, useState } from 'react'
import { CiPizza } from "react-icons/ci"
import { LuIceCream2 } from "react-icons/lu";
import { GiNoodles, GiFruitBowl, GiCheckMark } from "react-icons/gi"
import { MdOutlineIcecream } from "react-icons/md"
import { getRecipeById } from '../service'

const Tabs = () => {
    const [active, setActive] = useState('pizza')
    const [tabData, setTabData] = useState([])
    const [tabs, setTabs] = useState([
        {
            name: 'pizza',
            icons: <CiPizza />,
            id: "1b6dfeaf0988f96b187c7c9bb69a14fa"
        },
        {
            name: 'Noodles',
            icons: <GiNoodles />,
            id: "b12fede5717134cdca3dd05465b3e896"
        },
        {
            name: 'Desert',
            icons: <GiFruitBowl />,
            id: "3e7100af0c44d5af24bb27e247c49f22"
        },
        {
            name: 'Ice Cream',
            icons: <MdOutlineIcecream />,
            id: "22ac31e968775b897826db174845a3cc"
        }
    ])

    const handleTabs = (name, id) => {
        setActive(name)
        getRecipe(id)
    }

    const getRecipe = async (id) => {
        try {
            const response = await getRecipeById(id)
            setTabData(response)
            console.log(response)
        } catch (error) {
            console.log("something went wrong")
        }
    }

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const response = await getRecipeById(tabs[0].id)
                setTabData(response)
                console.log(response)
            } catch (error) {
                console.log("something went wrong")
            }
        }
        getRecipe()
    }, [])

    return (
        <div className="container">
            <h1 className='recipeHeading'>What would you like to have!</h1>
            <div className="tabs">
                {tabs.map((item, index) => (
                    <div key={index} onClick={() => handleTabs(item.name, item.id)} className={`tablist ${active === item.name ? 'active' : ""}`}>
                        {item.icons}
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
            <div className='recipe_banner'>
                {tabData !== '' && tabData.recipe && <>
                    <div className="left-col">
                        <span className='badge'>{tabData.recipe.cuisineType[0]}</span>
                        <h1></h1>
                        <p><strong>Recipe by :</strong><small>{tabData.recipe.source}</small></p>
                        <h3>Ingredients</h3>
                        <div className='ingredients'>
                            <ul >
                                {tabData.recipe.ingredientLines.map((list, index) => (
                                    <li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="image-wrapper">
                            <img src={tabData.recipe.image} alt="" />
                        </div>
                    </div>
                </>}

            </div>
        </div >
    )
}

export default Tabs
