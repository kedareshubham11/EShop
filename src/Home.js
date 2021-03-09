import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home background"
        />

        <div className="home__row">
          <Product
            id="1234"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful"
            price={615}
            image="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png"
            rating={5}
          />

          <Product
            id="1235"
            title="Echo Plus (2nd Gen) – Premium sound, powered by Dolby, built-in Smart Home hub (Black)"
            price={9999}
            image="https://images-na.ssl-images-amazon.com/images/G/01/warehousedeals/storefront/XCM_Manual_1186139_Amazon_Warehouse___Storefront_content_grid_440x440_Warehouse_Deals_XCM_Manual_1186139_878824_us_warehouse_deals_440x440_1566448377_jpg._CB437699424_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1236"
            title="PlayStation 4 Console - 1TB Slim Edition"
            price={27990}
            image="https://images-na.ssl-images-amazon.com/images/I/715RBdgZtHL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="1237"
            title="
            Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR"
            price={19990}
            image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            id="1238"
            title="
            AmazonBasics Gaming Headset - Black And Blue"
            price={2204}
            image="https://images-na.ssl-images-amazon.com/images/I/71lVo9Y3nnL._SL1469_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1239  "
            title="Sager NP7877DW 17.3-Inch Thin Bezel FHD 144Hz Gaming Laptop, Intel i7-10875H, RTX 2060 6GB, 16GB RAM, 500GB NVMe SSD, Windows 10"
            price={90306}
            image="https://images-na.ssl-images-amazon.com/images/I/71owmnM9b-L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
