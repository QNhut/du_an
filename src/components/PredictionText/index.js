import { memo } from 'react';

import style from './prediction.module.css'

function PredictionText() {

  // console.log("22");
  

  return (
    <div className={style.root}>
      <label>Kết quả dự đoán</label>
      <input disabled/>
    </div>
  )
}

export default memo(PredictionText) //Tránh gọi lại component không cần thiết