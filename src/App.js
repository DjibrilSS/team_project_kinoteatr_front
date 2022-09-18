
import { Navigate, Route, Routes } from "react-router-dom";
import 'antd/dist/antd.css';

import "./App.css";
import Header from "./components/Header";
import MainPages from "./pages/MainPages";
import MoviePage from "./components/MoviePage";
import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";

import UserPages from "./pages/UserPages";
import { useSelector } from "react-redux";

import Footer from "./components/Footer";

import BuyMoviePage from "./pages/BuyMoviePage";
import FavoritePages from "./pages/FavoritePages";


function App() {
  const token = useSelector((state)=> state.application.token)

  {
    if(token){
      return(
    
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/login" element={<Navigate to="/"/>} />
          <Route path="/auth" element={<Navigate to="/"/>} />
          <Route path="/user" element={<UserPages />}>
          <Route index element={<UserPages />}/>
            <Route path="buy" element={<BuyMoviePage  />} />
            <Route path="like" element={<FavoritePages  />} />
          </Route>
         
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/subscribe" element={<UserPages />} />
        </Routes>
        <Footer/>
      </div>
      )
    
    }
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/login" element={<SingIn />} />
          <Route path="/auth" element={<SingUp />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
        <Footer/>
      </div>
    )
    
  }
}

export default App;
