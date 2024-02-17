import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <Link to="/" className="link">
          Books List
        </Link>
        <Link to="/add">
          Add Book
        </Link>
      </div>
    </header>
  );
};

export default Header;