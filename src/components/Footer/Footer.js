import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

function Footer() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4">
                    <h1>Liên hệ</h1>
                    <div>
                        <ul>
                            <li>hehe</li>
                            <li>hehehe</li>
                        </ul>
                    </div>
                </div>
    
                <div className="col-xl-4">
    
                </div>
    
                <div className="col-xl-4">
                    <h1>Thống kê</h1>
                    <div>
                        <ul>
                            <li><FontAwesomeIcon icon={faUsers} /> Số lượt  truy cập: ...</li>
                            <li><FontAwesomeIcon icon={faUser} /> Đang online: ... </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;