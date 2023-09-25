
 

import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import gallery01 from '../../assets/images/gallery01.jpeg'
import gallery02 from '../../assets/images/gallery02.jpeg'
import gallery03 from '../../assets/images/gallery03.jpeg'
import gallery04 from '../../assets/images/gallery04.jpeg'
import gallery05 from '../../assets/images/gallery05.jpeg'
import gallery06 from '../../assets/images/gallery06.jpeg'
import gallery07 from '../../assets/images/gallery07.jpeg'
import gallery08 from '../../assets/images/gallery08.png'
import gallery09 from '../../assets/images/gallery09.png'
import gallery10 from '../../assets/images/gallery10.jpeg'
import gallery11 from '../../assets/images/gallery11.jpeg'
import gallery12 from '../../assets/images/gallery12.jpeg'
import gallery13 from '../../assets/images/gallery13.jpeg'
import gallery14 from '../../assets/images/gallery14.jpeg'
import gallery15 from '../../assets/images/gallery15.png'


const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#80691A', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07, gallery08, gallery09, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;