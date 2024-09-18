import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import logoIUH from '../../images/Logo.png'
import SidePanel from '../SidePanel/SidePanel';

function Header() {
  return (
    <>
      <div className={clsx('row', style.root)}>
        <div className='col-md-1 col-sm-3 col-1'>
          <header>
            <Link to="/"><img src={logoIUH} alt='logo' className={clsx(style.logo, 'mt-2')}/></Link>
          </header>
        </div>
        <div className='col-md-6 col-sm-1 col-1 text-center mt-4'>
          {/* <h1 className={style.title}>Hệ thống dự đoán điểm sinh viên</h1> */}
        </div>
        <div className="col-md-5 col-sm-8 col-10">
            <SidePanel/>
        </div>
      </div>
    </>

  );
}
export default Header;  