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
    <div className="w-screen relative bg-dark-blue rounded-xl flex flex-col items-center quote p-4 mt-56 md:w-full lg:flex-row lg:p-10 ">
      <div className="sticky md:-top-2 md:left-[300px] w-52 z-5 lg:absolute lg:left-[60px] lg:top-40 lg:w-60">
        <img src={blur} alt="blur" />
      </div>
      <img
        className="absolute -top-[140px] w-48 z-10 lg:ml-14 lg:-top-[100px] lg:w-80"
        src={image}
        alt="image of guy on phone"
      />
      <img
        className="mt-2 mb-10 w-20 h-20 md:mt-50 md:mb-4 overflow-hidden lg:sticky lg:left-[440px] lg:mb-32 lg:mr-10"
        src={curveUp}
        alt="curved line"
      />
      <div className="text-center px-2 md:px-6 lg:ml-20 lg:w-6/12 lg:sticky lg:left-[600px] lg:text-left lg:px-10">
        <p className="text-light-cream font-light text-[40px] leading-[50px] mb-8 lg:pt-4">
          It just <span className="font-extrabold">works.</span>
        </p>
        <q className="text-dark-cream leading-[32px] text-[18px] tracking-[0.09px]">
          I really like how it is an all-in-one solution that handle
          many of the tasks that you would normally need separate
          tools to do the same job. This thing is a miracle worker.
        </q>

        <div>
          <p className="text-light-cream mt-6 mb-1">
            JEREMY ROBINSON
          </p>
          <p className="font-dark-cream font-light text-[16px] leading-[26px] md:mb-10 ">
            CMO, FYLO
          </p>
        </div>
      </div>
      <div className="absolute w-screen bottom-0 md:h-[470px] bg-dark-cream md:-z-[100] lg:hidden"></div>
    </div>
  );
};

export default Quote;
