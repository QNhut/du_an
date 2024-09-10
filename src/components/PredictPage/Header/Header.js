import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import logoIUH from '../../../images/Logo.png'

function Header() {
  return (
    <>
      <div className={clsx('row', style.root)}>
        <div className='col-md-1 col-sm-2'>
          <header>
            <Link to="/"><img src={logoIUH} alt='logo' className={style.logo}/></Link>
          </header>
        </div>
        <div className='col-md-11 text-center mt-4 mr-2'>
          <h1>Hệ thống dự đoán điểm sinh viên</h1>
        </div>
      </div>
    </>

  );
}
export default Header;  