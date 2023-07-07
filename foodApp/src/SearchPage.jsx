import React from 'react'
import { useContext, useEffect } from 'react'
import DataContext from './context/DataContext'
import FeedPost from './FeedPost'
import { useNavigate } from 'react-router-dom'

const SearchPage = () => {
  const navigate = useNavigate()
  const { searchData } = useContext(DataContext)
  const searchResultsLength = searchData?.meals?.length || 0;

  useEffect(() => {
    if (!searchResultsLength) navigate('/')
  }, [])

  return (
    <main className="searchPage">
      {searchResultsLength &&
        <div className='feedContainer'>
          {searchData.meals.map((meal, index) => (
            <FeedPost meal={meal} key={index}/>
          ))}    
        </div>
      }
    </main>
  )
}

export default SearchPage