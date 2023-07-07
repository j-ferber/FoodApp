import React, { useState, useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext from './context/DataContext'

const Nav = ({ search, setSearch }) => {
  const { setSearchData, setLoading, setFetchError } = useContext(DataContext)
  const navigate = useNavigate()
  
  const handleSearch = async (e) => {
    e.preventDefault()
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    setSearchData(response.data)
    setLoading(false)
    if (response.data.meals !== null) navigate('/result')
    else navigate('/error')
  }

  return (
    <nav className='navRow'>
      <form onSubmit={handleSearch}>
        <input id='search' type="text" placeholder='Enter a meal' value={search} onChange={(e) => setSearch(e.target.value)} />
        <FaSearch tabIndex="0" className='searchButton' onClick={handleSearch} style={{cursor: 'pointer'}}/>
      </form>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='random'>Random</Link></li>
      </ul>
    </nav>
  )
  
}

export default Nav