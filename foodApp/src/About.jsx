import React from 'react'

const About = () => {
  return (
    <main className='about-page'>
      <h2 className='aboutTitle'>About the Project</h2>
      <p className='aboutParagraph'>        
        Being my first React project, I learned a lot about different hooks and libraries. In this project, I used the Axios npm library to fetch the data needed from The Meal DB,
        which is a free meal API. I also used various React hooks like useState, useContext, and useEffect to effectively manage both state and data effectively.
      </p>
    </main>
  )
}

export default About