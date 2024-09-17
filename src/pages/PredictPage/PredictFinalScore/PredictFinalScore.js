import clsx from "clsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassChart, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";

import { actions, useStore } from "../../../store"
import style from './PredictFinalScore.module.css'
import PredictTextFinalScore from './PredictTextFinalScore/PredictTextFinalScore'


function PredictFinalScore() {

    const [state, dispath] = useStore()
    const input = useRef()

    const handlePredict = () => {
        console.log(input);
        console.log(input.current.value);

        if (input.current.value === "") {
            // alert("Bạn phải nhập mã số sinh viên")
            toast.error("Bạn phải nhập đầy đủ thông tin!")
        }
        else {
            let dataSend = {
                task_type: "predictFinal",
                data: [state.studentID]
            }
            console.log(dataSend)
            fetch('http://localhost:8000/api/inlab/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataSend)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    dispath(actions.setPredictedValueFinal(parseInt(data)))
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <div
            className={clsx(
                'tab-pane',
                'fade',
                'ml-md-2',
                style.frameTab,
                state.activeTabLeft === 'tab3' && 'show active')}
            id="tab3"
        >
            <h1 className={clsx(
                style.title,
                'text-center',
                'justify-content-center')}
            >
                Dự đoán điểm cuối cùng
            </h1>
            <div className="row">
                <div className={clsx("col-lg-3 text-end", style.label)}>
                    <label htmlFor="studentID" className="mb-2">
                        Mã số sinh viên
                    </label>
                </div>
                <div className={clsx(style.frameInput, 'col-lg-5')}>
                    <input
                        id="studentID"
                        className={clsx('form-control', style.input)}
                        type="number"
                        value={state.studentID}
                        name="predictFinal"
                        placeholder='Nhập mã số sinh viên'
                        onChange={(e) => { dispath(actions.setStudentID(e.target.value)) }}
                        ref={input}
                    />
                </div>
                <div className="col-lg-4 mt-2">
                    <button
                        className={clsx(
                            style.btnAnalysis,
                            "btn btn-primary ml-2"
                        )}
                    // onClick={}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlassChart} />&nbsp;Phân tích
                    </button>
                </div>
                <div className={clsx('row mt-2', style.predictText)}>
                    <PredictTextFinalScore />
                    <div className="col-lg-4 mt-2">
                        <button
                            className={clsx(
                                style.btnPredict,
                                "btn btn-primary ml-lg-4"
                            )}
                            onClick={handlePredict}
                        >
                            <FontAwesomeIcon icon={faCircleQuestion} />&nbsp;Dự đoán
                        </button>
                    </div>
                </div>
                <div className={clsx('col-12 mt-4', style.borderChart)}>

                </div>
            </div>
            <div className={style.footerTemp}></div>
        </div>
    )
}

export default PredictFinalScore