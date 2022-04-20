import Logo from '../assets/logo.svg';
import Button from './Button.component';

const Header = () => {
  return (
    <div className="flex py-4 items-center">
      <img src={Logo} alt="Logo" className="mr-auto" />
      <Button />
    </div>
  );
};

export default Header;
