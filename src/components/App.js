import style from './app.module.css'

import Header from './Header';
import SidePanel from './SidePanel';
import TabPanels from './TabPanels';

function App() {
  return (
    <div className={style.root}>
      <Header/>
      <div className={style.wrapper}>
        <SidePanel/>
        <div className={style.container}>
          {/* TODO: UPDATE DYNAMIC */}
          <div className={style.typo}>
            <h1>Dự đoán điểm Inlab theo Prelab</h1>
          </div>
          <div>
            <TabPanels />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
