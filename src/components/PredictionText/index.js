import { memo } from 'react';

function PredictionText() {

  // console.log("22");
  

  return (
    <div className='row'>
      <div className='col-md-3'>
        <label className='mb-md-2 mt-lg-2'>Kết quả dự đoán</label>
      </div>
      <div className='col-md-6'>
        <input className='form-control'disabled/>
      </div>
      <div className='col-md-3'>
      </div>
    </div>
  )
}

export default memo(PredictionText) //Tránh gọi lại component không cần thiết