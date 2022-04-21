import React from 'react';

const Stats = () => {
  return (
    <div className="text-center mt-12 space-y-6  md:flex md:justify-around md:items-center md:object-fit md:space-y-0 md:mt-20 lg:flex-col lg:p-14 lg:items-start">
      <div>
        <h2>2K+</h2>
        <p className="text-grey tracking-widest">COMPANIES</p>
      </div>
      <div>
        <h2>8</h2>
        <p className="text-grey tracking-widest">LANGUAGES</p>
      </div>
      <div>
        <h2>1.2M</h2>
        <p className="text-grey tracking-widest">LEADS</p>
      </div>
    </div>
  );
};

export default Stats;
