import { useState } from "react";
import PrelabItem from "../PrelabItem";

function Lab1({ onDataPredictChange }) {

  const [dataSend, setDataSend] = useState([])

  const handleDataChange = (newData) => {
    setDataSend(newData);

    onDataPredictChange(newData);
  };

  // useEffect(() => {
  //   console.log(dataSend);
  // }, [dataSend]);

  return (
    <PrelabItem onDataChange={handleDataChange}/>
  )
}
export default Lab1