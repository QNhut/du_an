import Header from './Header/Header';
import Body from './Body/Body';
import style from './Predictpage.module.css'

function PredictPage() {
    return (
        <div className={style.root}>
            <div className="container-fluid">
                <Header />
            </div>
            <div className="container-fluid">
                <Body />
            </div>
        </div>
    )
}

export default PredictPage