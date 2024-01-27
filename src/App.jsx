import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="producto/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
