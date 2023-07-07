import React from 'react'

const IngredientRow = ({ingredient}) => {
  return (
    <>
      <td className='cap'>{ingredient.ingredient}</td>
      <td>{ingredient.measure}</td>
    </>
  )
}

export default IngredientRow