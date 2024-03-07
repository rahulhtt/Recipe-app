
import './scss/App.scss';
import Header from './Componets/Header';
import RecipeList from './Componets/RecipeList';
import Tabs from './Componets/Tabs';
import { useState } from 'react';

function App() {
  const [loader, setLoder] = useState(false)
  return (
    <div className="App">
      <Header />
      <Tabs />
      <RecipeList loader={loader} setLoder={setLoder} />
      {loader && <div className='loader'>
        <div className="spinner"></div>
      </div>}
    </div>
  );
}

export default App;
