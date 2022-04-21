import { useState } from 'react';
import Logo from '../assets/logo.svg';
import Button from './Button.component';

const Header = () => {
  const [style, setStyle] = useState('header-btn');
  return (
    <div className="flex py-6 px-4">
      <div className="mr-auto">
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <Button btnStyle={style} />
      </div>
    </div>
  );
};

export default Header;
