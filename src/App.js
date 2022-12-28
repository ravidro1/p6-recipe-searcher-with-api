import './App.css';
import { useEffect, useState } from 'react';
import HomePage from './Pages/HomePage';
import Favorites from './Pages/Favorites';
import { Route, Routes } from 'react-router-dom';
import DefualtPage from './Pages/DefualtPage';


const LOCAL_STORAGE = "l";

function App() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
      const temp = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
      if(temp) setFavorite(temp);
  }, []);

  useEffect(() => {
      if(favorite) localStorage.setItem(LOCAL_STORAGE, JSON.stringify(favorite));
  }, [favorite]);


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage favorite={favorite} setFavorite={setFavorite}></HomePage>}></Route>
        <Route path='/favorites' element={<Favorites  favorite={favorite} setFavorite={setFavorite}></Favorites>}></Route>
        <Route path='*' element={<DefualtPage></DefualtPage>}> </Route>
      </Routes>

    </div>
  );
}

export default App;
