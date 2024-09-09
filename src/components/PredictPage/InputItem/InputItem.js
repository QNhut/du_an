import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';

import { useStore, actions } from '../../../store';
import style from './inputitem.module.css'
import InputField from '../InputField/InputField';

function InputItem({ index = 1, lab}) {

  const nameObject = `${lab}${index}`;

  const [state, dispath] = useStore()

  const initData = useMemo(() => ({
    nameObject: nameObject,
    maxScore: "", 
    minScore: "",
    attempts: "",
    numberOfQuestion: ""
  }), [nameObject])

  const [inputData, setInputData] = useState(initData)

  useEffect(() => {
    if(state.reset) {
      setInputData(initData)
      dispath(actions.setReset(false))
    }
  }, [state.reset, initData, dispath])

  const handleChange = (field) => (e) => {
    var value
    if(e.target.value.trim() === "") {
      value = ""
    }
    else {
      if (field === 'maxScore' || field === 'minScore') {
        value = parseFloat(e.target.value)
        if(value === isNaN)
          value = ""
        if(value >= 10) {
          value = 10
        }
        if(value < 0) {
          value = 0
        }
      }
      if (field === 'attempts' || field === 'numberOfQuestion') {
        value = parseInt(e.target.value)
        if(value === isNaN)
          value = ""
        if(value < 1) {
          value = 1
        }
      }
    }
    
    const newData = {
      ...inputData,
      [field]: value
    }
    setInputData(newData)
    dispath(actions.setDataPredict(newData))
  };

  return (
    <div className={clsx(style.root, 'form-control')}>
      <span>{lab}{index}</span>
      <div className='row'>
        <div className="col-md-6">
          <InputField
            label="Điểm cao nhất"
            id={`${lab}${index}-maxScore`}
            value={inputData.maxScore}
            placeholder="Nhập điểm cao nhất"
            min={0}
            max={10}
            onChange={handleChange('maxScore')}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Điểm thấp nhất"
            id={`${lab}${index}-minScore`}
            value={inputData.minScore}
            placeholder="Nhập điểm thấp nhất"
            min={0}
            max={10}
            onChange={handleChange('minScore')}
          />
        </div>
      </div>
        <div className="row mt-sm-4">
          <div className="col-md-6">
            <InputField
              label="Số lần làm"
              id={`${lab}${index}-attempts`}
              value={inputData.attempts}
              placeholder="Nhập số lần làm"
              min={1}
              onChange={handleChange('attempts')}
            />
          </div>
          <div className="col-md-6">
            <InputField
              label="Số câu hỏi"
              id={`${lab}${index}-numberOfQuestion`}
              value={inputData.numberOfQuestion}
              placeholder="Nhập số câu hỏi"
              min={1}
              onChange={handleChange('numberOfQuestion')}
            />
          </div>
        </div>
    </div>
  )
}
export default InputItem