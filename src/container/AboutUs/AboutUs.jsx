import React from 'react';
import './AboutUs.css';
import spoon from '../../assets/images/spoon.png'
import L from '../../assets/images/L.png'
import plate from '../../assets/images/plate.png'

const AboutUs = () => (
  <div className="app__aboutus app__wrapper flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__centerLogo ">
        <img src={L}  alt = "L letter" />
      </div>
   
     <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
               <h1 className="headtext__cormorant">About Us</h1>
              <img src= {spoon} alt="about_spoon" className="spoon__img2"  />
              <p className="p__opensans">nue comme ambassadrice du macaron parisien, la Maison Ladurée est aussi l’inventeur du salon de thé à la française et l’héritier d’une culture et d’un art de vivre, celui du bon et du beau en toute chose. Notre art pâtissier se vit avec passion chaque jour et se partage avec vous dans des décors mémorables. Découvrez l’histoire d’une Maison qui ne cesse de se réinventer depuis 1862</p>
              <button type="button" className="custom__button"> View more</button>
          </div>
          <div className="app__aboutus-content_knife flex__center">
           <img src={plate} alt="about_knife" />
  </div>
      <div className="app__aboutus-content_history">
               <h1 className="headtext__cormorant">Our History</h1>
              <img src={spoon} alt="about_spoon" className="spoon__img"  />
              <p className="p__opensans">nue comme ambassadrice du macaron parisien, la Maison Ladurée est aussi l’inventeur du salon de thé à la française et l’héritier d’une culture et d’un art de vivre, celui du bon et du beau en toute chose. Notre art pâtissier se vit avec passion chaque jour et se partage avec vous dans des décors mémorables. Découvrez l’histoire d’une Maison qui ne cesse de se réinventer depuis 1862</p>
              <button type="button" className="custom__button"> View more</button>
    </div>
  </div>
  </div>
);

export default AboutUs;