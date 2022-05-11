import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import NameStore from './Components/NameStore/NameStore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameStore/>
        <NavBar/>
      </header> 
        <Routes>
          <Route path='/'element={<ItemListContainer/>}/>
          <Route path='category/:categoryId' element={<ItemListContainer/>}/>             
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/Cart'/>                
        </Routes>  
      
    </div>
  );
}
export default App;