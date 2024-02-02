import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Item from './Component/Item';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes> 
    </>
  );
}

export default App;
