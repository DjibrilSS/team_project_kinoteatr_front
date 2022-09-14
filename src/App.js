
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainPages from "./pages/MainPages";
import MoviePage from "./components/MoviePage";
import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";
import UserPages from "./pages/UserPages";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/login" element={<SingIn />} />
        <Route path="/auth" element={<SingUp />} />
        <Route path="/genre/:id/" element={<MainPages />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/years/:id/" element={<MainPages />} />
        <Route path="/country/:id/" element={<MainPages />} />
        <Route path="/user" element={<UserPages />} />
      </Routes>
    </div>
  );
}

export default App;
