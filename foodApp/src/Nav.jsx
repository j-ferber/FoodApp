import React, { useContext, useState } from 'react'
import { FaSearch, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext from './context/DataContext'
import { useWindowSize } from 'react-use'
import { BiX } from "react-icons/bi"

const Nav = ({ search, setSearch }) => {
  const { setSearchData, setLoading } = useContext(DataContext)
  const navigate = useNavigate()
  const { width } = useWindowSize()
  const [hamClicked, setHamClicked] = useState(false)
  
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
      {width >= 430 ? (
        <>
          <form onSubmit={handleSearch}>
            <input id='search' type="text" placeholder='Enter a meal' value={search} onChange={(e) => setSearch(e.target.value)} />
            <FaSearch tabIndex="0" className='searchButton' onClick={handleSearch} style={{cursor: 'pointer'}}/>
          </form>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='random'>Random</Link></li>
          </ul>
        </>
      ) : !hamClicked ? (
        <>
          <form onSubmit={handleSearch}>
            <input id='search' type="text" placeholder='Enter a meal' value={search} onChange={(e) => setSearch(e.target.value)} />
            <FaSearch tabIndex="0" className='searchButton' onClick={handleSearch} style={{cursor: 'pointer'}}/>
          </form>
          <FaBars className='menu' onClick={() => setHamClicked(true)}/>   
        </>
      ) : (
        <>
          <ul className='hamburgerList'>
            <li className='navWord'><Link to='/'>Home</Link></li>
            <li className='navWord'><Link to='about'>About</Link></li>
            <li className='navWord'><Link to='random'>Random</Link></li>
          </ul>
          <BiX className='iconX' onClick={() => setHamClicked(false)} />
        </>   
      )
    } 
    </nav>
  )
  
}

export default Nav