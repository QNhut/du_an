import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';
import style from './Predictpage.module.css'
import clsx from 'clsx';

function PredictPage() {

    const components = [
        { name: Header, className: style.header },
        { name: Body, className: style.body },
        { name: Footer, className: style.footer }
    ];

    return (
        <div className={style.root}>
            {components.map((item, index) => {
                const Component = item.name
                return (
                    <div key={index} className={clsx(item.className, "container-fluid")}>
                        <Component />
                    </div>
                )
            })}
        </div>
    )
}

export default PredictPage