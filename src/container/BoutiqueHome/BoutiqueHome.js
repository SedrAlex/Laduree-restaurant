import React, { useRef } from 'react';
import './BoutiqueHome.css';
import { useEffect } from 'react';
import {gsap} from 'gsap';
import background from '../../assets/images/BOTUIQUE1.png';
import Loading from '../../components/Loading'

function BoutiqueHome({timeline}) {
  
      let bg = useRef(null)
      let contenth1 = useRef(null)
      let contentp = useRef(null)
      useEffect(()=> {
          timeline.to(bg,{
              delay: 1,
              duration: 2,
              y: "-50%",
              x: "-50%",
              opacity: 1
          })
      })
      return (
       

          <div className=''>

              <div className="content">
                  <p ref={el => contentp = el}>
                    The Art of Macrons    </p>
              </div>
              <img src={background} alt="bg" className="background" ref={el => bg = el}/>
        
       
          </div>
          
   
      )
  }
export default BoutiqueHome;