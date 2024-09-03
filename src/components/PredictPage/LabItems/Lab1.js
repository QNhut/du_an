import PrelabItem from "../PrelabItem/PrelabItem";

function Lab1({ onDataPredictChange, onReset , setReset }) {

  const handleDataChange = (newData) => {
    onDataPredictChange(newData);
  };

  return (
    <PrelabItem onDataChange={handleDataChange} onReset={onReset} setReset = {setReset}/>
  )
}
export default Lab1