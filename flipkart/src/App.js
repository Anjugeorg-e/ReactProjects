import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Header from "./component/mobileComponent/Header/Header";
import Categories from "./component/mobileComponent/Categories/Categories";
import Deals from "./component/mobileComponent/Deals/Deals";
import Wishlist from "./component/mobileComponent/Wishlist/Wishlist";
import Sponsor from "./component/mobileComponent/Sponsor/Sponsor";
import Spotlight from "./component/mobileComponent/Spotlight/Spotlight";
import Electronics from "./component/mobileComponent/Electronics/Electronics";
import DesktopHeader from "./component/DesktopComponent/Header/Header";
import DesktopCategories from "./component/DesktopComponent/Categories/Categories";
import Mobiles from "./component/DesktopComponent/Mobiles/Mobiles";
import DealsFashion from "./component/DesktopComponent/DealsFashion/DealsFashion";
import HouseEquipment from "./component/DesktopComponent/HouseEquipments/HouseEquipment";
import FeaturedBrands from "./component/DesktopComponent/FeaturedBrands/FeaturedBrands";
import OfficeEquipment from "./component/DesktopComponent/OfficeEquipments/OfficeEquipment";
import DealsElectronics from "./component/DesktopComponent/DealsElectronics/DealsElectronics";
import TopOffer from "./component/DesktopComponent/TopOffers/TopOffer";
import CaruoselMobile from "./component/mobileComponent/Carousel/CarouselMobile";
import CarouselMobile from "./component/mobileComponent/Carousel/CarouselMobile";
import CarouselDesktop from "./component/DesktopComponent/DesktopCarousel/DesktopCarousel";

function App() {
  // const [categories, setCategories]=useState([]);
  // const [desktopCategory, setDesktopCategory] = useState([]);
  // const [offer, setOffer] = useState([]);
  // const [desktopOffer, setDesktopOffer] = useState([]);
  // const [wishlist, setWishlist] = useState([]);
  // const [sponsor, setSponosor] = useState([]);
  // const [spotlight, setSpotlight] = useState([]);
  // const [electronics, setElectronics] = useState([]);
  // const [desktopmobiles, setMobiles] = useState([]);
  // const [desktopFashion, setDesktopfashion] = useState([]);
  // const [desktopElectronics, setDesktopElectronics] = useState([]);
  // const [officeItems, setOfficeItems] = useState([]);
  // const [electronicItems, setelectronicItems] = useState([]);
  // const [brands, setBrands] = useState([]);
  // const [mobileProducts, setMobileProducts] = useState([]);

  // const [desktopCarousel, setDesktopCarousel] = useState([])

  const [components, setComponents] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComponents(data);
        // console.log(data)
      });

    // .then((item) => {
    //   setCategories(item.headerNav);
    //   setDesktopCategory(item.desktopCategories);
    //   setOffer(item.newDeals);
    //   setDesktopOffer(item.desktopOffers)
    //   setWishlist(item.wishlist);
    //   setSponosor(item.sponsored);
    //   setSpotlight(item.spotLight);
    //   setElectronics(item.phones);
    //   setMobiles(item.mobiles);
    //   setDesktopfashion(item.dealsOnFashion);
    //   setDesktopElectronics(item.DealsOnElectronics);
    //   setOfficeItems(item.officeEquipments);
    //   setelectronicItems(item.electronics)
    //   setBrands(item.featuredBrands);
    //   setMobileProducts(item.flipkartProducts);
    //   setDesktopCarousel(item.caroselElements);

    // });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let array = [];
  Object.keys(components).map((key) => {
    let obj = {
      key: key,
      value: components[key],
    };
    array.push(obj);
  });

  // function arrangeItems(){

  //   switch("item"){
  //     case 'headerNav' :

  //   }
  // }


  return (
    <div className="App">
      <Header />
      <DesktopHeader />

      {array.map((item) =>{
        if(item.key === "headerNav") {
         return  <Categories categories={item.value} /> 
        }
        else if(item.key === "flipkartProducts"){
          return <CarouselMobile mobileProducts={item.value} />
        }
        else if(item.key === "newDeals"){
          return <Deals offer={item.value} />
        }
        else if(item.key === "desktopCategories")  {
         return <DesktopCategories desktopCategories={item.value} />
        }
        else if(item.key === "desktopOffers"){
          return <TopOffer desktopOffers={item.value} />
        }
      }




      )}

 {/*
      {array.map((item) =>
        item.key === "desktopCategories" ? (
          <DesktopCategories desktopCategories={item.value} />
        ) : null
      )}

      <div className="BodyContainer">
        {array.map((item) =>
          item.key === "flipkartProducts" ? (
            <CarouselMobile mobileProducts={item.value} />
          ) : null
        )}

        {array.map((item) =>
          item.key === "caroselElements" ? (
            <CarouselDesktop desktopCarousel={item.value} />
          ) : null
        )}

        {array.map((item) =>
          item.key === "newDeals" ? <Deals offer={item.value} /> : null
        )}

        {array.map((item) =>
          item.key === "desktopOffers" ? (
            <TopOffer desktopOffers={item.value} />
          ) : null
        )}

        {array.map((item) =>
          item.key === "wishlist" ? <Wishlist wishlist={item.value} /> : null
        )}

        {array.map((item) =>
          item.key === "sponsored" ? <Sponsor sponsor={item.value} /> : null
        )}

        {array.map((item) =>
          item.key === "spotLight" ? <Spotlight spotlight={item.value} /> : null
        )}

        {array.map((item) =>
          item.key === "phones" ? (
            <Electronics electronics={item.value} />
          ) : null
        )}

        {array.map((item) =>
          item.key === "mobiles" ? (
            <Mobiles desktopMobiles={item.value} />
          ) : null
        )}

        {array.map((item) =>
          item.key === "dealsOnFashion" ? (
            <DealsFashion dealsOnFashion={item.value} />
          ) : null
        )}

        {array.map((item) =>
          item.key === "electronics" ? (
            <HouseEquipment electronicItems={item.value} />
          ) : null
        )}

        {array.map((item) =>
          item.key === "featuredBrands" ? (
            <FeaturedBrands featuredBrands={item.value} />
          ) : null
        )}

        {array.map((item) =>
          item.key === "officeEquipments" ? (
            <OfficeEquipment officeElectronics={item.value} />
          ) : null
        )} 

        {array.map((item) =>
          item.key === "DealsOnElectronics" ? (
            <DealsElectronics desktopElectronics={item.value} />
          ) : null
        )} */}

        {/* <DesktopCategories desktopCategories ={desktopCategory} />
      <div className="BodyContainer">
      <CarouselMobile  mobileProducts={mobileProducts}/>
      <CarouselDesktop desktopCarousel={desktopCarousel} />
      <TopOffer  desktopOffers={desktopOffer} />
      <Deals offer={offer} />
      <Wishlist wishlist={wishlist} />
      <Mobiles desktopMobiles={desktopmobiles} />
      <DealsFashion dealsOnFashion={desktopFashion} />
      <HouseEquipment  electronicItems={electronicItems}/>
      <FeaturedBrands  featuredBrands={brands} />
      <OfficeEquipment officeElectronics ={officeItems}/>
      <Sponsor sponsor={sponsor} />
      <Spotlight spotlight={spotlight} />
      <Electronics electronics={electronics} />
      <DealsElectronics desktopElectronics={desktopElectronics} />       </div> */}
      </div>
    // </div>
  );
}

export default App;
