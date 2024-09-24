import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

import style from './Footer.module.css'
import clsx from "clsx";

function Footer() {

    const contacts = [
        { name: 'A_Team' },
        { name: 'Địa chỉ: ' },
        { name: 'Điện thoại: ' },
        { name: 'Email: ' },
    ]

    return (
        <div className={clsx("container-fluid", style.root)}>
            <div className={clsx("container-fluid pt-2 text-center")}>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Liên hệ</h3>
                        <div>
                            <ul>
                                {contacts.map((item, index) => {
                                    return (
                                        <li key={index} className={style.contact}>{item.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Thống kê</h3>
                        <div>
                            <ul className={style.statistical}>
                                <li><FontAwesomeIcon icon={faUsers} /> Số lượt  truy cập: ...</li>
                                <li><FontAwesomeIcon icon={faUser} /> Đang online: ... </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;