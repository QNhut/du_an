import { useState, memo } from 'react'
import clsx from 'clsx'
import style from './inlab.module.css'
import InputField from '../InputField';

function PrelabItem({ index = 1 , onDataChange}) {

  const nameObject =  `Prelab${index}`;

  const initState = {
    nameObject: nameObject,
    dataLab : {
    maxScore: '', 
    minScore: '',
    attempts: '',
    numberOfQuestion: ''
  }}

  const [data, setData] = useState(initState)
  // console.log(data);

  const handleChange = (field) => (e) => {
    const newData = {
      ...data,
      dataLab: {
        ...data.dataLab,
        [field]: e.target.value
      }
    }
    setData(newData);
    onDataChange(newData);
  };
  
  return (
    <div className={clsx(style.root, 'form-control')}>
      <span>Prelab {index}</span>
      <div className="row">
        <div className="col-md-6">
          <InputField
            label="Điểm cao nhất"
            id={`Prelab${index}-maxScore`}
            value={data.dataLab.maxScore}
            placeholder="Nhập điểm cao nhất"
            min={0}
            max={10}
            onChange={handleChange('maxScore')}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Điểm thấp nhất"
            id={`Prelab${index}-minScore`}
            value={data.dataLab.minScore}
            placeholder="Nhập điểm thấp nhất"
            min={0}
            max={10}
            onChange={handleChange('minScore')}
          />
        </div>
      </div>
      <div className={clsx('mt-sm-4', 'row')}>
        <div className="col-md-6">
          <InputField
            label="Số lần làm"
            id={`Prelab${index}-attempts`}
            value={data.dataLab.attempts}
            placeholder="Nhập số lần làm"
            min={1}
            onChange={handleChange('attempts')}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Số câu hỏi"
            id={`Prelab${index}-numberOfQuestion`}
            value={data.dataLab.numberOfQuestion}
            placeholder="Nhập số câu hỏi"
            min={1}
            onChange={handleChange('numberOfQuestion')}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(PrelabItem);