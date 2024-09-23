import clsx from "clsx";

import style from './Body.module.css'
import PredictInlab from '../../pages/PredictPage/PredictInlab/PredictInlab'
import PredictFinalScore from '../../pages/PredictPage/PredictFinalScore/PredictFinalScore'
import PredictBaseOnQuestion from '../../pages/PredictPage/PredictBaseOnQuesstion/PredictBaseOnQuesstion'

function Body() {

  return (
    <div className={clsx('row', style.root)}>
      <div className="col-lg-12 pl-0">
      </div>
    </div>
  )
}

export default Body