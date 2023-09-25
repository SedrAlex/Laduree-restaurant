import React, { useEffect } from 'react'
import gsap from 'gsap';
import BoutiqueHome from '../../container/BoutiqueHome/BoutiqueHome';
import NewArrivals from '../../container/NewArrival/NewArrival';
import OurServicres from '../../container/OurServices/OurServicres';
import MenuPack from '../../container/MenuPack/MenuPack';
import BoutiqueHeader from '../../components/BoutiqueHeader/BoutiqueHeader';

const Boutique = () => {
  let timeline = gsap.timeline();


return (
<>
      <BoutiqueHeader />
       <BoutiqueHome timeline= {timeline}/>

      <NewArrivals />
      <OurServicres />
      <MenuPack />

      </>
  )
}

export default Boutique
