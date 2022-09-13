
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPages from './pages/MainPages';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPages/>}/>
        <Route path='/genre/:id' element={<MainPages/>}/>
      </Routes>

    </div>
  );
}

export default App;
