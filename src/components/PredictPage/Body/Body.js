import clsx from "clsx";

import SidePanel from '../SidePanel/SidePanel';
import TabPanels from '../TabPanels/TabPanels';
import style from './Body.module.css'

function Body() {

    return (
      <div className={clsx('row', style.root)}>
        <div className="col-lg-1">
          <ul className={clsx("nav")}>
            <SidePanel/>
          </ul>
        </div>
        <div className="col-lg-11 pl-0">
          <div className={clsx("tab-content")}>
            <TabPanels/>
          </div>
        </div>
      </div>
    )
}

export default Body