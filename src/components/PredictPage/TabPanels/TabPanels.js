import { useState } from "react";

import style from './tab-panel.module.css';
import clsx from "clsx";
import Lab1 from "../LabItems/Lab1";
import Lab2 from "../LabItems/Lab2";
import Lab3 from "../LabItems/Lab3";
import Lab4 from "../LabItems/Lab4";
import PredictionText from "../PredictionText/PredictionText";


function TabPanels({activeTabLeft}) {

  const [dataPredict, setDataPredict] = useState([])
  const [activeTab, setActiveTab] = useState(0);
  const [reset, setReset] = useState(false)

  const handleData = (newData) => {
    setDataPredict(prevData => {
      const existingIndex = prevData.findIndex(item => item.nameObject === newData.nameObject);

      if (existingIndex !== -1) {
        const updatedData = [...prevData];
        updatedData[existingIndex] = newData;
        return updatedData;
      } else {
        return [...prevData, newData];
      }
    });
  };

  const handlePredict = (e) => {
    const inputs = document.querySelectorAll('input[required]');
    let flag = 1
    for (var i = 0; i< inputs.length ; i++) {
      if(inputs[i].value === "") {
        console.log(inputs[i].value);
        
        flag = 0
        break
      }
    }
    if(flag === 0) {
      alert("Bạn phải nhập đầy đủ thông tin và không có trường nào là chữ")
    }
    else {
      console.log(dataPredict);
    }
  }

  const handleReset = () => {
    setReset(true)
    setDataPredict([])
  }

  const tabs = [
    {
      id: 'inlab1',
      text: 'Dự đoán Inlab1',
      content: <Lab1 onDataPredictChange={handleData} onReset = {reset} setReset={setReset}/>
    },
    {
      id: 'inlab2',
      text: 'Dự đoán Inlab2',
      content: <Lab2 onDataPredictChange={handleData} onReset = {reset} setReset={setReset}/>
    },
    {
      id: 'inlab3',
      text: 'Dự đoán Inlab3',
      content: <Lab3 onDataPredictChange={handleData} onReset = {reset} setReset={setReset}/>
    },
    {
      id: 'inlab4',
      text: 'Dự đoán Inlab4',
      content: <Lab4 onDataPredictChange={handleData} onReset = {reset} setReset={setReset}/>
    }
  ]

  return (
    <>
      <div 
        className={clsx(
          'tab-pane',
          'fade',
          'ml-md-2',
          activeTabLeft === 'tab1'&& 'show active')} 
        id="tab1"
      >
        <h1 className={clsx(
          style.title,
          'text-center',
          'justify-content-center')}
        >
          Dự đoán điểm theo từng lab
        </h1>
        <ul className={clsx(
            style.tabContainer,
            "nav nav-tabs"
        )}>
          {tabs.map((tab, index) => (
            <li
              key={index}
          //   className={`${style.tabButton} ${activeTab === index ? style.active : ''}`}
              className={clsx(
                style.tabButton,
                "nav-item mt-2 mr-4",
                activeTab === index && style.active
              )}
              onClick={() => setActiveTab(index)}
            >
              {tab.text}
            </li>
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
              Predict
            </button>
            <button 
              className={clsx(
                style.btnReset,
                "btn btn-danger"
              )}
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
    </div>
      <div className={`tab-pane fade ${activeTabLeft === 'tab2' ? 'show active' : ''}`} id="tab2">
      </div>
      <div className={`tab-pane fade ${activeTabLeft === 'tab3' ? 'show active' : ''}`} id="tab3">
      </div>
    </>
  );
}

export default TabPanels