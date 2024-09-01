import style from './header.module.css';
import logoIUH from '../../images/Logo.png'

function Header() {
  return (
    <header className={style.root}>
      <img src={logoIUH} alt='logo' className={style.logo}/>
    </header>
  );
}
export default Header;