import { useLocation, useNavigate } from 'react-router';
import clsx from 'clsx'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import style from './SidePanel.module.css'
import { useStore, actions } from '../../store';
import { Link } from 'react-router-dom';

function SidePanel() {

  const navigate = useNavigate()
  console.log(navigate);

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
    <div className={clsx(style.parent)}>
      {navbars.map((item, index) => (
        <div
          key={index}
          className={style.frameNav}
          onClick={e => {
            if (item.name === 'Dự đoán')
              setIsDropdown(!isDropdown)
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
            <div className={clsx(style.frameSubMenu, isDropdown && 'd-block')}>
              {panels.map((item, index) => (
                <a
                  key={index}
                  className={clsx(
                    style.item,
                    state.activeTabLeft === item.id && style.active,
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDropdown(!isDropdown)
                    dispath(actions.setActiveTabLeft(item.id));
                    window.history.pushState(null, null, `#${item.id}`);
                  }}
                  href={`#${item.id}`}
                >
                  {item.text}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
      <button
        className={style.collapseButton}
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default SidePanel