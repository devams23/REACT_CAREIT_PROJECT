import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { RouterProvider , Route  , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import { Home , Freetrail , Membership , Bookclass ,Displayexercise }  from './components'
import Layout from './components/Layout.jsx'
import { ExerciseProvider } from './components/dataprovider.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='start' element={<Freetrail/>}/>
      <Route path='start/:exercisename' element={<Displayexercise/>}/>
      <Route path='membership' element={<Membership/>}/>
      <Route path='bookclass' element={<Bookclass/>}/>
      <Route path='ourclasses' element={<Freetrail/>}/>
      <Route path='ourclasses/:exercisename' element={<Displayexercise/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <RouterProvider router= {router} />
    </React.StrictMode>


)
