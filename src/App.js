import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainPages from "./pages/MainPages";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/genre/:id/" element={<MainPages />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/years/:id/" element={<MainPages />} />
        <Route path="/country/:id/" element={<MainPages />} />
      </Routes>
    </div>
  );
}

export default App;
