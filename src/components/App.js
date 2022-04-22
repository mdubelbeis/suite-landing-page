import { useState } from 'react';

import Info from './Info.component';
import Header from './Header.component';
import Footer from './Footer.component';

const App = () => {
  return (
    <main>
      <Header />
      <div className="w-auto mx-auto md:px-4 overflow-hidden max-w-[1109px]">
        <Info />
      </div>
      <div className="hidden lg:block md:absolute md:top-[1100px] md:bottom-0 md:-z-10 bg-dark-cream w-screen md:h-full lg:h-[600px]"></div>
      <Footer />
    </main>
  );
};

export default App;
