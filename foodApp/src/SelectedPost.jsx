import React from 'react'
import { useContext, useEffect } from 'react'
import DataContext from './context/DataContext'
import axios from 'axios'
import IngredientList from './IngredientList'
import { useNavigate } from 'react-router-dom'

const SelectedPost = () => {

  const navigate = useNavigate()
  const { selected, setData, getIngredientInfo, setLoading, loading, data, ingredients, setIngredients } = useContext(DataContext)
  
  const getSelectedMeal = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selected.idMeal}`);
      setData(response.data)
      getIngredientInfo(response.data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (Object.keys(selected).length !== 0) {
      setIngredients([])
      getSelectedMeal()
    } else {
      navigate('/')
    }
  }, [])

  return (
    <main className="selectedPostPage">
      <div className='left-side'>
        {loading &&
          <p>Loading data...</p>
        }
        {!loading &&
          <>
            <h2 style={{ marginBottom: '20px', marginTop: '10px'}}>Here is your selected meal:</h2>
            <img src={data.meals[0].strMealThumb} alt="" />
            <h2 className='homeMealTitle'>{data.meals[0].strMeal}</h2>
            <p className='homeMealInstructions'>{data.meals[0].strInstructions}</p>
            <h2 className='ingredientsTitle'>What You'll Need</h2>
            <IngredientList ingredients={ingredients} />
          </>
        }
      </div>
      
    </main>
  )
}

export default SelectedPost