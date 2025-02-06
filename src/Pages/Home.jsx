import React, { useEffect } from "react";
import { categories, ProductData } from "../Components/ProductData";
import HeroImage from "../assets/HeroImage.jpeg";
import Offers from "../Components/Offers";
import Categoroies from "../Components/Categoroies";
import { setProducts } from "../Redux/Feature/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../Components/ItemCard";
import Shop from "./Shop";
import { Link } from "react-router-dom";



function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  

  useEffect(() => {
    dispatch(setProducts(ProductData));
  }, []);

  return (
    <div>
    <div className="bg-white mt-2  px-4 md:px-16 lg-24">
      <div className="container mx-auto py-4 flex  flex-col md:flex-row space-x-2 ">
        <div className="w-full md:w-3/12 mt-3 ">
          <div className="bg-red-700 text-white text-xl font-bold py-2.5 px-3">
            SHOP BY CATEGORY
          </div>
          <ul className="space-y-5 bg-gray-200 p-3 border">
            {categories.map((item, index) => (
              <li key={index} className="flex items-center text-xl font-medium">
                <div className="w-2 h-2 border border-red-600 bg-red-600 rounded-full mr-2"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12  mt-3 md:mt-0 h-120 relative ml-10 ">
          <img src={HeroImage} alt="" className="w-full h-full my-3" />
          <div className="absolute top-16 left-16 ">
            <p className="text-black text-2xl font-medium mb-2 mt-20">
              Code With Khushboo
            </p>
            <h2 className="text-2xl font-bold mt-4">
              WELCOME TO KHUSHBOO's WEBSITE
            </h2>
            <p className="text-2xl text-red-700 font-semibold mt-4">
              Enjoy Million+ Products
            </p>
            <button className="text-black bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  dark:focus:ring-red-800 font-2xl font-bold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 mt-12 ml-12 transition-transform duration-300 cursor-pointer hover:scale-105">
             <Link to={"/Shop"}> SHOP NOW</Link>
            </button>
          </div>
        </div>
      </div>
      <Offers />
      <Categoroies />
      <div className="container mx-auto py-12">
        <h1 className="text-2xl font-bold mb-6 text-center">Top Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-4 lg:grid-cols-5 gap-6">
          {products.products.slice(0, 5).map((product, i) => (
            <ItemCard key={i} product={product} />
          ))}
        </div>
      </div>
     
    </div>
    <Shop/>
    </div>
  );
}

export default Home;
