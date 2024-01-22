
import Login from "./routes/Login"
import Profile from "./routes/Profile"
import Homepage from "./routes/Homepage"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"

function App() {

  return (
      <div className="app">
          <BrowserRouter>
              <Routes>\
                {/* {loggedin then mainlayout if not then Login} */}
                  <Route element={<MainLayout />}>
                      <Route path="/" element={<Navigate to="/homepage" />}/>
                      <Route path="/homepage" element={<Homepage />}/>
                      <Route path="/profile" element={<Profile />}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
