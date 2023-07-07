import React from 'react'
import { useEffect,  useContext } from 'react'
import IngredientList from './IngredientList'
import DataContext from './context/DataContext'

const Home = () => {
  const { data, ingredients, getRandomMeal, loading, setIngredients } = useContext(DataContext)
  
  useEffect(() => {
    setIngredients([])
    getRandomMeal()
  }, [])

  return (
    <main className='homePage'>
      <div className="left-side">
        {loading &&
          <p>Loading data...</p>
        }
        {data && !loading && 
          <>
          <h2 className='welcome'>Welcome to my meal app!</h2>
          <p className='welcome-p'>Here is an example of how it works.</p>
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

export default Home