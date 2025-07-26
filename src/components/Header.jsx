import Logo from '../images/logo.svg';
import NavBar from './NavBar';
import NavBarDesktop from './NavBarDesktop';
import { useWindowWidth } from '@react-hook/window-size';

const Header = () => {

  const width = useWindowWidth();

  return (
    <header className='flex justify-between items-center px-3 lg:px-12'>
        <img src={Logo} alt="Snap Logo" />

        {width >= 768 ? <NavBarDesktop /> : <NavBar />}
    </header>
  )
}

export default Header