import { useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import style from './inlab.module.css'
import InputField from '../InputField/InputField';

function InlabItem({ index = 1, onDataChange, onReset, setReset}) {

  const nameObject = `Inlab${index}`;

  const initState = useMemo(() => ({
    nameObject: nameObject,
    maxScore: "", 
    minScore: "",
    attempts: "",
    numberOfQuestion: ""
  }), [nameObject])

  useEffect(() => {
    if(onReset) {
      setData(initState);
      setReset(false)
    }
  }, [onReset, initState, setReset])

  const [data, setData] = useState(initState)
  // console.log(data);

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
      }
      if (field === 'attempts' || field === 'numberOfQuestion') {
        value = parseInt(e.target.value)
        if(value === isNaN)
          value = ""
      }
    }
    
    const newData = {
      ...data,
      [field]: value
    }
    setData(newData);
    onDataChange(newData);
  };

  return (
    <div className={clsx(style.root, 'form-control')}>
      <span>Inlab {index}</span>
      <div className='row'>
        <div className="col-md-6">
          <InputField
            label="Điểm cao nhất"
            id={`Inlab${index}-maxScore`}
            value={data.maxScore}
            placeholder="Nhập điểm cao nhất"
            min={0}
            max={10}
            onChange={handleChange('maxScore')}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Điểm thấp nhất"
            id={`Inlab${index}-minScore`}
            value={data.minScore}
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
              id={`Inlab${index}-attempts`}
              value={data.attempts}
              placeholder="Nhập số lần làm"
              min={1}
              onChange={handleChange('attempts')}
            />
          </div>
          <div className="col-md-6">
            <InputField
              label="Số câu hỏi"
              id={`Inlab${index}-numberOfQuestion`}
              value={data.numberOfQuestion}
              placeholder="Nhập số câu hỏi"
              min={1}
              onChange={handleChange('numberOfQuestion')}
            />
          </div>
        </div>
    </div>
  )
}
export default InlabItem