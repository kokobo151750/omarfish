import { Link } from "react-router-dom"; // นำเข้า useLocation
import { useState } from 'react';
import '../assets/css/login.css';

function SignUp() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [phone, setPhone] = useState("");
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertemail, setShowAlertemail] = useState(false);
    const [password, setPassword] = useState("");
    const [minLengthError, setMinLengthError] = useState(false);
    const [letterError, setLetterError] = useState(false);
    const [numberError, setNumberError] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const handlePhoneChange = (e) => {
        let input = e.target.value.replace(/\D/g, ""); // ลบตัวอักษรที่ไม่ใช่ตัวเลขออก
        if (input.length > 3 && input.length <= 6) {
            input = `${input.slice(0, 3)}-${input.slice(3)}`;
        } else if (input.length > 6) {
            input = `${input.slice(0, 3)}-${input.slice(3, 6)}-${input.slice(6, 10)}`;
        }
        setPhone(input);

        // ตั้งค่า error เป็น true หากตัวเลขน้อยกว่า 12 ตัว (นับรวมขีดจะเป็น 12 ตัว)
        setError(input.length < 12); // ตรวจสอบจำนวนตัวเลข ไม่รวมขีด
    };

    const handleChange = (e) => {
        const input = e.target.value;
        if (/^\d*$/.test(input)) { // ตรวจสอบว่ามีแต่ตัวเลขเท่านั้น
            setValue(input);
        }
    };

    const handleInputChange = (e) => {
        setShowAlert(e.target.value.length > 0); // แสดงข้อความแจ้งเตือนเมื่อพิมพ์
    };

    const handleInputChangeEmail = (e) => {
        setShowAlertemail(e.target.value.length > 0); // แสดงข้อความแจ้งเตือนเมื่อพิมพ์
    };

    const handlePasswordChange = (e) => {
        let input = e.target.value;

        // กรองเฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น
        input = input.replace(/[^a-zA-Z0-9]/g, '');
        setPassword(input);

        // ตรวจสอบเงื่อนไขแต่ละข้อ
        const hasMinimumLength = input.length >= 6;
        const hasLetter = /[a-zA-Z]/.test(input);
        const hasNumber = /\d/.test(input);

        setMinLengthError(!hasMinimumLength);
        setLetterError(hasMinimumLength && !hasLetter);
        setNumberError(hasMinimumLength && hasLetter && !hasNumber);
    };


    // ฟังก์ชันกรองให้พิมพ์ได้เฉพาะภาษาอังกฤษและตัวเลข
    const handleKeyDown = (e) => {
        const char = e.key;
        const isEnglishOrNumber = /^[a-zA-Z0-9]$/.test(char);
        if (!isEnglishOrNumber && char !== 'Backspace' && char !== 'Delete') {
            e.preventDefault(); // ป้องกันการพิมพ์ตัวอักษรที่ไม่ใช่ภาษาอังกฤษหรือตัวเลข
        }
    };

    // const handleSaveToDatabase = () => {
    //     const phoneNumberForDatabase = phone.replace(/-/g, ""); // ลบขีดออก
    //     if (phone.replace(/-/g, "").length < 10) {
    //         setError(true);
    //         return;
    //     }
    // };

    return (
        <>
            <section className='float-start w-100 main-header-login main-header-login-custom'>
                <div className="back-to-login">
                    <Link to="/login">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <p>กลับไปยังหน้าเข้าสู่ระบบ</p>
                    </Link>
                </div>

                <section>
                    <div className="card card-custom-login card-custom-signin">
                        <div className="card-body card-body-login">
                            <div className="form-login form-signUp">
                                <div className="logo-text">
                                    <img src="../../public/img/logoOmar.png" alt="imglogo" />
                                    <p>สมัครสมาชิกเว็บไซด์ทัวร์นำเที่ยวตกปลา</p>
                                </div>
                                <div>
                                    <label>ชื่อ :</label>
                                    <span>
                                        <img src="../../public/img/profile.png" alt="img" className="img-user" />
                                    </span> <br />
                                    <input type="text" placeholder="ช่องกรอกชื่อ" />
                                </div>
                                <div>
                                    <label>นามสกุล :</label>
                                    <span>
                                        <img src="../../public/img/signature.png" alt="img" className="img-user" />
                                    </span> <br />
                                    <input type="text" placeholder="ช่องกรอกนามสกุล" />
                                </div>
                                <div className="phone-number">
                                    <label>เบอร์โทร :</label>
                                    <span>
                                        <img src="../../public/img/phone-call.png" alt="img" className="img-user" />
                                    </span> <br />
                                    <input type="text" placeholder="ช่องกรอกเบอร์โทร 0xx-xxx-xxxx" value={phone} onChange={handlePhoneChange} maxLength="12" />
                                    {error && <p><i className="fa-solid fa-caret-down"></i> กรุณากรอกเบอร์โทรให้ครบ 10 หลัก</p>}
                                </div>
                                <div className="email-member">
                                    <label>อีเมล์ (Email) :</label>
                                    {showAlertemail && <p>อีเมล์สำหรับยืนยันการสมัคร</p>}
                                    <span>
                                        <img src="../../public/img/email.png" alt="img" className="img-user" />
                                    </span> <br />
                                    <input type="text" placeholder="กรอกอีเมล์ ...@gmail.com" onChange={handleInputChangeEmail} />
                                </div>
                                <div className="user-member">
                                    {showAlert && <p>รหัสเข้าใช้งาน กรุณาจดจำรหัสของท่านให้ดี</p>}
                                    <label>Username :</label>
                                    <span>
                                        <img src="../../public/img/user.png" alt="img" className="img-user" />
                                    </span> <br />
                                    <input type="text" onChange={handleInputChange} placeholder="ช่องกรอกชื่อผู้ใช้งาน" />
                                </div>
                                <div className="pass-member">
                                    <label>Password :</label>
                                    <p className="pass-warning">รหัสเป็นภาษาอังกฤษกับตัวเลขเท่านั้น</p>
                                    {minLengthError && (
                                        <p>
                                            <i className="fa-solid fa-caret-down"></i> รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัว
                                        </p>
                                    )}
                                    {!minLengthError && letterError && (
                                        <p>
                                            <i className="fa-solid fa-caret-down"></i> รหัสผ่านต้องมีตัวอักษรอย่างน้อย 1 ตัว
                                        </p>
                                    )}
                                    {!minLengthError && !letterError && numberError && (
                                        <p>
                                            <i className="fa-solid fa-caret-down"></i> รหัสผ่านต้องมีตัวเลขอย่างน้อย 1 ตัว
                                        </p>
                                    )}
                                    <span>
                                        <img src="../../public/img/padlock.png" alt="img" className="img-lock" /> <br />
                                        <i
                                            className={`fa-regular ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
                                            onClick={togglePasswordVisibility}>
                                        </i>
                                    </span>
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        placeholder="ช่องกรอกรหัสผ่าน"
                                        onChange={handlePasswordChange}
                                        value={password}
                                        onKeyDown={handleKeyDown} />
                                </div>
                                <div className="pass-email">
                                    <label>รหัสยืนยันอีเมล์ในจดหมาย (Email) :</label>
                                    <p><i className="fa-solid fa-caret-down"></i> รหัสยืนยันไม่ถูกต้อง 1/3</p>
                                    <span>
                                        <img src="../../public/img/key.png" alt="img" className="img-user" />
                                    </span> <br />
                                    <input type="text"
                                        value={value}
                                        onChange={handleChange}
                                        placeholder="รหัสยืนยันอีเมล์ 6 หลัก"
                                        maxLength="6" />
                                    <a href="#">รับรหัสยืนยัน :</a> <span className="text-confirem"><b>ส่งรหัสยืนยันแล้ว</b></span>
                                </div>
                                <div className="input-chack-box">
                                    <input type="checkbox" className="form-check-input" />
                                    <label style={{ fontWeight: 100 }} className="text-input ">ข้าพเจ้ายินยอมให้มีการเก็บรวบรวมและใช้ข้อมูลส่วนบุคคล โดยมีวัตถุประสงค์เพื่อการให้บริการที่ดีขึ้น</label>
                                </div>
                                <div className="btnLogin-and-btnLink btn-signUp">
                                    <button>สมัครสมาชิก</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default SignUp;
