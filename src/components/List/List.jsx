import React from "react";
import "./list.scss";
import Card from "../Card/Card";
import one from '../../assets/FeaturedEcommerce/shirt.webp';
import shirtone from '../../assets/FeaturedEcommerce/shirt1.jpg';

import two from '../../assets/FeaturedEcommerce/mac.webp';
import mactwo from '../../assets/FeaturedEcommerce/mac1.webp';

import three from '../../assets/FeaturedEcommerce/bag.webp';
import pendrivethree from '../../assets/FeaturedEcommerce/bag1.webp';


import four from '../../assets/FeaturedEcommerce/smartwatch.webp';
import smartwatchfour from '../../assets/FeaturedEcommerce/ambrane2.webp';
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {

    // const data = [
    //     {
    //         id : 1,
    //         img1 : one,
    //         img2 : shirtone,
    //         title:"Peter England Formal Shirt",
    //         isNew:true,
    //         oldPrice : 1299,
    //         price : 899

    //     },
    //     {
    //         id : 2,
    //         img1 : three,
    //         img2 : pendrivethree,
    //         title:"Laptop Bag",
    //         isNew:true,
    //         oldPrice : 1699,
    //         price : 1499

    //     },
    //     {
    //         id : 3,
    //         img1 : four,
    //         img2 : smartwatchfour,
    //         title:"Ambrane Smartwatch",
    //         isNew:true,
    //         oldPrice : 3499,
    //         price : 2499

    //     },
    //     {
    //         id : 4,
    //         img1 : two,
    //         img2 : mactwo,
    //         title:"MacBook Air M1",
    //         isNew:false,
    //         oldPrice : 89999,
    //         price : 65499

    //     }
    // ]
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}
    ${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
      )}&[filters][price][$lte]=${maxPrice}`

    // `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    //   (item) => `&[filters][sub_categories][id][$eq]=${item}`
    // )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`

  )
    

  return (
    <div className="list">
      {error? 'Something went wrong!!' : (loading ? 'loading...' : data?.map((item) => <Card item={item} key={item.id} />))}
    </div>
  );
};

export default List;