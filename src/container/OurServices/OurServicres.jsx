import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import bgService from '../../assets/images/service2.png'
import weddingicon from '../../assets/images/icon1.png'
import biscuit from '../../assets/images/icon3.png'
import croissant from '../../assets/images/icon4.png'
import cupcake from '../../assets/images/icon2.png'

import'./OurServicres.css'
const OurServicres = () => {
  return  <section  className='OurService__Container'>

    <Container>
        <Row>
              <Col lg='6'>
                    <img src={bgService} alt=" " className='w-100' />
              </Col>
              <Col lg='6'>
                <div className='service__content'>
                      <h4>What Do We Offer For You?</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                
                <div className='features mt-4'>
                    <div className='feature1 d-flex align-items-start gap-5'>

                    <div className='single__feature'>
                         <span>
                            <img src = {weddingicon}  />
                        </span>
                            <h6> Birthday cakes</h6>
                            <p>Lorem Ipsum is dummy</p>
                    </div>

                      <div className='single__feature'>
                         <span className='feature__icon-two'>
                            <img src = {biscuit}  />
                         </span>
                            <h6> Tea Cookies</h6>
                            <p>Lorem Ipsum is dummy</p>
                     </div>
                  </div>

                  <div className='feature1 mt-3 d-flex align-items-center gap-5'>

                    <div className='single__feature'>
                        <span className='feature__icon-3'>
                            <img src = {cupcake}  />
                        </span>
                            <h6>  Patesseries</h6>
                            <p>Lorem Ipsum is dummy</p>
                    </div>

                    <div className='single__feature'>
                        <span className='feature__icon-4'>
                            <img src = {croissant}  />
                        </span>
                            <h6> Croissant</h6>
                            <p>Lorem Ipsum is dummy</p>
                    </div>
                 </div>

                 
                    
                </div>

            </Col>
 
        </Row>
    </Container>
</section>

  
}

export default OurServicres