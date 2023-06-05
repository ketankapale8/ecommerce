import React from 'react';
import './category.scss';
import {Link} from "react-router-dom";
import sale from '../../assets/Filter/three.jpg'
import one from '../../assets/Filter/one.jpg';
import two from '../../assets/Filter/two.jpg';
import four from '../../assets/Filter/four.jpg'
import six from '../../assets/Filter/six.jpg'
import seven from '../../assets/Filter/seven.jpg'




const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src={one} alt=''/>
                <button>
                    <Link className='link' to="/products/1">
                        Sale
                    </Link>
                </button>
            </div>
            <div className="row">
            <img src={sale} alt=''/>
                <button>
                    <Link className='link' to="/products/1">
                        Gifts
                    </Link>
                </button>
            </div>

        </div>
        <div className="col">
        <div className="row">
        <img src={two} alt=''/>
                <button>
                    <Link className='link' to="/products/1">
                        Men's Clothing
                    </Link>
                </button>
        </div>

        </div>
        <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src={four} alt=''/>
                <button>
                    <Link className='link' to="/products/1">
                        Apparel's
                    </Link>
                </button>
                </div>
            </div>
            <div className="col">
            <div className="row">
            <img src={six} alt=''/>
                <button>
                    <Link className='link' to="/products/1">
                        Kids
                    </Link>
                </button>
            </div>

            </div>

        </div>
        <div className="row">
            <div className="row">
            <img src={seven} alt=''/>
                <button>
                    <Link className='link' to="/products/1">
                        Bags
                    </Link>
                </button>
            </div>
        </div>


        </div>

    </div>
  )
}

export default Categories