import { createContext, useState } from "react";
import axios from 'axios'

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(false)
  const [searchData, setSearchData] = useState([])
  const [selected, setSelected] = useState({})

  const getIngredientInfo = (data) => {
    setIngredients(prevIngredients => {
      const newIngredients = []
      for (let i = 0; i < Object.keys(data.meals[0]).length; i++) {
      const ingredientKey = `strIngredient${i}`
      const measureKey = `strMeasure${i}`
      const ingredient = data.meals[0][ingredientKey]
      const measure = data.meals[0][measureKey]
        if (data.meals[0][ingredientKey]) {
          newIngredients.push({ ingredient, measure })
        }
      }
      return [...prevIngredients, ...newIngredients]
    })
  }

  const getRandomMeal = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      setData(response.data)
      getIngredientInfo(response.data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <DataContext.Provider value={{
      data, setData, getIngredientInfo, ingredients, getRandomMeal, loading, setIngredients, search, setSearch, setLoading, fetchError, setFetchError, searchData, setSearchData, selected, setSelected
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext