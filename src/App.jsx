import { useState , useEffect} from 'react'
import config from '../config/config';
import  authservice from './appwrite/auth';
import service from './appwrite/service';
import {useDispatch} from "react-redux"
import { logout , login, setfileid } from './store/authSlice';
import {Outlet} from "react-router-dom"
import {Header , Footer} from "./components"
function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch();
  //console.log(config.appwriteurl);
  useEffect(() => {

    authservice.getcurrentuser()
    .then((userData)=>{
      if (userData) {
        dispatch(login(userData))
        
      }
      else{
        dispatch(logout());
      } 
      if (userData.$id) {
                  service.getstreakofuser(userData.$id)
                .then((document)=>{
                  if (document) {
                    dispatch(setfileid(document.documents[0].$id))
                  }
                })
      }

    })
    .finally(()=>setloading(false));
    

    
  }, [loading])
  
  return loading ? (
    <> 
      <div>loading</div>
    </>
  ) : (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
  )
}


export default App