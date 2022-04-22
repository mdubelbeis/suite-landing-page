import { useState } from 'react';

import Info from './Info.component';
import Header from './Header.component';
import Footer from './Footer.component';

const App = () => {
  return (
    <main>
      <Header />
      <main className="w-auto mx-auto md:px-4 overflow-hidden max-w-[1109px] lg:py-10 lg:pb-0">
        <Info />
      </main>
      <div className="hidden lg:block md:absolute md:top-[1200px] md:-z-10 bg-dark-cream w-screen md:h-[500px]"></div>
      <Footer />
    </main>
  );
};

export default App;
