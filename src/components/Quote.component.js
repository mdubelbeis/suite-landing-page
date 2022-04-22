import { useState, useEffect } from 'react';

import small from '../assets/images/image-jeremy-small.webp';
import large from '../assets/images/image-jeremy-large.webp';
import curveUp from '../assets/pattern-curved-line-2.svg';
import blur from '../assets/pattern-blur.svg';

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
    <div className="w-screen relative bg-dark-blue rounded-xl flex flex-col items-center quote mt-72 md:w-full lg:flex-row lg:h-[575px] ">
      <div className="sticky w-[300px] md:-top-0 z-5 lg:absolute lg:top-40 lg:w-[400px]">
        <img src={blur} alt="blur svg" />
      </div>
      <img
        className="absolute -top-56 w-[300px] z-10 lg:ml-14 lg:-top-8 lg:w-96"
        src={image}
        alt="image of guy on phone"
      />
      <img
        className="mt-8 mb-2 w-24 h-20 md:mb-4 lg:sticky lg:left-[475px] lg:mt-0 lg:mb-40 lg:pr-8"
        src={curveUp}
        alt="curved line graphic"
      />
      <div className="text-center p-8 font-light lg:w-6/12 lg:sticky lg:left-full lg:text-left lg:px-20 lg:space-y-10 lg:mt-4">
        <p className="text-light-cream font-light text-[44px] leading-[50px] lg:pt-4 mb-10">
          It just <span className="font-extrabold">works.</span>
        </p>
        <q className="text-light-cream leading-[34px] text-[22px] tracking-[1.1px]">
          I really like how it is an all-in-one solution that handle
          many of the tasks that you would normally need separate
          tools to do the same job. This thing is a miracle worker.
        </q>

        <div className="my-10">
          <p className="text-light-cream font-bold mb-2">
            JEREMY ROBINSON
          </p>
          <p className="text-dark-cream font-light text-[16px] leading-[26px] tracking-widest md:mb-10 ">
            CMO, FYLO
          </p>
        </div>
      </div>
      <div className="absolute w-screen bottom-0 md:h-[470px] bg-dark-cream md:-z-[100] lg:hidden"></div>
    </div>
  );
};

export default Quote;
