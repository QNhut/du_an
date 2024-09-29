import clsx from "clsx"
import { useMemo } from "react"

import { useStore } from "../../../store"
import style from './PredictTextBaseOnQuestion.module.css'


function PredictTextBaseOnQuestion() {

    const [state] = useStore()

    const value = useMemo(() => {
        const score = parseInt(state.predictedValueQuestion)
        var topic = state.topic
        var strTopic = ""
        console.log(score);
        for( var i =0; i< topic.length; i++) {
            if(i === topic.length -1)
                strTopic = strTopic + topic[i] + "."
            else
                strTopic = strTopic + topic[i] + ", "
        }
        // console.log(strTopic);
        

        if (score >= 0 && score < 10)
            return `Điểm của bạn là ${score} điểm, bạn cần cải thiện các topic: ${strTopic}`
        else
            if (score === 10) {
                return `Điểm của bạn là ${score} điểm`
            }
            if (score === -2) {
                return `Không tìm thấy mã sinh viên`
            }
            else
                return ""
    })

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