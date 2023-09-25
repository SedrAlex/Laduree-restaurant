import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper.min.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import './Menu.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterMeals, getAllMeals } from '../../actions/mealActions';
import { useEffect } from 'react';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { RiStarSFill } from 'react-icons/ri';
import { Col,Row } from 'reactstrap';

import course from '../../assets/images/course.png'
import pannacotta from '../../assets/images/panna-cotta.png'
import cocktail from '../../assets/images/cocktail.png'
import cheese from '../../assets/images/cheese.png'
import canape from '../../assets/images/canape.png'

function Menu() {
  const [filter,setFilter] = useState('Les plats principaux')
  const [products, setProducts] = useState({    
    filteredProducts: [],
})

 const dispatch = useDispatch()
 const [hoveredMealId, setHoveredMealId] = useState(null);

 const mealsState = useSelector(state => state.getAllMealsReducer)
 const{ meals , error, loading } = mealsState


 useEffect(() => {
          dispatch(getAllMeals())
        

         
 }, [])
 
 useEffect(() => {
  // Whenever `meals` or `filter` changes, filter the menuItems and update the state
  if (meals && filter) { // make sure both meals and menuItems exist
    const filteredProducts = meals.filter(meal => meal.category === filter)  
    setProducts({ ...products, filteredProducts });
  }

}, [meals, filter]) // Re-run this effect when `meals` or `filter` changes

  


  return (
    <div>

  <div className= 'menu__container'>
      <h1 className="laduree__heading">Ladurée Menu</h1>
      <div>
    <Row className='text-center mb-1 top-right'>
    <Col lg='2' className='text-center mb-5'>
    <button className={`main__menu__btn ${filter==='Les plats principaux' ? 'menu__active__btn': ''}`}
     onClick={()=> setFilter('Les plats principaux')}>
     <img src={course} />
      </button>
    </Col>
    <Col lg='2' className='text-center mb-5'>
    <button className={`main__menu__btn ${filter==='Entrées' ? 'menu__active__btn': ''}`}
    onClick={()=> setFilter('Entrées')}>
    <img src={canape} />
      </button>
    </Col>
    <Col lg='2' className='text-center mb-5'>
    <button className={`main__menu__btn ${filter==='Dessert' ? 'menu__active__btn': ''}`}
    onClick={()=> setFilter('Dessert')}
    >

        <img src={pannacotta} />
      </button>
    </Col>
    <Col lg='2' className='text-center mb-5'>
    <button className={`main__menu__btn ${filter==='Drinks' ? 'menu__active__btn': ''}`}
        onClick={()=> setFilter('Drinks')}>

        <img src={cocktail} />
      </button>
    </Col>
   
  </Row>
  
  
      </div>
    


      {loading ? (
        <Loading />
 ) : error ? (
         <  Error error='Something went wrong' />
        ) : (
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
       {products.filteredProducts.map((meal,index) => (
              <SwiperSlide 
              key={index} 
              onMouseEnter={() => setHoveredMealId(meal.id)} 
              onMouseLeave={() => setHoveredMealId(null)}
            >
              <div className='meal_item'>
                <img src={meal.image} alt="meal_image" />
                <div className={`meal-info ${hoveredMealId === meal.id ? 'visible' : ''}`}>
                  <h3>{meal.name}</h3>
                  <p>${meal.price}</p>
                  <span ><RiStarSFill /></span>
                 <span ><RiStarSFill /></span>
                  <span><RiStarSFill /></span>
                <span ><RiStarSFill /></span>
                <span ><RiStarSFill /></span>
                </div>
              </div>
            </SwiperSlide>
            
            ))}
             <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
        )}

    </div>
    </div>
   
  );
}

export default Menu;
