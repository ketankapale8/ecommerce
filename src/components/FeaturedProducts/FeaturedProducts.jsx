import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './featuredproducts.scss';
import one from '../../assets/FeaturedEcommerce/shirt.webp';
import shirtone from '../../assets/FeaturedEcommerce/shirt1.jpg';

import two from '../../assets/FeaturedEcommerce/mac.webp';
import mactwo from '../../assets/FeaturedEcommerce/mac1.webp';

import three from '../../assets/FeaturedEcommerce/bag.webp';
import pendrivethree from '../../assets/FeaturedEcommerce/bag1.webp';


import four from '../../assets/FeaturedEcommerce/smartwatch.webp';
import smartwatchfour from '../../assets/FeaturedEcommerce/ambrane2.webp';

import Card  from '../Card/Card';
import useFetch from '../../hooks/useFetch';
 


const FeaturedProducts = ({type}) => {
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

    // const [data , setData] = useState([]);
    // useEffect(()=>{
    //     const fetchData = async () =>{
    //         try{
    //             const res = await axios.get(process.env.REACT_APP_API_URL +`/products?populate=*&[filters][type][$eq]=${type}`, {
    //                 headers: {
    //                     Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,

    //                 }
    //             }
    //             );
    //             setData(res.data.data)
                

    //         }catch(err){
    //             console.log(err)
    //         }
    //     };
    //     fetchData()
    // }, [])

    // console.log(data)

    const {data , loading , error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  return (
    <div className='featuredproducts'>
        <div className="top">
            <h1>{type} products</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam optio quam, soluta vero quod aliquam sint quasi possimus dignissimos officia nesciunt quo cupiditate, repellat corporis perferendis tempore doloremque. Nisi, inventore.
        </p>
        </div>
        <div className="bottom">
            {error ? "Something went wrong" : (loading ? "loading..": data?.map(item=>
                    <Card item={item} key={item.id}/>
            ))}
            
        </div>

    </div>
  )
}

export default FeaturedProducts