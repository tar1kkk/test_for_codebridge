import './App.css';
import AllItems from './components/AllItems';
import Item from './components/Item';
import SearchInp from './components/SearchInp';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';


const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <SearchInp searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path='/' element={<AllItems searchValue={searchValue} />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </div >
  );
}

export default App;
