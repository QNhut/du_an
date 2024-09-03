import { Link } from 'react-router-dom';
import style from './header.module.css';
import logoIUH from '../../../images/Logo.png'

function Header() {
  return (
    <header className={style.root}>
      <Link to="/"><img src={logoIUH} alt='logo' className={style.logo}/></Link>
    </header>
  );
}
export default Header;