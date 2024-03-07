import axios from 'axios'

const qureyString = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_APP_KEY
}

const GetRecipeByName = async (query) => {
    const { app_id, app_key } = qureyString
    try {
        const data = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`)
        return data.data;
    }
    catch (error) {
        console.log(error)
    }
}

const getRecipeById = async (id) => {

    const { app_id, app_key } = qureyString
    try {
        const data = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${app_id}&app_key=${app_key}`)

        return data.data;
    }
    catch (error) {
        console.log(error)
    }
}

export { GetRecipeByName, getRecipeById } 