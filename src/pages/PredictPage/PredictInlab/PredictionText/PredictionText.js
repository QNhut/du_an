import { memo, useMemo } from 'react';
import clsx from 'clsx';

import { useStore } from '../../../../store';
import style from './PredictionText.module.css'


function PredictionText() {

  const [state] = useStore()

  const value = useMemo(() => {
    switch (parseInt(state.predictedValue[0])) {
      case 0: {
        return "Điểm của bạn bé hơn 4"
      }
      case 1: {
        return "Điểm của bạn từ 4 đến 5.5"
      }
      case 2: {
        return "Điểm của bạn từ 5.5 đến 7"
      }
      case 3: {
        return "Điểm của bạn từ 7 đến 8.5"
      }
      case 4: {
        return "Điểm của bạn từ 8.5 đến 10"
      }
      default: {
        return ""
      }
    }
  }, [state.predictedValue])

  return (
    <div className='row'>
      <div className={clsx('col-md-3 text-end', style.label)}>
        <label className='mb-md-2 mt-lg-2 mt-sm-2'>Kết quả dự đoán</label>
      </div>
      <div className='col-md-7'>
        <input
          className='form-control'
          disabled
          value={value}
        />
      </div>
      <div className='col-md-2'>
      </div>
    </div>
  )
}

export default memo(PredictionText) //Tránh gọi lại component không cần thiết