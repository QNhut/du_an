import clsx from "clsx";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRotateLeft } from '@fortawesome/free-solid-svg-icons'

import style from './PredictInlab.module.css';
import Lab from './LabItems/Lab'
import PredictionText from '../PredictInlab/PredictionText/PredictionText';
import { useStore, actions } from "../../../store";

function PredictInlab() {

    const [state, dispath] = useStore()
    const [activeTab, setActiveTab] = useState(0);

    // const handleData = (newData) => {
    //   dispath(actions.setDataPredict(newData))
    // };

    const handlePredict = (e) => {
        const inputs = document.querySelectorAll('input[name="predictInlab"]');
        console.log(inputs);
        let flag = 1
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                flag = 0
                break
            }
        }
        // console.log(flag);
        if (flag === 0) {
            alert("Bạn phải nhập đầy đủ thông tin và không có trường nào là chữ")
        }
        else {
            let dataSend = {
                task_type: "predictInlab",
                data: state.dataPredict
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
                    dispath(actions.setPredictedValue(data))
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    const handleReset = () => {
        dispath(actions.setReset(true))
        dispath(actions.setDataPredict("clear"))
        dispath(actions.setPredictedValue(""))
    }

    const tabs = [
        {
            id: 'inlab1',
            text: 'Dự đoán Inlab1',
            content: <Lab />
        },
        {
            id: 'inlab2',
            text: 'Dự đoán Inlab2',
            content: <Lab index={2} />
        },
        {
            id: 'inlab3',
            text: 'Dự đoán Inlab3',
            content: <Lab index={3} />
        },
        {
            id: 'inlab4',
            text: 'Dự đoán Inlab4',
            content: <Lab index={4} />
        }
    ]

    return (
        <div
            className={clsx(
                'tab-pane',
                'fade',
                style.frameTab,
                state.activeTabLeft === 'tab1' && 'show active')}
            id="tab1"
        >
            <h1 className={clsx(
                style.title,
                'text-center',
                'align-content-center')}
            >
                Dự đoán điểm theo từng lab
            </h1>
            <ul className={clsx(
                style.tabContainer,
                "nav nav-tabs row",
                style.frameButton
            )}>
                {tabs.map((tab, index) => (
                    <div className={clsx('col-lg-3 col-md-6')}>
                        <li
                            key={index}
                            //   className={`${style.tabButton} ${activeTab === index ? style.active : ''}`}
                            className={clsx(
                                index === 0 && style.tabButton1,
                                index === 1 && style.tabButton2,
                                index === 2 && style.tabButton3,
                                index === 3 && style.tabButton4,
                                "nav-item mt-2",
                                style.tabButton,
                                activeTab === index && style.active
                            )}
                            onClick={() => {
                                handleReset()
                                setActiveTab(index)
                            }}
                        >
                            {tab.text}
                        </li>
                    </div>
                ))}
            </ul>
            <div className={style.tabContent}>
                {tabs[activeTab].content}

                <PredictionText />
                {/* BUTTON */}
                <div className={style.interactionArea}>
                    <button
                        className={clsx(
                            style.btnPredict,
                            "btn btn-success"
                        )}
                        onClick={handlePredict}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} /> Predict
                    </button>
                    <button
                        className={clsx(
                            style.btnReset,
                            "btn btn-danger"
                        )}
                        onClick={handleReset}
                    >
                        <FontAwesomeIcon icon={faRotateLeft} /> Reset
                    </button>
                </div>
            </div>
            <div className={style.footerTemp}></div>
        </div>
    )
}

export default PredictInlab