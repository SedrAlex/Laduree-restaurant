import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import cart_icon from '../../assets/images/bag.png'
import homepage from'../../assets/images/store.png'
import signin from'../../assets/images/signIn.png'
import logo from'../../assets/images/L.png'
import './BoutiqueHeader.css'
import { logoutUser } from "../../actions/userAction"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const BoutiqueHeader = () => {
  const dispatch = useDispatch()

    const [menu, setMenu] = useState(false)
    const cartState = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const {currentUser} = userstate
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const handleChangeMenu = () => {
        setMenu(!menu)
    }
return(
<nav className={menu ? 'nav-bar expand' : 'nav-bar'}>
           
<div className={menu ? 'nav-1 visible' : 'nav-1'} >

    <NavLink to='/' className='nav-link'><img src= {logo}/> </NavLink>
  
</div>
<div className="nav-2">

<div className="home-icon">
        <NavLink to='/restaurant' className='nav-link cart-link' > <img src={homepage} alt=""   className="home-image" /> </NavLink>
    </div>

    <div className="cart-icon">
        <NavLink to='/cart' className='nav-link cart-link' > <img src={cart_icon}  alt=""  /> 
       
        {cartState.cartItems.length > 0 && (
                <div className="cart-length">
                  {cartState.cartItems.length}
                </div>
              )} </NavLink>
    </div>

    <div className="cart-icon">
    {currentUser ? (
         <>
    {/* <NavLink to='/account' className='nav-link cart-link'>
      {currentUser.name} 
    </NavLink> */}
<Dropdown isOpen={isOpen} toggle={toggleDropdown}>
      <DropdownToggle caret className="custom-dropdown-toggle">
      {currentUser.name} 
      </DropdownToggle>
      <DropdownMenu className="custom-dropdown-menu">       
          <DropdownItem className="custom-dropdown-item "> <a href = "/Orders">Orders</a></DropdownItem>
          <DropdownItem divider />
          <DropdownItem  className="custom-dropdown-item "onClick={()=>{dispatch(logoutUser())}}> <li>Logout</li></DropdownItem>
      </DropdownMenu>
    </Dropdown>




  </>
        

    
 
    ):
  <NavLink to='/signin' className='nav-link cart-link'>
    <img src={signin} alt="" />
  </NavLink>
}

    </div>

   
    <button className="menu" onClick={handleChangeMenu}></button>
</div>
</nav>
) 
}
export default BoutiqueHeader
