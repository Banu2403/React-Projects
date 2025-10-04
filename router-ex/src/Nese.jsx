import React from 'react';
import { useNavigate } from 'react-router-dom';

function Nese() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Nese page</h1>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}

export default Nese;
