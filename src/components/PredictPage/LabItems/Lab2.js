import InlabItem from "../InlabItem/InlabItem";
import PrelabItem from "../PrelabItem/PrelabItem";

function Lab2({ onDataPredictChange, onReset , setReset}) {

  const handleDataChange = (newData) => {
    onDataPredictChange(newData);
  };


  return (
    <>
      <PrelabItem onDataChange={handleDataChange} onReset={onReset} setReset = {setReset}/>
      <InlabItem onDataChange={handleDataChange} onReset={onReset} setReset = {setReset}/>
      <PrelabItem index={2} onDataChange={handleDataChange} onReset={onReset} setReset = {setReset}/>
    </>
  )
}
export default Lab2