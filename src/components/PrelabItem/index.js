import { useState } from 'react'
import style from './inlab.module.css'

function PrelabItem({ index = 1}) {

  const initState = {
    maxScore: '', 
    minScore: '',
    attempts: '',
    numberOfQuestion: ''
  }

  const [data, setData] = useState(initState)
  console.log(data);
  
  return (
    <div className={style.root}>
      <span>Prelab {index}</span>
      <div className={style.wrapper}>
        <div className={style.controlPanel}>
          <label>Điểm cao nhất</label>
          <input
            type='number'
            placeholder="Nhập điểm cao nhất"
            value={data.maxScore}
            min={0}
            max={10}
            onChange={e => {
//Thêm đoạn xử lí khi người dùng nhập sai input
              setData({
                ...data,
                maxScore: e.target.value})
            }}
          />
        </div>
        <div className={style.controlPanel}>
          <label>Điểm thấp nhất</label>
          <input 
            type='number'
            placeholder="Nhập điểm thấp nhất"
            value={data.minScore}
            min={0}
            max={10}
            onChange={e => {
              //Thêm đoạn xử lí khi người dùng nhập sai input
              setData({
                ...data, 
                minScore: e.target.value})
            }}
          />
        </div>
        <div className={style.controlPanel}>
          <label>Số lần làm</label>
          <input
            type='number'
            placeholder="Nhập số lần làm"
            value={data.attempts}
            min={1}
            onChange={e => {
              //Thêm đoạn xử lí khi người dùng nhập sai input
              setData({
                ...data,
                attempts: e.target.value})
            }}
          />
        </div>
        <div className={style.controlPanel}>
          <label>Số câu hỏi</label>
          <input
          type='number'
          placeholder="Nhập số câu hỏi"
          value={data.numberOfQuestion}
          min={1}
          onChange={e => {
            //Thêm đoạn xử lí khi người dùng nhập sai input
            setData({
              ...data,
              numberOfQuestion: e.target.value})
          }}
          />
        </div>
      </div>
    </div>
  )
}
export default PrelabItem