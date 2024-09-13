import PredictBaseOnQuestion from "../PredictBaseOnQuesstion/PredictBaseOnQuesstion";
import PredictFinalScore from "../PredictFinalScore/PredictFinalScore";
import PredictInlab from "../PredictInlab/PredictInlab";


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