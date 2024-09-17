import { useLocation } from 'react-router';
import clsx from 'clsx'
import { useEffect } from 'react';

import style from './SidePanel.module.css'
import { useStore, actions } from '../../store';

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
  },
  {
    id: 'tab4',
    text: 'Đăng nhập'
  }
]


function SidePanel() {

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
    <div className={style.parent}>
      {panels.map((item) => (
        <div
          className={style.frameNav}
          onClick={(e) => {
            e.preventDefault();
            dispath(actions.setActiveTabLeft(item.id));
            window.history.pushState(null, null, `#${item.id}`);
          }}
        >
          <li key={item.id} className={clsx(style.root)}>
            <a
              className={clsx(
                style.item,
                state.activeTabLeft === item.id && style.active,
              )}
              onClick={(e) => {
                e.preventDefault();
                dispath(actions.setActiveTabLeft(item.id));
                window.history.pushState(null, null, `#${item.id}`);
              }}
              href={`#${item.id}`}
            >
              {item.text}
            </a>
          </li>
        </div>
      ))}
    </div>
  );
}

export default SidePanel