import InlabItem from "../InlabItem/InlabItem";
import PrelabItem from "../PrelabItem/PrelabItem";

function Lab4({onDataPredictChange, onReset , setReset}) {

  const handleDataChange = (newData) => {
    onDataPredictChange(newData);
  };

  return (
  <>
    <PrelabItem onDataChange={handleDataChange} onReset={onReset} setReset = {setReset}/>
    <InlabItem onDataChange={handleDataChange} onReset={onReset} setReset = {setReset}/>
    <PrelabItem index={2} onDataChange={handleDataChange} onReset={onReset} setReset = {setReset}/>
    <InlabItem index={2} onDataChange={handleDataChange} onReset={onReset} setReset = {setReset}/>
    <PrelabItem index={3} onDataChange={handleDataChange} onReset={onReset} setReset = {setReset}/>
    <InlabItem index={3} onDataChange={handleDataChange} onReset={onReset} setReset = {setReset}/>
    <PrelabItem index={4} onDataChange={handleDataChange} onReset={onReset} setReset = {setReset} />
  </>
  )
}
export default Lab4