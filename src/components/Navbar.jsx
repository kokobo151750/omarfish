import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom"; // นำเข้า useLocation
import { navbarController } from '../assets/js/navbarController'; // import ฟังก์ชันจาก navbarController.js
import BackToTop from "../components/BackToTop";
import ModalsLine from './ModalsLine';
import ModalsPhone from './ModalsPhone';
import '../assets/css/backToTop.css';
import '../assets/css/navbar.css';
import '../main.css';

function Navbar() {
    const location = useLocation(); // ใช้ useLocation เพื่อตรวจสอบเส้นทางปัจจุบัน
    const [showCard, setShowCard] = useState(false);
    const [showCardProfile, setShowCardProfile] = useState(false);
    const cardRef = useRef(null);
    const cardProfileRef = useRef(null);
    const [notificationCount, setNotificationCount] = useState(1); // กำหนดค่าเริ่มต้นเป็น 0
    const [isBellActive, setIsBellActive] = useState(false);
    const bellRef = useRef(null);

    useEffect(() => {
        const cleanup = navbarController();  // เรียกฟังก์ชัน navbarController เมื่อโหลดคอมโพเนนต์

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            cleanup();  // cleanup เมื่อคอมโพเนนต์ถูก unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // ฟังก์ชันสำหรับตรวจสอบว่าลิงก์ไหนเป็นลิงก์ที่ active
    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    // ฟังก์ชันสำหรับการแสดง/ซ่อน card
    const handleNotificationClick = () => {
        setShowCard(prevShowCard => !prevShowCard);
    };

    const handleProfileClick = () => {
        setShowCardProfile(prevShowCard => !prevShowCard);
    };

    // ฟังก์ชันตรวจสอบการคลิกที่ส่วนอื่นของหน้า
    const handleClickOutside = () => {
        if (
            bellRef.current && !bellRef.current.contains(event.target) &&
            cardRef.current && !cardRef.current.contains(event.target) &&
            cardProfileRef.current && !cardProfileRef.current.contains(event.target)
        ) {
            setShowCard(false);
            setIsBellActive(false);
            setShowCardProfile(false)
        }
    };


    const handleClearNotifications = () => {
        setNotificationCount(0); // เซ็ตค่า notificationCount เป็น 0 เสมอ
        setIsBellActive(!isBellActive); // เปลี่ยนสถานะเมื่อคลิกกระดิ่ง
    };

    return (
        <>
            <BackToTop />
            <header >
                <div className='bg-head no-select'>
                    <div className='nav-container'>
                        <div className="head-contact">
                            <div className="head-text">ติดต่อทางเราได้ที่ &nbsp;<i className="fa-solid fa-play"></i></div>
                            <div className="redain facebook"><a href="https://www.facebook.com/share/9y9Ex3R4U9UvqxSa/" target="_blank"><i className="fa-brands fa-facebook mt-1"></i></a></div>
                            <div className="redain line"><a type="button" data-bs-toggle="modal" data-bs-target="#Line"><i className="fa-brands fa-line mt-1"></i></a></div>
                            <div className="redain phone"><a type="button" data-bs-toggle="modal" data-bs-target="#Phone"><i className="fa-solid fa-phone mt-1"></i></a></div>
                        </div>
                        <div className="head-website">
                            <div>เว็บไซต์ทัวร์นำเที่ยวตกปลา <b>ตันหยงโป</b></div>
                        </div>
                        <div style={{ color: "#5AB1BE", margin: "0px 155px 0px 0px" }}>ร</div>
                    </div>
                </div>
            </header>
            <nav className="nav no-select">
                <div className="nav-container">
                    <Link to="/" className="logo ms-2"><span><img src="../../public/img/logoOmar.png" alt="imglogo" /></span> <b>OMAR <br /></b><b>FISHING CLUB</b></Link>
                    <div className="uil uil-bars navOpenBtn ">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <ul className="nav-links">
                        <Link to="/" className="logo logo-posirion"><span><img src="../../public/img/logoOmar.png" alt="imglogo" className='imglogoSidebar' /></span> <a>OMAR &nbsp;<br /></a><a>FISHING CLUB</a><hr /></Link>
                        <i className="uil uil-times navCloseBtn" ></i>
                        <li className='margintop-list'><Link to="/" className={isActive('/')}><i className="fa-solid fa-house"></i> หน้าหลัก</Link></li>
                        <li><Link to="/booking" className={isActive('/booking')}><i className="fa-solid fa-calendar-plus"></i> จองทัวร์</Link></li>
                        <li className='profile-li'>
                            <Link to="/login" className=''>
                                <div style={{ width: "150px" }}>
                                    <button className={`btn btn-outline-primary ${isActive('/login')}`}>
                                        <b>เข้าสู่ระบบ</b>
                                    </button>
                                </div>
                            </Link>
                            <div className={showCardProfile === true ? "bgClosProfile " : "bgClosProfile d-none"}></div>
                            <div className='profile-nav-bar d-none' onClick={handleProfileClick}>  
                                <div className={showCardProfile === true ? "img-profile opacity" : "img-profile "}>
                                    <img src="https://img.kapook.com/u/2023/Jarosphan/Pet/Etc/92160/h03.jpg" alt="profile" />
                                </div>
                                <div className='text-profile'>
                                    อภิษิฐน์มะสมัน บัสรีมะสมัน
                                </div>
                            </div>
                        </li>
                        <li className="head-notify" onClick={handleNotificationClick}>
                            <div className='d-flex text-notify'>
                                <div className={notificationCount === 0 ? 'd-none' : 'number-notify'} onClick={handleClearNotifications}>
                                    <div>{notificationCount}</div>
                                </div>
                                <div ref={bellRef} className="bell-custom" onClick={handleClearNotifications}>
                                    <i className={isBellActive ? "fa-solid fa-bell" : "fa-regular fa-bell"}></i>
                                </div>
                                <div className={notificationCount === 0 ? ' text-glow-custom align-content-center text-hover' : 'text-glow text-glow-custom align-content-center text-hover'} onClick={handleClearNotifications}>
                                    แจ้งเตือนทัวร์
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* show card notification */}
            <div
                className={`card card-positions ${showCard ? 'show' : ''}`}
                ref={cardRef}
            >
                <i className="fa-solid fa-caret-up"></i>

                <div className="card-body card-body-custom">
                    <h5 className="card-title">
                        <div className='icons-posirtion'><i className="fa-solid fa-circle-info text-dark"></i></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ทัวร์ใหม่เปิดให้จองแล้ว!
                    </h5>
                </div>
                <ul className="list-group list-group-flush list-group-custom">
                    <li className="list-group-item list-group-item-custom d-block">
                        <div className='text-head'>16/9/2567</div>
                        <div className='profile'>
                            <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="img" width={35} />
                            <div className='prpfile-text'>นายเจ๊ะอูหมาก มะสมัน</div>
                        </div>
                        <div className="profile-details">
                            <p><b style={{ color: "black" }}>ห้ามพลาด!</b> ตอนนี้เปิดจองทัวร์ตกปลาสุดมันส์เริ่มจองได้แล้ว วันที่<b> 16 กันยายน 2567 </b>จองก่อนใครได้แล้ววันนี้!</p>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-custom d-block">
                        <div className='text-head'>16/9/2567</div>
                        <div className='profile'>
                            <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="img" width={35} />
                            <div className='prpfile-text'>นายเจ๊ะอูหมาก มะสมัน</div>
                        </div>
                        <div className="profile-details">
                            <p><b style={{ color: "black" }}>ห้ามพลาด!</b> ตอนนี้เปิดจองทัวร์ตกปลาสุดมันส์เริ่มจองได้แล้ว วันที่<b> 16 กันยายน 2567 </b>จองก่อนใครได้แล้ววันนี้!</p>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-custom d-block">
                        <div className='text-head'>16/9/2567</div>
                        <div className='profile'>
                            <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="img" width={35} />
                            <div className='prpfile-text'>นายเจ๊ะอูหมาก มะสมัน</div>
                        </div>
                        <div className="profile-details">
                            <p><b style={{ color: "black" }}>ห้ามพลาด!</b> ตอนนี้เปิดจองทัวร์ตกปลาสุดมันส์เริ่มจองได้แล้ว วันที่<b> 16 กันยายน 2567 </b>จองก่อนใครได้แล้ววันนี้!</p>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-custom d-block">
                        <div className='text-head'>16/9/2567</div>
                        <div className='profile'>
                            <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="img" width={35} />
                            <div className='prpfile-text'>นายเจ๊ะอูหมาก มะสมัน</div>
                        </div>
                        <div className="profile-details">
                            <p><b style={{ color: "black" }}>ห้ามพลาด!</b> ตอนนี้เปิดจองทัวร์ตกปลาสุดมันส์เริ่มจองได้แล้ว วันที่<b> 16 กันยายน 2567 </b>จองก่อนใครได้แล้ววันนี้!</p>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-custom d-block">
                        <div className='text-head'>16/9/2567</div>
                        <div className='profile'>
                            <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="img" width={35} />
                            <div className='prpfile-text'>นายเจ๊ะอูหมาก มะสมัน</div>
                        </div>
                        <div className="profile-details">
                            <p><b style={{ color: "black" }}>ห้ามพลาด!</b> ตอนนี้เปิดจองทัวร์ตกปลาสุดมันส์เริ่มจองได้แล้ว วันที่<b> 16 กันยายน 2567 </b>จองก่อนใครได้แล้ววันนี้!</p>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-custom d-block">
                        <div className='text-head'>16/9/2567</div>
                        <div className='profile'>
                            <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="img" width={35} />
                            <div className='prpfile-text'>นายเจ๊ะอูหมาก มะสมัน</div>
                        </div>
                        <div className="profile-details">
                            <p><b style={{ color: "black" }}>ห้ามพลาด!</b> ตอนนี้เปิดจองทัวร์ตกปลาสุดมันส์เริ่มจองได้แล้ว วันที่<b> 16 กันยายน 2567 </b>จองก่อนใครได้แล้ววันนี้!</p>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-custom d-block">
                        <div className='text-head'>16/9/2567</div>
                        <div className='profile'>
                            <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="img" width={35} />
                            <div className='prpfile-text'>นายเจ๊ะอูหมาก มะสมัน</div>
                        </div>
                        <div className="profile-details">
                            <p><b style={{ color: "black" }}>ห้ามพลาด!</b> ตอนนี้เปิดจองทัวร์ตกปลาสุดมันส์เริ่มจองได้แล้ว วันที่<b> 16 กันยายน 2567 </b>จองก่อนใครได้แล้ววันนี้!</p>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-custom d-block">
                        <div className='text-head'>16/9/2567</div>
                        <div className='profile'>
                            <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="img" width={35} />
                            <div className='prpfile-text'>นายเจ๊ะอูหมาก มะสมัน</div>
                        </div>
                        <div className="profile-details">
                            <p><b style={{ color: "black" }}>ห้ามพลาด!</b> ตอนนี้เปิดจองทัวร์ตกปลาสุดมันส์เริ่มจองได้แล้ว วันที่<b> 16 กันยายน 2567 </b>จองก่อนใครได้แล้ววันนี้!</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* show card profile */}
            <div
                className={`card card-positions card-positions-profile ${showCardProfile ? 'show' : ''}`}
                ref={cardProfileRef}
            >
                <ul className="list-group  list-group-link">
                    <Link to="">
                        <li className=" d-block list-group-item-profile mt-2">
                            <div className='profile-box'>
                                <i className="fa-regular fa-user"></i>
                                <div className='ms-5'>
                                    โปรไฟล์
                                </div>
                            </div>
                        </li>
                    </Link>
                    <Link to="">
                        <li className=" d-block list-group-item-profile">
                            <div className='profile-box'>
                                <i className="fa-regular fa-address-book"></i>
                                <div className='ms-5'>
                                    ประวัติจองทัวร์
                                </div>
                            </div>
                        </li>
                    </Link>
                    <Link to="">
                        <li className=" d-block list-group-item-profile">
                            <div className='profile-box'>
                                <i className="fa-solid fa-right-to-bracket"></i>
                                <div className='ms-5'>
                                    ออกจากระบบ
                                </div>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
            <ModalsLine id="Line" />
            <ModalsPhone id="Phone" />
        </>
    );
}

export default Navbar;
