import { useState, useEffect } from 'react';

import Mobile from '../assets/images/image-hero-landscape.png';
import Mobile2x from '../assets/images/image-hero-landscape@2x.png';
import Tablet from '../assets/images/image-hero-portrait.png';
import Desktop from '../assets/images/image-hero-portrait@2x.png';

const images = [Mobile, Mobile2x, Tablet, Desktop];

const Image = () => {
  return (
    <div>
      <img src={Mobile} alt="logo" />
    </div>
  );
};

export default Image;
