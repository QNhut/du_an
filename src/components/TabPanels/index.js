import { useState } from "react";

import style from './tab-panel.module.css';
import clsx from "clsx";
import Lab1 from "../LabItems/Lab1";
import Lab2 from "../LabItems/Lab2";
import Lab3 from "../LabItems/Lab3";
import Lab4 from "../LabItems/Lab4";
import PredictionText from "../PredictionText";

const tabs = [
  {
    id: 'inlab1',
    text: 'Dự đoán inlab1',
    content: <Lab1/>
  },
  {
    id: 'inlab2',
    text: 'Dự đoán inlab2',
    content: <Lab2/>
  },
  {
    id: 'inlab3',
    text: 'Dự đoán inlab3',
    content: <Lab3/>
  },
  {
    id: 'inlab4',
    text: 'Dự đoán inlab4',
    content: <Lab4/>
  }
]

function TabPanels() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
    <div className={style.tabContainer}>
      {tabs.map((tab, index) => (
        <button
          key={index}
       //   className={`${style.tabButton} ${activeTab === index ? style.active : ''}`}
          className={clsx(
            style.tabButton,
            activeTab === index && style.active
          )}
          onClick={() => setActiveTab(index)}
        >
          {tab.text}
        </button>
      ))}
    </div>
    <div className={style.tabContent}>
      {tabs[activeTab].content}

      <PredictionText />
      {/* BUTTON */}
      <div className={style.interactionArea}>
        <button className={clsx(
          style.btn,
          style.btnPredict,
        )}>
          Predict
        </button>
        <button className={clsx(
          style.btn,
          style.btnReset,
        )}>
          Reset
        </button>
      </div>
    </div>
  </div>
  );
}

export default TabPanels