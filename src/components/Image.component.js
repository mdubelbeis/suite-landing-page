import { useState, useEffect } from 'react';

import Mobile from '../assets/images/image-hero-landscape.png';
import Mobile2x from '../assets/images/image-hero-landscape@2x.png';
import Tablet from '../assets/images/image-hero-portrait.png';
import Desktop from '../assets/images/image-hero-portrait@2x.png';

const Image = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [image, setImage] = useState(`${Mobile}`);

  useEffect(() => {
    const onLoad = () => {
      setWindowWidth(window.innerWidth);

      if (windowWidth <= 375) {
        setImage(`${Mobile}`);
      } else if (windowWidth < 768) {
        setImage(`${Mobile2x}`);
      } else if (windowWidth === 768) {
        setImage(`${Tablet}`);
      } else if (windowWidth > 768) {
        setImage(`${Desktop}`);
      }
    };

    window.addEventListener('resize', onLoad);
    onLoad();

    return () => window.removeEventListener('resize', onLoad);
  }, [windowWidth]);

  return (
    <div>
      <img src={image} alt="logo" />
      <p>{windowWidth}</p>
    </div>
  );
};

export default Image;
