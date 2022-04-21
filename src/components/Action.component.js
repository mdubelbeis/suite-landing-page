import { useState } from 'react';

import Arch from '../assets/pattern-curved-line-1.svg';

import Button from './Button.component';

const Action = () => {
  const [style, setStyle] = useState('action-btn');
  return (
    <div className="relative mt-14 flex flex-col px-4 md:w-9/12 md:mt-28">
      <img
        className="absolute top-0 left-[172px] w-36 inline-block md:w-56 md:left-[250px]"
        src={Arch}
        alt=""
      />
      <p className="mt-6 text-[38px] text-left -tracking-[0.53px] md:text-[56px] md:mt-10">
        A <span className="font-bold">super solution</span> for your
        <span className="font-bold"> business.</span>
      </p>
      <p className="mt-8 mb-8 text-grey leading-7 tracking-normal md:pr-48">
        Our marketing and sales automations help you scale your
        outreach to get more leads for your company.
      </p>
      <Button btnStyle={style} />
    </div>
  );
};

export default Action;
