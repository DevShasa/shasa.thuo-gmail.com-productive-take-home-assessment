
import Login from "./routes/Login"
import Profile from "./routes/Profile"
import Homepage from "./routes/Homepage"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import {Toaster} from "react-hot-toast"
import { useAppSelector } from "./utils/reduxHooks"

function App() {

  const user = useAppSelector((store)=> store.user) 

  console.log("USERDATA --->", user)

  if(!user.userEmail){
    return <Login />
  }

  return (
      <div className="app">
          <BrowserRouter>
              <Routes>
                  <Route element={<MainLayout />}>
                      <Route path="/" element={<Navigate to="/homepage" />}/>
                      <Route path="/homepage" element={<Homepage />}/>
                      <Route path="/profile" element={<Profile />}/>
                  </Route>
              </Routes>
          </BrowserRouter>
          <Toaster />
      </div>
  )
}

export default App
