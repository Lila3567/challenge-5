import React from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import AllCoins from './Components/AllCoins';

function App(props) {
  return (
    <div>
     <BrowserRouter >
     <Routes> 
      <Route path="/" element={<AllCoins/>}/>
     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;