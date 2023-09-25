import React from 'react';
import spoon from '../../assets/images/spoon.png'

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem'}}>
      <p className="p__cormorant">{title}</p>
      <img src={spoon} alt="plate" className="spoon__img" />
</div>
);

export default SubHeading;
