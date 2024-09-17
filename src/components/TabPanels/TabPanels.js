import PredictBaseOnQuestion from "../../pages/PredictPage/PredictBaseOnQuesstion/PredictBaseOnQuesstion";
import PredictFinalScore from "../../pages/PredictPage/PredictFinalScore/PredictFinalScore";
import PredictInlab from "../../pages/PredictPage/PredictInlab/PredictInlab";


function TabPanels() {



  return (
    <>
      <PredictInlab />
      <PredictFinalScore />
      <PredictBaseOnQuestion />
    </>
  );
}

export default TabPanels