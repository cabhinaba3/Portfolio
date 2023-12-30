import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you have Bootstrap CSS imported
import './styles/card.css' // Import your custom CSS file

const Card = (props) => {
  return (
    <div className="card-container m-3">
      <div className="card custom-card">
        <div className="card-body">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default Card;
