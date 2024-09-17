import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import style from './PredictInlab.module.css';
import Lab from './LabItems/Lab';
import PredictionText from './PredictionText/PredictionText';
import { useStore, actions } from '../../../store';

function PredictInlab() {
    const [state, dispatch] = useStore();
    const [activeTab, setActiveTab] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    const handlePredict = () => {
        const inputs = document.querySelectorAll('input[name="predictInlab"]');

        for (let i = 0; i < inputs.length; i++) {
            var value = parseInt(inputs[i].value.trim())
            var field = inputs[i].id.split("-").slice(1)
            if (isNaN(value)) {
                inputs[i].focus()
                inputs[i].select()
                toast.error("Bạn phải nhập đầy đủ thông tin")
                return;
            }
            switch (field[0]) {
                case 'maxScore':
                    var maxScoreTmp = inputs[i].value
                    if (value < 0 || value > 10) {
                        inputs[i].focus()
                        inputs[i].select()
                        toast.error("Điểm cao nhất chỉ nhận giá trị từ 0 đến 10")
                        return;
                    }
                    break;

                case 'minScore':
                    // console.log(maxScoreTmp);

                    if (value < 0 || value > 10) {
                        inputs[i].focus()
                        inputs[i].select()
                        toast.error("Điểm thấp nhất chỉ nhận giá trị từ 0 đến 10")
                        return;
                    }

                    if (value > maxScoreTmp) {
                        inputs[i].focus()
                        inputs[i].select()
                        toast.error("Điểm thấp nhất phải bé hơn hoặc bằng điểm cao nhất")
                        return;
                    }
                    break;

                case 'attempts':
                    if (value <= 0) {
                        inputs[i].focus()
                        inputs[i].select()
                        toast.error("Số lần làm bài phải lớn hơn 0")
                        return;
                    }
                    break;

                case 'numberOfQuestion':
                    if (value <= 0) {
                        inputs[i].focus()
                        inputs[i].select()
                        toast.error("Số câu hỏi phải lớn hơn 0")
                        return;
                    }
                    break;

                default:
                    throw new Error("Không tồn tại input này");
            }
        }
        const dataSend = {
            task_type: 'predictInlab',
            data: state.dataPredict,
        };
        // console.log(dataSend);

        fetch('http://localhost:8000/api/inlab/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataSend),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(actions.setPredictedValue(data));
            })
            .catch(error => console.error('Error:', error));
    };

    const handleReset = () => {
        dispatch(actions.setReset(true));
        dispatch(actions.setDataPredict('clear'));
        dispatch(actions.setPredictedValue(''));
    };

    const tabs = [
        { id: 'inlab1', text: 'Dự đoán Inlab1', content: <Lab /> },
        { id: 'inlab2', text: 'Dự đoán Inlab2', content: <Lab index={2} /> },
        { id: 'inlab3', text: 'Dự đoán Inlab3', content: <Lab index={3} /> },
        { id: 'inlab4', text: 'Dự đoán Inlab4', content: <Lab index={4} /> },
    ];

    // Tạo hiệu ứng khi activeTab thay đổi
    useEffect(() => {
        setFadeIn(false);
        const timer = setTimeout(() => setFadeIn(true), 300);
        return () => clearTimeout(timer);
    }, [activeTab]);

    return (
        <div
            className={clsx(
                'tab-pane',
                'fade',
                style.frameTab,
                state.activeTabLeft === 'tab1' && 'show active'
            )}
            id="tab1"
        >
            <h2 className={clsx(style.title, 'text-center', 'align-content-center')}>
                Dự đoán điểm theo từng lab
            </h2>

            <ul className={clsx(style.tabContainer, 'nav nav-tabs row', style.frameButton)}>
                {tabs.map((tab, index) => (
                    <div className={clsx('col-xl-2 col-lg-3 col-md-6', style.tab)} key={index}>
                        <li
                            className={clsx(
                                index === 0 && style.tabButton1,
                                index === 1 && style.tabButton2,
                                index === 2 && style.tabButton3,
                                index === 3 && style.tabButton4,
                                'nav-item mt-2',
                                style.tabButton,
                                activeTab === index && style.active
                            )}
                            onClick={() => {
                                handleReset();
                                setActiveTab(index);
                            }}
                        >
                            {tab.text}
                        </li>
                    </div>
                ))}
            </ul>

            <div className={clsx(style.tabContent, fadeIn && style.active)}>
                {tabs[activeTab].content}

                <PredictionText />

                <div className={clsx(style.interactionArea, 'row d-flex justify-content-center mb-lg-2')}>
                    <button
                        className={clsx(style.btnPredict, 'btn btn-success mx-2')}
                        onClick={handlePredict}
                    >
                        <FontAwesomeIcon icon={faCircleQuestion} />&nbsp;Dự đoán
                    </button>
                    <button
                        className={clsx(style.btnReset, 'btn btn-danger mx-2')}
                        onClick={handleReset}
                    >
                        <FontAwesomeIcon icon={faRotateLeft} />&nbsp;Xóa trắng
                    </button>
                </div>
            </div>
            <div className={style.footerTemp}></div>
        </div>
    );
}

export default PredictInlab;
