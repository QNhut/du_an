import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import logoIUH from '../../images/Logo.png'
import SidePanel from '../SidePanel/SidePanel';

function Header() {
  return (
    <>
      <div className={clsx('row', style.root)}>
        <div className='col-lg-1'>
          <header>
            <Link to="/"><img src={logoIUH} alt='logo' className={clsx(style.logo, 'mt-2')}/></Link>
          </header>
        </div>
        <div className='col-md-10 col-lg-5 text-center mt-4'>
          <h1 className={style.title}>Hệ thống dự đoán điểm sinh viên</h1>
        </div>
        <div className="col-lg-6">
            <SidePanel/>
        </div>
      </div>
    </>

  );
}
export default Header;  