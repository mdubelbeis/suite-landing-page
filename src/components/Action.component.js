import { useState } from 'react';

import Arch from '../assets/pattern-curved-line-1.svg';

import Button from './Button.component';

const Action = () => {
  const [style, setStyle] = useState('action-btn');
  return (
    <div className="mt-14 flex flex-col">
      <img
        className="w-36 inline-block ml-auto mr-10"
        src={Arch}
        alt=""
      />
      <p className="text-[38px] text-left -tracking-[0.53px] mt-2">
        A <span className="font-bold">super solution</span> for your
        <span className="font-bold"> business.</span>
      </p>
      <p className="mt-8 mb-8 text-grey leading-7">
        Our marketing and sales automations help you scale your
        outreach to get more leads for your company.
      </p>
      <Button btnStyle={style} />
    </div>
  );
};

export default Action;
