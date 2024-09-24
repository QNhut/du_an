import clsx from "clsx"
import { useMemo } from "react"

import { useStore } from "../../../store"
import style from './PredictTextBaseOnQuestion.module.css'


function PredictTextBaseOnQuestion() {

    const [state] = useStore()

    const value = useMemo(() => {
      const score = parseInt(state.predictedValueQuestion)
      // console.log(score);
      
      if(score >= 0 && score <= 10)
        return `Điểm của bạn là ${score} điểm`
      else
        return ""
    }, [state.predictedValueQuestion])

    return (
        <div className="row">
            <div className={clsx(style.label, 'col-lg-3 text-end mt-2')}>
                <label className={clsx('mb-md-2 mt-lg-2')}>Kết quả dự đoán</label>
            </div>
            <div className={clsx("col-lg-8 mt-2", style.input)}>
                <input
                    className='form-control'
                    disabled
                    value={value}
                />
            </div>
        </div>
    )
}

export default PredictTextBaseOnQuestion