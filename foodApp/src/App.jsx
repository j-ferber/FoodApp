import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Random from './Random'
import { DataProvider } from './context/DataContext'
import SearchPage from './SearchPage'
import Error from './Error'
import SelectedPost from './SelectedPost'

function App() {

  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='random' element={<Random />} />
          <Route path='result' element={<SearchPage />} />
          <Route path='error' element={<Error />} />
          <Route path='selected' element={<SelectedPost />} />
        </Route>
      </Routes>
    </DataProvider>
  )
}

export default App
