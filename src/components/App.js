import { useState } from 'react';

import Info from './Info.component';
import Header from './Header.component';
import Footer from './Footer.component';

const App = () => {
  return (
    <>
      <Header />
      <main className="w-auto mx-auto md:px-4 overflow-hidden">
        <Info />
      </main>
      <Footer />
    </>
  );
};

export default App;
