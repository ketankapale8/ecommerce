import React , {useState} from 'react';
import './navbar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [open,setOpen] = useState(false);
    const products = useSelector((state) => state.cart.products);
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <Link className="link" to="/products/1">Groceries</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/2">Apparel</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/3">Electronics</Link>
                </div>
            </div>
            <div className="center">
                <Link className="link"  to="/">
                Shopme
                </Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className="link" >
                        Store
                    </Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <FavoriteBorderIcon/>
                    <PersonOutlineIcon/>
                    <div className="cartIcon" onClick={()=>setOpen(!open)}>
                        <ShoppingCartIcon/>
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>

        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar