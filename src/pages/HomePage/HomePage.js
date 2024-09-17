import { Link } from "react-router-dom"
import style from './HomePage.module.scss'
import clsx from 'clsx'

function HomePage() {

    const tabs = [
        {
            id: 'tab1',
            text: 'Dự đoán điểm Inlab theo Prelab',
        },
        {
            id: 'tab2',
            text: 'Dự đoán điểm dựa trên ngữ cảnh',
        },
        {
            id: 'tab3',
            text: 'Dự đoán điểm cuối cùng',
        }
    ]

    return (
        <div className={style.root}>
            <div className={style.stars1}></div>
            <div className={style.stars2}></div>
            <div className={style.stars3}></div>
            <div className='row'>
                <div
                    className={clsx(style.title, 'col-lg-12')}
                >
                    <span>
                        HỆ THỐNG DỰ ĐOÁN ĐIỂM SINH VIÊN
                    </span>
                </div>
                {tabs.map((item, index) => {
                    return (
                        <div className={clsx('col-lg-4 mt-4', style.frameButton)} key={index}>
                            <Link
                                className={clsx(style.button, 'btn', style[`button${index + 1}`])}
                                to = {`/predict-page#tab${index+1}`}
                            >
                                {item.text}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default HomePage