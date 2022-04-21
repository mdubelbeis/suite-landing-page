import { useState } from 'react';

import Info from './Info.component';
import Header from './Header.component';
import Footer from './Footer.component';

const App = () => {
  return (
    <div className="container w-full mx-auto">
      <Header />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
