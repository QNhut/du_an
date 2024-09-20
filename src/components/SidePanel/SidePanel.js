import { useLocation, useNavigate } from 'react-router';
import clsx from 'clsx'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import style from './SidePanel.module.css'
import { useStore, actions } from '../../store';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function SidePanel() {

  const navigate = useNavigate()
  // console.log(navigate);

  const [isDropdown, setIsDropdown] = useState(false)
  const [isCollapse, setIsCollapse] = useState(false)

  const navbars = [
    { name: 'Trang chủ', link: '/' },
    { name: 'Dự đoán', link: '/predict-page' },
    { name: 'Đăng nhập', link: '/login' },
  ]

  const panels = [
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
  const location = useLocation()

  useEffect(() => {
    // console.log(location.hash);
    if (location.hash !== '') {
      var newTab = location.hash.slice(1,)
      dispath(actions.setActiveTabLeft(newTab))
    }
  }, [location, dispath])


  return (
    <Navbar>
      <Collapse>
        <Nav className={clsx(style.parent, 'd-flex')}>
          {navbars.map((item, index) => (
            <NavItem
              key={index}
              className={clsx(style.frameNav, 'col-12')}
              onClick={e => {
                if (item.name === 'Dự đoán') {
                  setIsDropdown(!isDropdown)
                }
                navigate(item.link)
              }}
            >
              <Link
                className={clsx(
                  style.itemMenu,
                  item.name === 'Dự đoán' && 'dropdown-toggle'
                )}
                to={item.link}
                onClick={item.name === 'Dự đoán' ? () => setIsDropdown(!isDropdown) : undefined}
              >
                {item.name}
              </Link>
              {item.name === 'Dự đoán' && (
                <div className={clsx(style.frameSubMenu, isDropdown && 'd-block row')}>
                  {panels.map((item, index) => (
                    <a
                      key={index}
                      className={clsx(
                        style.item,
                        state.activeTabLeft === item.id && style.active,
                      )}
                      href={`#${item.id}`}  
                      onClick={(e) => {
                        setIsDropdown(!isDropdown)
                        dispath(actions.setActiveTabLeft(item.id));
                      }}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              )}
            </NavItem>
          ))}
          <button
            className={style.collapseButton}
            onClick={() => setIsCollapse(!isCollapse)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default SidePanel