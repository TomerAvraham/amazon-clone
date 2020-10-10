import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406828640_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123123123"
          title="Pro React 16"
          price={29.21}
          rating={5}
          image="https://m.media-amazon.com/images/I/61aBIWNwauL._AC_UY218_.jpg"
        />
        <Product
          id="123123123"
          title="Smoothie Blender,Tenswall 400W Personal Mini Blender with 2 Travel Bottle(600ml) + 100ml Grinder Cup, Silver, 25,000 RPM
          4.8 out of 5 stars 270"
          price={20.86}
          rating={4}
          image="https://m.media-amazon.com/images/I/61R+1y9ag6L._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123123123"
          title="Blink XT2 | Outdoor/Indoor Smart Security Camera with Cloud Storage, 2-Way Audio"
          price={99.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/717nrSSn-mL._SL1500_.jpg"
        />
        <Product
          id="123123123"
          title="Chivas Regal Mizunara Blended Scotch Whisky, 70cl"
          price={60.50}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81wG8OITSzL._AC_SL1500_.jpg"
        />
        <Product
          id="123123123"
          title="Star Wars – 4191 – Full Mask Darth Vader Costume – Adult – One Size"
          price={78.4}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71q98aXxhJL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123123123"
          title="Samsung - Smart TV Samsung UE65RU7105 65 4K Ultra HD LED WIFI Nero - S0421071"
          price={1999.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/91TU+txrWKL._AC_UY218_.jpg"
        />
      </div>

      {/* Product id, t */}
    </div>
  );
}

export default Home;
