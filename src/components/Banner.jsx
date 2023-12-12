import React from 'react'

function Banner () {
    return (
      <div id="banner">
        <button id="playZone">PLAY ZONE</button>
        <div id="bannerCtr">
            <p>FREE Shipping with orders over $35!*</p>
            <p id="link">Learn more</p>
        </div>
        <div id="bannerRt">
            <img className='icons' src="https://www.clipartmax.com/png/small/194-1943482_lego-head-clipart-black-and-white-lego-photo-booth-props-printable.png" alt="lego Head" /> 
            <img className='icons' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Fpremium%2Fpng-512-thumb%2Flego-brick-615782.png&f=1&nofb=1&ipt=2f7ebec5ab0bcc24dc3d48a370d6838381cfaa3fa099f1b422a5c5168dfb2a00&ipo=images" alt="brick" />
        </div>    
      </div>
    )
}

export default Banner