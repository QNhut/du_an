import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import logoIUH from '../../images/Logo.png'
// import { Navbar, NavbarToggler, Nav, NavItem, NavLink, Container, NavbarBrand, Collapse, Dropdown, DropdownItem } from 'reactstrap';
import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, } from 'reactstrap';
import { actions, useStore } from '../../store';

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
    },
    {
      id: 'tab2',
      text: 'Dự đoán điểm dựa trên ngữ cảnh',
    },
    {
      id: 'tab3',
      text: 'Dự đoán điểm cuối cùng',
    }
  ]

  const [state, dispath] = useStore()

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


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
                        {subNavbars.map((item, index) => (
                          <div
                            className={clsx(
                              state.activeTabLeft === item.id && style.active
                            )}
                            key={index}
                            onClick={(e) => {
                              e.preventDefault()
                              dispath(actions.setActiveTabLeft(item.id));
                              window.history.pushState(null, '', `#${item.id}`);
                            }}
                          >
                            <DropdownItem
                              className={style.itemSubMenu}
                            >
                              <a
                                className={clsx(style.item)}
                                onClick={(e) => {
                                  e.preventDefault();
                                  dispath(actions.setActiveTabLeft(item.id));
                                  window.history.pushState(null, '', `#${item.id}`);
                                }}
                              >
                                {item.text}
                              </a>
                            </DropdownItem>

                          </div>
                        ))}
                      </DropdownMenu>
                    </UncontrolledDropdown>

                  </div>
                )
              }
              return (
                <NavItem className={clsx(style.navItem, 'mr-2')} key={index}>
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