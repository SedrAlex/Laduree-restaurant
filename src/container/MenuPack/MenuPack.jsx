import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import MenuCard from '../MenuCard/MenuCard'
import { ChocolateProducts, CroissantProducts, GiftProducts, dessertProducts, teaCookiesProducts } from '../../constants/products'
import weddingicon from '../../assets/images/icon1.png'
import biscuit from '../../assets/images/icon3.png'
import croissant from '../../assets/images/icon4.png'
import cupcake from '../../assets/images/icon2.png'
import "./MenuPack.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllBoutiques } from '../../actions/BoutiqueActions'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const MenuPack = () => {
 const [filter,setFilter] = useState('Breakfast')
 const[products, setProducts] = useState({
    filteredProducts: [],

})

 const dispatch = useDispatch()

 const boutiquesState = useSelector(state => state.getAllBoutiquesReducer)

 const{ boutiques , error, loading } = boutiquesState


 useEffect(() => {
          dispatch(getAllBoutiques())
        

         
 }, [])
 
 useEffect(() => {
  // Whenever `meals` or `filter` changes, filter the menuItems and update the state
  if (boutiques && filter) { // make sure both meals and menuItems exist
    const filteredProducts = boutiques.filter(boutique => boutique.category === filter)  
    setProducts({ ...products, filteredProducts });
  }

}, [boutiques, filter]) // Re-run this effect when `meals` or `filter` changes
  return (
  <section className='Menupack__Cotainer'>
    <Container>
        <Row>
            <Col lg ='12' className='text-center mb-4'>
                <h3 className='menu__title'>Ladurée Menu Pack</h3></Col>
            <Col lg = '12' className='text-center mb-5'>
                <button className={`menu__btn ${filter==='Breakfast' ? 'active__btn' : ''}`}
                onClick={()=> setFilter('Breakfast')}><
                    img src = {croissant} /></button>
                <button className={`menu__btn ${filter==='Tea cookies' ? 'active__btn' : ''}`}
                onClick={()=> setFilter('Tea cookies')}>
                    <img src = {weddingicon} /></button>
                <button className={`menu__btn ${filter==='French Pastry' ? 'active__btn' : ''}`}
                onClick={()=> setFilter('French Pastry')}>
                    <img src = {biscuit} /></button>
                <button className={`menu__btn ${filter==='DESSERTS' ? 'active__btn' : ''}`}
                onClick={()=> setFilter('DESSERTS')}>
                    <img src = {cupcake} /></button>
                <button className={`menu__btn ${filter==='COOKIES' ? 'active__btn' : ''}`}
                onClick={()=> setFilter('COOKIES')}>
                    <img src = {cupcake} /></button>

            </Col>
            {loading ? (
            <Loading />
                       ) : error ? (
         <  Error error='Something went wrong' />
        ) : (
            products.filteredProducts.map((item,index) => (
                    <Col lg = '3' key={index} className='mb-4'> 
                    {"   "}
                    <MenuCard item = {item} /></Col>
                ))
            )}
        </Row>
    </Container>
  </section>
  
)}

export default MenuPack