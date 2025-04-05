
import { createBrowserRouter, RouterProvider } from 'react-router'
// import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Note from './components/Note'
import ViewNote from './components/ViewNote'


const router = createBrowserRouter([
  {
    path: '/',
    element:
    <div>
      <NavBar/>
      <Home/>
    </div>
  },
  {
    path: '/notes',
    element:
    <div>
      <NavBar/>
      <Note/>
    </div>
  },
  {
    path: '/notes/:id',
    element:
    <div>
      <NavBar/>
      <ViewNote/>
    </div>
  }
])
function App() {


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
