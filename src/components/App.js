import { useState } from 'react';

import Info from './Info.component';
import Header from './Header.component';
import Footer from './Footer.component';

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-auto mx-auto md:px-4 overflow-hidden max-w-[1109px]">
        <Info />
      </main>
      <div className="hidden lg:block md:absolute md:top-[1250px] md:bottom-0 md:-z-10 bg-dark-cream w-screen md:h-full lg:h-[500px]"></div>
      <Footer />
    </div>
  );
};

export default App;
