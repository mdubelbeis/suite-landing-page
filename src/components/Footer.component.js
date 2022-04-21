import logo from '../assets/logo.svg';
import facebook from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
import insta from '../assets/icon-instagram.svg';

const Footer = () => {
  return (
    <div className="w-screen bg-dark-cream p-20 space-y-10 flex flex-col justify-center items-center">
      <img src={logo} alt="suite logo" />
      <small>Copyright - Suite</small>

      <div className="flex gap-8">
        <img src={facebook} alt="facebook logo" />
        <img src={twitter} alt="twitter logo" />
        <img src={insta} alt="instagram logo" />
      </div>
    </div>
  );
};

export default Footer;
