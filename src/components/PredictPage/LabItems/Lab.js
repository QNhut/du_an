import InputItem from "../InputItem/InputItem";

function Lab({ onDataPredictChange, onReset , setReset, index =1 }) {

  const handleDataChange = (newData) => {
    onDataPredictChange(newData);
  };

  const items = []

  for (var i = 1; i <= index; i++) {
    if(i > 1) {
      items.push(<InputItem key={`Inlab${i-1}`} onDataChange={handleDataChange} onReset={onReset} setReset = {setReset} lab={`Inlab`} index={i-1}/>)
    }
    items.push(<InputItem key={`Prelab${i}`} onDataChange={handleDataChange} onReset={onReset} setReset = {setReset} lab={`Prelab`} index={i}/>)
  }

  return (
    <>
      {items}
    </>
  )
}
export default Lab