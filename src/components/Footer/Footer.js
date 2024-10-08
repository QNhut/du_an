import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

import style from './Footer.module.css'
import clsx from "clsx";
import { useEffect } from "react";
import { actions, useStore } from "../../store";

function Footer() {

    const [state, dispatch] = useStore()

    const contacts = [
        { name: 'A_Team' },
        { name: 'Địa chỉ: ', value: "Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh" },
        { name: 'Điện thoại: ', value: "0328546227" },
        { name: 'Email: ', value: "22642481.trong@student.iuh.edu.vn" },
    ]

    useEffect(() => {
        fetch('http://localhost:8000/api/analytics/', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                
                dispatch(actions.setAccess(data))
            })
            .catch(error => console.log(error)
            )
    }, [])

    return (
        <div className={clsx("container-fluid", style.root)}>
            <div className={clsx("container-fluid pt-2 text-center")}>
                <div className="row">
                    <div className="col-md-7">
                        <h3>Liên hệ</h3>
                        <div>
                            <ul>
                                {contacts.map((item, index) => {
                                    return ((item.name === "A_Team" &&
                                        <li key={index} className={clsx(style.contact)}><b>{item.name}{item.value}</b></li>
                                    ) || <li key={index} className={style.contact}>{item.name}{item.value}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h3>Thống kê</h3>
                        <div>
                            <ul className={style.statistical}>
                                <li><FontAwesomeIcon icon={faUsers} /> Số lượt  truy cập: {state.access.analytics_data[0].event_count}</li>
                                <li><FontAwesomeIcon icon={faUser} /> Đang online: {state.access.analytics_data[0].active_users} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;