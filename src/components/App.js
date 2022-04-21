import { useState } from 'react';

import Info from './Info.component';
import Header from './Header.component';
import Footer from './Footer.component';

const App = () => {
  return (
    <>
      <Header />
      <main className="w-auto mx-auto md:px-4 overflow-hidden max-w-[1109px] lg:p-10">
        <Info />
      </main>
      <Footer />
    </>
  );
};

export default App;
