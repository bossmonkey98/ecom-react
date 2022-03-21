import { AccountCircleOutlined, FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import logo from '../assets/logo/apex-legends-symbol-white.png'
import './Navbar.css'

function Navbar(){
  return(
    <div>
          <nav className="nav-bar">
        <div className="logo">
            <span><img id="store-logo" src={logo} alt="logo"/></span>
            <span id="store-name">pex Store</span>
        </div>
        <div className="menu">
            <span><a href="index.html">Home</a></span><span>
                <a href="./components/pages/prodcuts/products.html">Products</a>
            </span>
        </div>
        <div className="nav-content">
          <div className='search-bar'>
            <input className="query" type="search" id="query" placeholder="Search Product"/>
            <Search/>
          </div>  
            <div className='all-icons' >
              <div className="icon">
                      <AccountCircleOutlined fontSize='large'/>
              </div>
              <div className="icon">
                      <FavoriteBorderOutlined fontSize='large'/>
              </div>
              <div className="icon">
                    <ShoppingCartOutlined fontSize='large'/>
              </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar

