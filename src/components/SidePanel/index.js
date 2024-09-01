import clsx from 'clsx'
import style from './side-panel.module.css'

const panels = [
  {
    id: 'tab1',
    text: 'Dự đoán điểm Inlab theo Prelab',
  },
  {
    id: 'tab2',
    text: 'Dự đoán điểm cuối cùng',
  },
  {
    id: 'tab3',
    text: 'Dự đoán điểm dựa trên ngữ cảnh',
  }
]


function SidePanel({ activeTabLeft, setActiveTabLeft }) {
  return (
    <>
      {panels.map((item) => (
        <li key={item.id} className={clsx('nav-item mx-2 mx-sm-0 mx-md-2 mx-lg-0', style.root)}>
          <a 
            className={clsx(
              style.item,
              activeTabLeft === item.id && style.active
            )}
            onClick={() => setActiveTabLeft(item.id)}
            href={`#${item.id}`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </>
  );
}

export default SidePanel