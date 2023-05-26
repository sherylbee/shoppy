import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to='/'>
        <div className="header-logo">
            <StorefrontIcon className="header-logoImage" fontSize="large" />
            <h1 className="header-logoTitle">Shoppy</h1>
        </div>
      </Link>
    
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="nav-item">
          <span className="nav-itemLineOne">Hello, guest </span>
          <span className="nav-itemLineTwo">Sign In</span>
        </div>
        <div className="nav-item">
          <span className="nav-itemLineOne">Your </span>
          <span className="nav-itemLineTwo">Shop</span>
        </div>

        <div className="nav-itemBasket">
        <Link to='checkout'>
        <ShoppingBasketIcon/>

        </Link>
          <span className="nav-itemLineTwo nav-basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
