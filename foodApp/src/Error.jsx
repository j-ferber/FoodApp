import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className="errorPage">
      <h2>Whoops!</h2>
      <p>The requested meal cannot be found.</p>
      <Link to='/'><p>Please return to homepage.</p></Link>
    </main>
  )
}

export default Error