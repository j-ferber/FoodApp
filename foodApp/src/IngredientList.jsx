import React from 'react'
import IngredientRow from './IngredientRow'

const IngredientList = ({ingredients}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Ingredients</th>
          <th>Measurement</th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient, index) => (
          <tr key={index}>
            <IngredientRow ingredient={ingredient}  />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default IngredientList