import Header from './Header/Header';
import Body from './Body/Body';
import style from './predictpage.module.css'

function PredictPage() {
    return (
        <div className={style.root}>
            <div className="container-fluid">
                <Header />
            </div>
            <div className="container">
                <Body />
            </div>
        </div>
    )
}

export default PredictPage