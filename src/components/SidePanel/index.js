import clsx from 'clsx'
import style from './side-panel.module.css'

const panels = [
  {
    lab: 'prelab-prediction',
    isActive: true,
    text: 'Dự đoán điểm Inlab theo Prelab',
  },
  {
    lab: 'last-prediction',
    isActive: false,
    text: 'Dự đoán điểm cuối cùng',
  },
  {
    lab: 'context-prediction',
    isActive: false,
    text: 'Dự đoán điểm dựa trên ngữ cảnh',
  }
]

function SidePanel() {
  return (
    <div className={style.root}>
      {panels.map((item) => {
        return (
          <button key={item.lab} className={clsx(
            style.item,
            item.isActive && style.active
          )}>
            {item.text}
          </button>
        )
      })}
    </div>
  )
}

export default SidePanel