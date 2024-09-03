import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer'

function PredictPage() {
    return (
        <>
            <div className="container-fluid">
                <Header />
            </div>
            <div className="container">
                <Body />
            </div>
            <div className="container-fluid">
                <Footer />
            </div>
        </>
    )
}

export default PredictPage