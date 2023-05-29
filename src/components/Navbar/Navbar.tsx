
import { ReactComponent as Wallet } from '../../assets/Wallet.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav__header'>
      <ul>
        <li>
          Section
          <span></span>
        </li>
      </ul>
      <div className='nav__wallet'>
        <div>
          <Wallet />
          <span>0.2 $XYZ</span>
        </div>
        <button>Tier 1</button>
      </div>
    </nav>
  );
};

export default Navbar;
