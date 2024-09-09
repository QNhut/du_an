import { memo, useMemo } from 'react';
import { useStore } from '../../../store';


function PredictionText() {

  const [state, dispath] = useStore()

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
      <div className='col-md-3'>
        <label className='mb-md-2 mt-lg-2'>Kết quả dự đoán</label>
      </div>
      <div className='col-md-6'>
        <input 
          className='form-control'
          disabled
          value={value}
        />
      </div>
      <div className='col-md-3'>
      </div>
    </div>
  )
}

export default memo(PredictionText) //Tránh gọi lại component không cần thiết