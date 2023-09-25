import React, { useState } from 'react'
import {Container, Row, Col} from "reactstrap"
import new1 from "../../assets/images/BOTUIQUE4.png"
import new2 from "../../assets/images/BOTUIQUE3.png"
import new3 from "../../assets/images/BOTUIQUE5.png"
import new4 from "../../assets/images/BOTUIQUE2.png"
import {BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './NewArrivals.css'
import MenuCard from '../MenuCard/MenuCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBoutiques } from '../../actions/BoutiqueActions'
import { useEffect } from 'react'
const NewArrivals = () => {


 
  const dispatch = useDispatch()
 
  const boutiquesState = useSelector(state => state.getAllBoutiquesReducer)
 
  const{ boutiques , error, loading } = boutiquesState
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
           dispatch(getAllBoutiques())
         
 
          
  }, [])
  useEffect(() => {

  if (boutiques) {
    // Retrieve products with the 'Breakfast' category
    const newArrivalsProducts = boutiques.filter(boutique => boutique.category === 'French Pastry');
    setProducts(newArrivalsProducts);
  }
}, [boutiques])

  const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;
	const totalPages = Math.ceil(products.length / itemsPerPage);
  
	const handlePageChange = (pageNumber) => {
	  setCurrentPage(pageNumber);
	};
  
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedGridBlog = products.slice(startIndex, endIndex);

  return (
    <section className="pt-0 newArrival__container" >
         <Container >
            <Row>
                   <Col lg='12' className='mb-5 '>
                    
                      <h2 className='headline'>New Items</h2>
                   </Col>
            {
                paginatedGridBlog.map(item => (
                <Col lg='3' key={item.id}>
                       <MenuCard item={item} />
               </Col>
                ))

                
            }
            <div className="pagination-bx clearfix primary rounded-sm col-md-12 text-center">
        <ul className="pagination justify-content-center">
          <li className={currentPage === 1 ? 'disabled' : ''}>
            <button onClick={() => handlePageChange(currentPage - 1)}>
            <BsArrowLeftShort className="ti-arrow-left" />
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
              <button onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            </li>
          ))}
          <li className={currentPage === totalPages ? 'disabled' : ''}>
            <button onClick={() => handlePageChange(currentPage + 1)}>
			<BsArrowRightShort className="ti-arrow-right" /> 
            </button>
          </li>
        </ul>
      </div>	
            </Row>
         </Container>
    </section>
  )
  
}

export default NewArrivals