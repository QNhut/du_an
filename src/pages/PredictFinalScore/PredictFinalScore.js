import clsx from "clsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassChart, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

import { actions, useStore } from "../../store"
import style from './PredictFinalScore.module.css'
import PredictTextFinalScore from './PredictTextFinalScore/PredictTextFinalScore'
import Bar from "./Bar/Bar";
import InputGroupFinal from "./InputGroupFinal/InputGroupFinal";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";

function PredictFinalScore() {
    const [state, dispath] = useStore()
    const [isChart, setIsChart] = useState(false)

    const handlePredict = () => {
        const inputs = document.querySelectorAll('input[name="predictQuestion"]');
        for (let i = 0; i < inputs.length; i++) {
            var value = parseInt(inputs[i].value.trim())
            if (isNaN(value)) {
                inputs[i].focus()
                inputs[i].select()
                toast.error("Bạn phải nhập đầy đủ thông tin")
                return;
            }
            if (value < 0 || value > 10) {
                inputs[i].focus()
                inputs[i].select()
                toast.error("Điểm chỉ được nhận giá trị từ 0 đến 10")
                return;
            }
        }

        if (state.dataPredictFinal &&
            state.dataPredictFinal.Lab1 && state.dataPredictFinal.Lab1.Prelab && state.dataPredictFinal.Lab1.Inlab &&
            state.dataPredictFinal.Lab2 && state.dataPredictFinal.Lab2.Prelab && state.dataPredictFinal.Lab2.Inlab &&
            state.dataPredictFinal.Lab3 && state.dataPredictFinal.Lab3.Prelab && state.dataPredictFinal.Lab3.Inlab &&
            state.dataPredictFinal.Lab4 && state.dataPredictFinal.Lab4.Prelab && state.dataPredictFinal.Lab4.Inlab) {
            let dataSend = {
                task_type: "predictFinal",
                data: [
                    state.dataPredictFinal.Lab1.Prelab,
                    state.dataPredictFinal.Lab1.Inlab,
                    state.dataPredictFinal.Lab2.Prelab,
                    state.dataPredictFinal.Lab2.Inlab,
                    state.dataPredictFinal.Lab3.Prelab,
                    state.dataPredictFinal.Lab3.Inlab,
                    state.dataPredictFinal.Lab4.Prelab,
                    state.dataPredictFinal.Lab4.Inlab
                ]
            };
            fetch('http://localhost:8000/api/inlab/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataSend)
            })
                .then(response => response.json())
                .then(data => {
                    dispath(actions.setPredictedValueFinal(parseInt(data)))
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            toast.error("Bạn phải nhập đầy đủ thông tin!")
        }
    }

    const handleAnalysis = () => {
        if (state.dataPredictFinal &&
            state.dataPredictFinal.Lab1 && state.dataPredictFinal.Lab1.Prelab && state.dataPredictFinal.Lab1.Inlab &&
            state.dataPredictFinal.Lab2 && state.dataPredictFinal.Lab2.Prelab && state.dataPredictFinal.Lab2.Inlab &&
            state.dataPredictFinal.Lab3 && state.dataPredictFinal.Lab3.Prelab && state.dataPredictFinal.Lab3.Inlab &&
            state.dataPredictFinal.Lab4 && state.dataPredictFinal.Lab4.Prelab && state.dataPredictFinal.Lab4.Inlab) {
            let dataSend = {
                task_type: "analysisFinal",
                data: []
            };
            setIsChart(!isChart)
            fetch('http://localhost:8000/api/inlab/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataSend)
            })
                .then(response => response.json())
                .then(data => {
                    dispath(actions.setAnalysisValueFinal(data.dataAll))
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            toast.error("Bạn phải nhập đầy đủ thông tin!")
        }
    }

    return (
        <div className={clsx('container-fluid', style.root)}>
            <Header />
            <AnimatePresence mode="wait">
                <motion.div
                    key="predict-final"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className={style.body}>
                        <h1 className={clsx(style.title, 'text-center', 'align-content-center')}>
                            Dự đoán điểm cuối cùng
                        </h1>
                        <div className="row mt-4">
                            <div className={clsx(isChart ? "col-lg-6" : "col-lg-12")}>
                                <div className="row">
                                    <div className={clsx(isChart ? 'col-lg-12' : 'col-lg-6')}><InputGroupFinal /></div>
                                    <div className={clsx(isChart ? 'col-lg-12' : 'col-lg-6')}><InputGroupFinal index={2} /></div>
                                    <div className={clsx(isChart ? 'col-lg-12' : 'col-lg-6')}><InputGroupFinal index={3} /></div>
                                    <div className={clsx(isChart ? 'col-lg-12' : 'col-lg-6')}><InputGroupFinal index={4} /></div>
                                </div>
                                <div className={clsx('row', style.predictText)}>
                                    <PredictTextFinalScore />
                                </div>
                                <div className="row mb-4 mt-2">
                                    <div className="col-6 mt-2 text-center">
                                        <button
                                            className={clsx(style.btnAnalysis, "btn btn-primary ml-2")}
                                            onClick={handleAnalysis}
                                        >
                                            <FontAwesomeIcon icon={faMagnifyingGlassChart} />&nbsp;Phân tích
                                        </button>
                                    </div>
                                    <div className="col-6 mt-2 text-center">
                                        <button
                                            className={clsx(style.btnPredict, "btn btn-primary ml-lg-8")}
                                            onClick={handlePredict}
                                        >
                                            <FontAwesomeIcon icon={faCircleQuestion} />&nbsp;Dự đoán
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={clsx("col-lg-6", style.borderChart, isChart && 'd-block')}>
                                <div className="row">
                                    <div className={clsx(style.chart, 'col-12')}>
                                        <Bar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.footerTemp}></div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <Footer />
        </div>
    )
}

export default PredictFinalScore;
