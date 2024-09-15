import clsx from 'clsx'
import style from './SidePanel.module.css'
import { useStore, actions } from '../../../store';

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


function SidePanel() {

  const [state, dispath] = useStore()

  return (
    <div className={style.parent}>
      {panels.map((item) => (
        <li key={item.id} className={clsx('nav-item col-4', style.root)}>
          <a 
            className={clsx(
              style.item,
              state.activeTabLeft === item.id && style.active,
            )}
            onClick={() => dispath(actions.setActiveTabLeft(item.id))}
            href={`#${item.id}`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </div>
  );
}

export default SidePanel