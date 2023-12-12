import React from 'react'

function Header () {
    return (
        <header className="header">
        <div className="logo">
         <img src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg" alt="LEGO"></img>
        </div>
        <nav className="nav">
            <ul className="nav-links">
            <li className="nav-link"><a href="https://www.lego.com/en-us/categories/new-sets-and-products">SHOP</a></li>
            <li className="nav-link"><a href="https://www.lego.com/en-us/themes">DISCOVER</a></li>
            <li className="nav-link-holiday"><a href="https://www.lego.com/en-us/holiday-gifts">HOLIDAY</a></li>
            </ul>
        </nav>
        <div id="navIcons">
          <img className="searchIcon" src="https://cdn-icons-png.flaticon.com/512/10337/10337728.png" alt="search"/>
          <img className='icons' src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="heart" />
          <img className="icons" src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="cart"/>
        </div>
      </header>
      )
}

export default Header