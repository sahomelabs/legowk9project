
import React from 'react';

function Main() {


 return (
    <div className="main-page">
      <div class="journey-container">
        {/* <img src="https://www.lego.com/cdn/cs/set/assets/bltc911b88820a18211/21344-Exclusive-202311-PS-Hero-Standard-Large-r1.jpg?fit=crop&format=webply&quality=80&width=1600&height=500&dpr=1.5"
        className="middelimg"/> */}
        <div class="bottom-right">Shop Now</div>
        <div class="bottom-left">Learn more</div>
      </div>

      <div className="thisweekdeal">
        <h4>This week's top picks</h4>
          <div class="thisweekrow">
           <div class="tower">
              {/* <img src="https://www.lego.com/cdn/cs/set/assets/bltd242a29e8881c557/76269-Page-202310-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5" alt="AvengerTower" /> */}
              <p id="Avbold">Avengers Tower</p>
              <p>Recreate the most iconic building in the Avengers Universe.</p>
              <button>Shop Now</button>
          </div>

          <div class="tower">   
            {/* <img src="https://www.lego.com/cdn/cs/set/assets/blt9e3c68fcb7fa10a3/Holiday23-GroupedAssets-202311-Block-Standard-10329.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5" alt="" /> */}
              <p id="watch">Watch creativity grow </p>
              <p>Give a gift from the LEGO® Botanical Collection.</p>
          </div>

          <div class="tower">
            {/* <img src="https://www.lego.com/cdn/cs/set/assets/blt3dd1bbaf9999eb1f/Holiday23-GroupedAssets-202311-Block-Standard-10326.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5" alt="icon"/> */}
            <p id="makeh">Make history for the holidays</p>
            <p>New LEGO® Icons Natural History Museum joins the modular Buildings collection.</p>
          </div>  
      </div>
      
      <div className="recommended-container">
        <h2>Recommended For You</h2>
        <div className="product-list">
          {/* List your products here */}
        </div>
      </div>
    </div>
      <div className="giftidea-container">
        <h2>Gift ideas for everyone on your list</h2>
        <div className="product-list">
          {/* List your products here */}
        </div>
      </div>
      {/* <section>
        <div className="containerstyle">
          <div id="newarrivals-container"> 
            <p>Welcome to the Official LEGO® Shop, the amazing home of LEGO building toys, gifts, stunning display sets and more for kids and adults alike! Find the perfect gift for toddlers, teens and adults for <a href="https://www.lego.com/en-us/collections/theme-christmas" target="_blank">Christmas</a>, <a href="https://www.lego.com/en-us/collections/theme-birthday" target="_blank">birthdays</a> or other occasions. 
            Get a head start on your holiday shopping with sets and deals for 
            <a href="https://www.lego.com/en-us/collections/theme-insiders-weekend" target="_blank">LEGO® Insiders Weekend</a>, 
            <a href="https://www.lego.com/en-us/collections/theme-black-friday" target="_blank">Black Friday</a> and <a href="https://www.lego.com/en-us/cyber-monday-deals" target="_blank">Cyber Monday</a>. 
            We make it easy to shop for toys that will provide hours of fun and imaginative play. You’ll also find curated LEGO® sets for adults perfect for their interests, such as vehicles, art and design, gaming and much more! </p> 
            </div> 
        </div>    
      </section> */}
      
    </div>
 );
}

export default Main;