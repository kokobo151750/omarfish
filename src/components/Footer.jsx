import { Link } from "react-router-dom";
import '../assets/css/footer.css';

function Footer() {
    return (
        <>
            {/* contact footer */}
            <section className="footer">
                <div className="footer-row">
                    <div className="footer-col footer-col-logo">
                        <Link to="/" className="logo ms-5"><b>OMAR &nbsp;<i className="fa-solid fa-fish-fins"></i><br /></b><b>FISHING CLUB</b></Link>
                    </div>
                    <div className="footer-col footer-col-contactAll">
                        <h4>รายละเอียดการติดต่อ</h4>
                        <ul className="links">
                            <li><a>เจ้าของทัวร์ : เจ๊ะอูหมาก มะสมัน</a></li>
                            <li><a type="button" data-bs-toggle="modal" data-bs-target="#Phone">เบอร์ติดต่อ :  080-147-5750</a></li>
                            <li><a href="https://www.facebook.com/share/9y9Ex3R4U9UvqxSa/" target="_blank">Facebook : เจ๊ะอูหมาก มะสมัน</a></li>
                            <li><a type="button" data-bs-toggle="modal" data-bs-target="#Line">Line : @omar1891</a></li>
                        </ul>
                    </div>
                    <div className="footer-col footer-col-thank">
                        <h4>ขอขอบคุณทุกท่านที่ใช้บริการ <br />
                            ทัวร์นำเที่ยวตกปลา <br />
                            ของทางเราเป็นอย่างยิ่ง</h4>
                    </div>
                </div>
            </section>
            {/* Domain Website */}
            <section className="DomainWebsite">
                © 2024 Website : www.omarfishing.online
            </section>
        </>
    )
}

export default Footer
