import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    // Change the color from blue to white when clicked
    setButtonClicked(true);

    // Navigate to the corresponding service route
    navigate(`/${Queue}`);
  };

  return (
    <div>
   
      <div>
        <h2>WELCOME TO JAMHURI MOTORS</h2>
        <h3>Choose your service </h3>
      </div>
      <div>
        <button
          className={buttonClicked ? 'white-button' : ''}
          onClick={() => handleClick()}
        >
            <Link to="/Queue" >Service</Link> 
        </button>
        <button
          className={buttonClicked ? 'white-button' : ''}
          onClick={() => handleClick()}
        >
           <Link to="/Queue" >Break System Inspection</Link> 
        </button>
        <button
          className={buttonClicked ? 'white-button' : ''}
          onClick={() => handleClick()}
        >
       <Link to="/Queue" > Tire Services </Link> 
        </button>
        <button
          className={buttonClicked ? 'white-button' : ''}
          onClick={() => handleClick()}
        >
          <Link to="/Queue" > Engine Diagnostics</Link>   
        </button>
        <button
          className={buttonClicked ? 'white-button' : ''}
          onClick={() => handleClick()}
        >
         <Link to="/Queue" > Battery Services</Link>   
        </button>
      </div>
    </div>
  );
};

export default Services;
