import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from './context/DataContext'

const FeedPost = ({ meal }) => {
  
  const {setSelected} = useContext(DataContext)

  return (
    <div className='feedPost'>
      <Link to='/selected'><img src={meal.strMealThumb} alt="" className='listPhoto' onClick={() => setSelected(meal)}/></Link>
      <div className="right-side">
        <Link to='/selected' style={{textDecoration: 'none'}}><h2 className='mealHeader' onClick={() => setSelected(meal)}>{meal.strMeal}</h2></Link>
        <p className='instructionsP'>{(meal.strInstructions).length > 25 ? `${(meal.strInstructions).slice(0,125)}...` : `${(meal.strInstructions)}`}</p>
      </div>
    </div>
  )
}

export default FeedPost