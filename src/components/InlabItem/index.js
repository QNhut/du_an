import style from './inlab.module.css'

function InlabItem({ index = 1}) {
  return (
    <div className={style.root}>
      <span>Inlab {index}</span>
      <div className={style.wrapper}>
        <div className={style.controlPanel}>
          <label>Điểm cao nhất</label>
          <input type='number' placeholder="Nhập điểm cao nhất"/>
        </div>
        <div className={style.controlPanel}>
          <label>Điểm thấp nhất</label>
          <input type='number' placeholder="Nhập điểm thấp nhất"/>
        </div>
        <div className={style.controlPanel}>
          <label>Số lần làm</label>
          <input type='number' placeholder="Nhập số lần làm"/>
        </div>
        <div className={style.controlPanel}>
          <label>Số câu hỏi</label>
          <input type='number' placeholder="Nhập số câu hỏi"/>
        </div>
      </div>
    </div>
  )
}
export default InlabItem