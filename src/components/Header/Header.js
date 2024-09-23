import clsx from 'clsx';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import { useStore } from '../../store';
import style from './Header.module.css';
import logoIUH from '../../images/Logo.png'

function Header() {

  const navbars = [
    { name: 'Trang chủ', link: '/' },
    { name: 'Dự đoán', link: '/predict-page' },
    { name: 'Đăng nhập', link: '/login' },
  ]

  const subNavbars = [
    {
      id: 'tab1',
      text: 'Dự đoán điểm Inlab theo Prelab',
      link: '/predict-page/bai-toan-1'
    },
    {
      id: 'tab2',
      text: 'Dự đoán điểm dựa trên ngữ cảnh',
      link: '/predict-page/bai-toan-2'
    },
    {
      id: 'tab3',
      text: 'Dự đoán điểm cuối cùng',
      link: '/predict-page/bai-toan-3'
    }
  ]

  const [state] = useStore()

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const link = useLocation()


  return (
    <>
      <Navbar className={style.root} expand='md' fixed='top'>
        <NavbarBrand>
          <Link to="/"><img src={logoIUH} alt='logo' className={clsx(style.logo, 'mt-2')} /></Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className='text-end' />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {navbars.map((item, index) => {
              if (item.name === 'Dự đoán') {
                return (
                  <div className={clsx(style.navItem, 'ps-5 pe-5')} key={item.name}>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle className={style.dropdownToggle} nav caret>
                        <span>{item.name}</span>
                      </DropdownToggle>
                      <DropdownMenu start className={style.dropdownMenu}>
                        {subNavbars.map((item1, index) => (
                          <div
                            className={clsx(
                              link.pathname === item.link && style.active
                            )}
                            key={index}
                            onClick={() => {
                              navigate(item1.link);
                            }}
                          >
                            <DropdownItem
                              className={style.itemSubMenu}
                            >
                              <Link
                                className={clsx(style.item)}
                                to={item1.link}
                              >
                                {item1.text}
                              </Link>
                            </DropdownItem>

                          </div>
                        ))}
                      </DropdownMenu>
                    </UncontrolledDropdown>

                  </div>
                )
              }
              return (
                <NavItem
                  className={clsx(style.navItem, 'mr-2')}
                  key={index}
                  onClick={() => navigate(item.link)}
                >
                  <Link className="nav-link ms-5 me-5" to={item.link}><span>{item.name}</span></Link>
                </NavItem>
              )
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </>

  );
}
export default Header;  