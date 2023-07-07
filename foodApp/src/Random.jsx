import React from 'react'
import { useState, useContext } from 'react'
import DataContext from './context/DataContext'
import IngredientList from './IngredientList'

const Random = () => {

  const [click, setClick] = useState(false)
  const { data, ingredients, getRandomMeal, loading, setIngredients } = useContext(DataContext)

  return (
    <main className='randomPage'>
      <div className={!click ? 'centerButton' : 'left-side'}>
        {!click &&
          <button className='generate-button' onClick={() => {setIngredients([]), getRandomMeal(), setClick(true) }}>Generate Random Meal</button>
        }
        {click && loading &&
          <p>Loading data...</p>
        }
        {click && !loading &&
          <>
            <img src={data.meals[0].strMealThumb} alt="" className='randomPhoto'/>
            <h2 className='homeMealTitle'>{data.meals[0].strMeal}</h2>
            <p className='homeMealInstructions'>{data.meals[0].strInstructions}</p>
            <h2 className='ingredientsTitle'>What You'll Need</h2>
            <IngredientList ingredients={ingredients} />
            <button className='newRequestButton' onClick={() => {setIngredients([]), getRandomMeal()}}>Request New Meal</button>
          </>
        }
      </div>
    </main>
  )
}

export default Random