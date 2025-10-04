import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router";
import Nese from './Nese';
import SignupButton from './components/signup-button';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/nese');
  };

  return (
    <div>
      
      <h1>Home page</h1>
      <button onClick={handleClick}>Go to nese page</button>
      <br />
      <input
      type="text"
      placeholder='search'
      onChange={(e)=>setSearchParams(e.target.value)} 
  
      
      />
          <SignupButton><button>press</button></SignupButton>
    </div>
    

  );
}

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/nese" element={<Nese />} />
      <Route path="./components/signup-button.jsx" element={<SignupButton />} />
    </Routes>

  );
}

export default App;
