import React from 'react';
import './styles/sidenav.css'; // Import your custom CSS file

const SideNav = (props) => {
  const values = [];
  for (let i = 0; i < props.data.length; ++i) {
    values.push(
      <li className="nav-item" key={i}>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg m-3 shadow-none border-0 side-nav-button"
          style={{
            color: '#333', // Text color
            transition: 'color 1s ease', // Smooth color transition on hover
          }}
          onMouseEnter={(e) => (e.target.style.color = '#fff')}
          onMouseLeave={(e) => (e.target.style.color = '#333')}
          onClick={() => props._setCurrentEducation(i)}
        >
          <span role="status">{props.data[i].institution}</span>
        </button>
      </li>
    );
  }
  return (
    <div className="d-flex flex-column align-items-start p-3">
      <nav>
        <ul className="nav flex-column">{values}</ul>
      </nav>
    </div>
  );
};

export default SideNav;
