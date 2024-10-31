import { Link } from "react-router-dom"; // นำเข้า useLocation
import { useState } from 'react';
import Navbar from "../components/Navbar"
import '../assets/css/login.css';


function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <>
            <section className='float-start w-100 main-header-login main-header-login-custom'>
                <Navbar />

                <section>
                    <div className="card card-custom-login">
                        <div className="card-body card-body-login">
                            <div className="form-login">
                                <div className="logo-text">
                                    <img src="../../public/img/logoOmar.png" alt="imglogo" />
                                    <p>เข้าสู่ระบบเพื่อเข้าใช้งานระบบจองทัวร์</p>
                                </div>
                                <div>
                                    <label>Username :</label>
                                    <span>
                                        <img src="../../public/img/user.png" alt="img" className="img-user" />
                                    </span> <br />
                                    <input type="text" placeholder="ช่องกรอกชื่อผู้ใช้งาน" />
                                </div>
                                <div>
                                    <label>Password :</label>
                                    <span>
                                        <img src="../../public/img/padlock.png" alt="img" className="img-lock" /> <br />
                                        <i
                                            className={`fa-regular ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
                                            onClick={togglePasswordVisibility}>
                                        </i>
                                    </span>
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        placeholder="ช่องกรอกรหัสผ่าน" />
                                    <label className="text-red-notification">ชื่อผู้ใช้งาน หรือ รหัสผ่านไม่ถูกต้อง</label>
                                </div>
                                <div className="input-chack-box">
                                        <input type="checkbox" className="form-check-input" />
                                        <label style={{ fontWeight: 100 }}>บันทึกรหัสเข้าใช้งาน</label>
                                </div>
                                <div className="btnLogin-and-btnLink">
                                    <button>เข้าสู่ระบบ</button>
                                    <div className="btn-link-button">
                                        <Link to="" className="link">ลืมรหัสผ่าน?</Link> &nbsp;&nbsp;
                                        <div>|</div> &nbsp;&nbsp;
                                        <Link to="/SignUp" className="link">สมัครสมาชิก</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </>
    )
}

export default Login
