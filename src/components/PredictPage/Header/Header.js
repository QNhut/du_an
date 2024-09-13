import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import logoIUH from '../../../images/Logo.png'

function Header() {
  return (
    <>
      <div className={clsx('row', style.root)}>
        <div className='col-md-2'>
          <header>
            <Link to="/"><img src={logoIUH} alt='logo' className={clsx(style.logo, 'mt-2')}/></Link>
          </header>
        </div>
        <div className='col-md-8 col-lg-12 text-center mt-4'>
          <h1 className={style.title}>Hệ thống dự đoán điểm sinh viên</h1>
        </div>
      </div>
    </>

  );
}
export default Header;  