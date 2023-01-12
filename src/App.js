import './App.css';
import AllItems from './components/AllItems';
import Item from './components/Item';
import SearchInp from './components/SearchInp';
import {
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<AllItems />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </div >
  );
}

export default App;
