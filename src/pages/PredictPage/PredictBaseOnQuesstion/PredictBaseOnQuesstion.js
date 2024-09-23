import clsx from "clsx"
import style from './PredictBaseOnQesstion.module.css'
import { useStore } from "../../../store"
import PredictTextBaseOnQuestion from "./PredictTextBaseOnQuesstion/PredictTextBaseOnQuesstion"
import Footer from "../../../components/Footer/Footer"
import Header from "../../../components/Header/Header"

function PredictBaseOnQuesstion() {

    const [state, dispath] = useStore()

    return (
        <div className={clsx('container-fluid', style.root)}>
            <Header />
            <h1 className={clsx(
                style.title,
                'text-center',
                'align-content-center')}
            >
                Dự đoán điểm đựa trên ngữ cảnh
            </h1>
            <div className="row">
                <div className="col-md-2 align-content-center pl-4">
                    <label htmlFor="inputQuestion" className="mb-2">
                        Nhập câu hỏi
                    </label>
                </div>
                <div className="col-md-8">
                    <textarea
                        id="inputQuestion"
                        className={clsx('form-control')}
                        rows={3}
                        cols={50}
                        placeholder='Nhập chủ đề câu hỏi bạn muốn biết điểm của sinh viên khi kiểm tra có câu hỏi đó'
                        required
                    />
                </div>
                <div className="col-md-2 text-center align-content-center">
                    <button
                        className={clsx(
                            style.btnPredict,
                            "btn btn-success mt-2 mt-md-0"
                        )}
                    // onClick={}
                    >
                        Predict
                    </button>

                </div>
            </div>
            <div className="col-md-12 mt-2">
                <PredictTextBaseOnQuestion />
            </div>
            <Footer/>
        </div>
    )
}

export default PredictBaseOnQuesstion