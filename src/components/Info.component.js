import React from 'react';

import Action from './Action.component';
import Image from './Image.component';
import Stats from './Stats.component';
import Quote from './Quote.component';

const Info = () => {
  return (
    <>
      <div className="lg:flex lg:justify-between">
        <Action />
        <Image />
        <Stats />
      </div>
      <Quote />
    </>
  );
};

export default Info;
