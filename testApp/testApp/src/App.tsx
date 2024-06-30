import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import Register from './pages/Register';
function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Login/Register' element={<Register />}/>
          <Route path='/Login/Register/Login' element={<Login />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/Register/Login' element={<Login />}/>
          <Route path='*' element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;