import { useState, useEffect } from 'react';

import small from '../assets/images/image-jeremy-small.webp';
import large from '../assets/images/image-jeremy-large.webp';
import curveUp from '../assets/pattern-curved-line-2.svg';

const Quote = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [image, setImage] = useState(`${small}`);

  useEffect(() => {
    const onLoad = () => {
      setWindowWidth(window.innerWidth);

      if (windowWidth > 1024) {
        setImage(`${large}`);
      }
    };

    window.addEventListener('resize', onLoad);
    onLoad();

    return () => window.removeEventListener('resize', onLoad);
  }, [windowWidth]);

  return (
    <div className="w-screen relative bg-dark-blue rounded-md flex flex-col items-center quote p-4 mt-48">
      <img
        className="absolute -top-[140px] w-48"
        src={image}
        alt="image of guy on phone"
      />
      <img
        className="mt-52 mb-10 w-12"
        src={curveUp}
        alt="curved line"
      />
      <div className="text-center px-2">
        <p className="text-light-cream font-light text-[40px] leading-[50px] mb-8">
          It just <span className="font-extrabold">works.</span>
        </p>
        <q className="text-light-cream leading-[32px] text-[18px] tracking-[0.09px]">
          I really like how it is an all-in-one solution that handle
          many of the tasks that you would normally need separate
          tools to do the same job. This thing is a miracle worker.
        </q>

        <div>
          <p className="text-light-cream mt-6 mb-1">
            JEREMY ROBINSON
          </p>
          <p className="font-light text-[16px] leading-[26px] ">
            CMO, FYLO
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
