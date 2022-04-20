import { useState } from 'react';

import Info from './Info.component';
import Header from './Header.component';
import Footer from './Footer.component';

const App = () => {
  return (
    <div className="container py-6 px-4">
      <Header />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
