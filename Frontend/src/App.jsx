import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Verify from "./pages/Verify.jsx";
import { UserData } from "./context/UserContext";
import { LoadingBig } from "./components/Loading.jsx";



const App = () => {

  const  {user, isAuth, loading} = UserData()

  
  return (
    <>
    {loading ? ( 
      <LoadingBig/>
      )  :(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth? <Home/> : <Login/>} />
          <Route path="/Login" element={isAuth? <Home/> :<Login/>} />
          <Route path="/Verify" element={isAuth? <Home/> :<Verify/>} />
          
        </Routes>
      </BrowserRouter>)}
    </>
  )
}

export default App