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
      "https://raw.githubusercontent.com/Anjugeorg-e/ReactProjects/main/flipkart/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComponents(data);
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

  function arrangeItems(item) {
    if (item.key === "mobileheaderNav") {
      return <Categories categories={item.value} />;
    } else if (item.key === "flipkartProducts") {
      return <CarouselMobile mobileProducts={item.value} />;
    } else if (item.key === "newDeals") {
      return <Deals offer={item.value} />;
    } else if (item.key === "wishlist") {
      return <Wishlist wishlist={item.value} />;
    } else if (item.key === "desktopheaderNav") {
      return <DesktopCategories desktopCategories={item.value} />;
    } else if (item.key === "desktopOffers") {
      return <TopOffer desktopOffers={item.value} />;
    } else if (item.key === "sponsored") {
      return <Sponsor sponsor={item.value} />;
    } else if (item.key === "spotLight") {
      return <Spotlight spotlight={item.value} />;
    } else if (item.key === "phones") {
      return <Electronics electronics={item.value} />;
    } else if (item.key === "caroselElements") {
      return <CarouselDesktop desktopCarousel={item.value} />;
    } else if (item.key === "mobiles") {
      return <Mobiles desktopMobiles={item.value} />;
    } else if (item.key === "desktopOffers") {
      return <TopOffer desktopOffers={item.value} />;
    } else if (item.key === "dealsOnFashion") {
      return <DealsFashion dealsOnFashion={item.value} />;
    } else if (item.key === "featuredBrands") {
      return <FeaturedBrands featuredBrands={item.value} />;
    } else if (item.key === "officeEquipments") {
      return <OfficeEquipment officeElectronics={item.value} />;
    } else if (item.key === "electronics") {
      return <HouseEquipment electronicItems={item.value} />;
    } else if (item.key === "DealsOnElectronics") {
      return <DealsElectronics desktopElectronics={item.value} />;
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Header />
      <DesktopHeader />

      <div className="BodyContainer">
        {array.map((item) => arrangeItems(item))}
      </div>
    </div>
  );
}

export default App;
