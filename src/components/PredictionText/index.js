import style from './prediction.module.css'

function PredictionText() {
  return (
    <div className={style.root}>
      <label>Kết quả dự đoán</label>
      <input disabled/>
    </div>
  )
}

export default PredictionText