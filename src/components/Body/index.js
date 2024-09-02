import { useState } from "react";
import clsx from "clsx";

import SidePanel from '../SidePanel';
import TabPanels from '../TabPanels';
import style from './body.module.css'

function Body() {

    const [activeTabLeft, setActiveTabLeft] = useState('tab1');

    return (
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-4 col-12">
          <ul className={clsx("nav nav-tabs text-center justify-content-center")}>
            <SidePanel activeTabLeft={activeTabLeft} setActiveTabLeft={setActiveTabLeft} />
          </ul>
        </div>
        <div className="col-lg-10 col-md-9 col-sm-8">
          <div className={clsx(style.frame, "tab-content")}>
            <TabPanels activeTabLeft={activeTabLeft} />
          </div>
        </div>
      </div>
    )
}

export default Body