import { useState } from "react";
import InlabItem from "../InlabItem";
import PrelabItem from "../PrelabItem";

function Lab2({ onDataPredictChange}) {
  
  const [dataSend, setDataSend] = useState([])

  const handleDataChange = (newData) => {
    setDataSend(newData);
    onDataPredictChange(newData);
  };

  // useEffect(() => {
  //   console.log(dataSend);
  // }, [dataSend]);

  return (
    <>
      <PrelabItem onDataChange={handleDataChange}/>
      <InlabItem onDataChange={handleDataChange}/>
      <PrelabItem index={2} onDataChange={handleDataChange}/>
    </>
  )
}
export default Lab2