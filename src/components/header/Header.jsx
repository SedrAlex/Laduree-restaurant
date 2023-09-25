import React, { useRef, useState }  from 'react'
import './Header.css'
import { Link ,useLocation} from 'react-router-dom';
import Modal from '../Modal/Modal';
import cartImage from '../../assets/images/shop_bag.svg'
import restaurantImage from '../../assets/images/store.png'
import signInImage from'../../assets/images/signIn.png'

const Header = () => {
   const location = useLocation();
   const isBotiquePage = location.pathname === '/Boitque';
   const isCartPage = location.pathname === '/Cart';
   const [navColor, setNavColor] = useState("transparent");
   const [activeLink, setActiveLink] = useState('Home');
   const handleLinkClick = (link) => {
     setActiveLink(link);
   };
   //open reservation modal
   const [isModalVisible, setIsModalVisible] = useState(false);

   const openReserve = () => {
     setIsModalVisible(current => !current);    


   }

   

   return(
   <header className='header'>
   <nav>
   <div
   className="main-nav-container"
   style={{
     backgroundColor: navColor,
     transition: "1s",
   }}
 >
   <Link to='/'>
     <div className="logo" >
       LA<span>DUR</span>ÉE
     </div>
   </Link>

   <ul className="main-nav-links">
     <li style={{ borderRight: "0" }}>
       <Link to='/signIn'>
       {isBotiquePage ? <img src={signInImage} alt="signin" className="image-small" /> : 'SignIn'}

       </Link>
     </li>

     <li style={{ borderRight: "0" }}>
       <Link to='/Restaurant'>
         {isBotiquePage ? <img src={restaurantImage} alt="restaurant" className="image-small" /> : 'Restaurant'}
       </Link>
     </li>

     <li style={{ borderRight: "0" }}>
       <Link to='/Boitque'>Boutique</Link>
     </li>

     <li style={{ borderRight: "0" }}>
       <Link to={isBotiquePage ? '/Cart' : '/Menu'}>
         {isBotiquePage ? <img src={cartImage} alt="Cart" className="image-small" /> : 'Menu'}
       </Link>
     </li>

     <li>
       <a href="#" className= "{isBotiquePage ? 'botique-link' : 'reservation-link'}"  onClick={isBotiquePage ? undefined : openReserve}>
         {isBotiquePage ? 'Bot' : 'Reservations'}
       </a>
     </li>
   </ul>
 </div>

   </nav>
   {isModalVisible && (
                <Modal onModalClose={() => setIsModalVisible(false)}>
                    <Modal.Header></Modal.Header>
                    <Modal.Body>
                    </Modal.Body>
                </Modal>
                )}  
</header>  

);


}

export default Header