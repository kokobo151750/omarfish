import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import VidioYoutube from '../components/VidioYoutube';
import CardImageReview from "../components/CardImageReview";
import CardThemeDeveloper from "../components/CardThemeDeveloper";
import '../assets/css/home.css';
import Footer from "../components/Footer";

function Home() {

    return (
        <>
            {/* Banner Helo */}
            <nav className="home-page">
                <Navbar />
                <div className="container">
                    <div className="details-header">
                        <div className="text-details ">
                            <div className="text-box-center">
                                <div className="text">
                                    <h1 >
                                        <b>
                                            <a></a>บริการทัวร์น<div className="textdisplayaum">ำ</div><div className="textdisplayaum2">า</div>เที่ยว<br />
                                            ตกปลา <span>ต.ตันหยงโป</span>
                                        </b>
                                        <b className="liquid">
                                            <b> ต.ตันหยงโป</b>
                                            <b> ต.ตันหยงโป</b>
                                            <b> ต.ตันหยงโป</b>
                                            <b> ต.ตันหยงโป</b>
                                        </b>
                                    </h1>
                                    <p>สนใจติดต่อ หรือ สมัครสมาชิกกับทางเราได้ที่ปุ่มด้านล่าง</p>
                                    <i className="fa-solid fa-ship"></i>
                                </div>
                                <div className="btn-contact">
                                    <Link to="/SignUp"><button>สมัครสมาชิก</button></Link>
                                    <div className="me-2 ms-2"></div>
                                    <Link to="/booking"><button className="btnredain2">จองทัวร์</button></Link>
                                </div>
                                <div className="contact">
                                    <div className="box ms-0">
                                        <a type="button" data-bs-toggle="modal" data-bs-target="#VidioYoutube">
                                            <div className="play-button-container">
                                                <div className="play-button"></div>
                                                <div className="ring "></div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="box "><a href="https://www.facebook.com/share/9y9Ex3R4U9UvqxSa/" target="_blank"><i className="fa-brands fa-facebook "></i></a></div>
                                    <div className="box "><a type="button" data-bs-toggle="modal" data-bs-target="#Line"><i className="fa-brands fa-line "></i></a></div>
                                    <div className="box "><a type="button" data-bs-toggle="modal" data-bs-target="#Phone"><i className="fa-solid fa-phone "></i></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-details ">
                            <h2>ใต๋นำเที่ยวตกปลา</h2>
                            <div className="img-profile">
                                <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/439935341_7400005310094555_6112154215824836651_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=g4uWO5ZV-WAQ7kNvgFX_F-a&_nc_zt=23&_nc_ht=scontent.fbkk14-1.fna&_nc_gid=AHNfx0v413TJEpKIyhMG5Rj&oh=00_AYDywnjRDjLL_SSu-kwJh0N15TXPa279mtfwuFNGW-Jebg&oe=671D0BDE" alt="img" />
                            </div>
                            <h5>เจ๊ะอูหมาก มะสมัน</h5>
                        </div>
                    </div>
                </div>
                <VidioYoutube id="VidioYoutube" />
            </nav>

            <main>
                <hr className="line-website" />
                {/* card service */}
                <section className="serviceAll ">
                    <h1 className="text-headers text-headers-custom">บริการของทางเรา</h1>
                    <div className="line1">
                        <div className="line2"></div>
                    </div>
                    <div className="container_display_card_developer container-fluid">
                        <div className="card_Developer">
                            <div className="card_Developer_img">
                                <i className="fa-regular fa-address-book"></i>
                            </div>
                            <div className="card_Developer_body">
                                <h6>การติดต่อสื่อสาร</h6>
                                <p>
                                    <b>ติดต่อใต๋ : </b> เจ๊ะอูหมาก มะสมัน <br />
                                    <b>เบอร์โทร : </b> <a href="tel:0801475750" className="phoneNumber">080-147-5750</a> <span className="phoneNumber-custom">080-147-5750</span>
                                </p>
                                <hr />
                                <p>
                                    หากท่านต้องการจองทัวร์ตกปลาติดต่อใต๋ และทีมงานของเราพร้อมให้บริการท่านตลอด 24 ชั่วโมง หากท่านมีข้อสงสัยเกี่ยวกับข้อมูลทัวร์นำเที่ยว สามารถติดต่อสอบถามได้ทุกเมื่อ!
                                </p>
                            </div>
                        </div>
                        <div className="card_Developer">
                            <div className="card_Developer_img">
                                <i className="fa-regular fa-calendar-check"></i>
                            </div>
                            <div className="card_Developer_body">
                                <h6>ประเภททัวร์</h6>
                                <p>
                                    เรามีทัวร์ตกปลาที่หลากหลายประเภทให้ท่านได้เลือกจอง พร้อมให้บริการท่านอย่างเต็มที่
                                </p>
                                <p style={{ textAlign: "start" }}>
                                    <span><b>ทัวร์ที่ 1</b> ออกทัวร์เวลา 06:00-17:00 </span><br />
                                    <span><b>ทัวร์ที่ 2</b> ออกทัวร์เวลา 17:00-12:00 </span><br />
                                    <span><b>ทัวร์ที่ 3</b> ออกทัวร์ตามที่ท่านต้องการ เช่น ออกตกปลาเกาะตะรุเตา (<Link to="/booking">อาจมีให้จองมากกว่านี้</Link>)</span>
                                </p>
                            </div>
                        </div>
                        <div className="card_Developer">
                            <div className="card_Developer_img">
                                <i className="fa-solid fa-camera-retro"></i>
                            </div>
                            <div className="card_Developer_body">
                                <h6>รีวิวทัวร์ตกปลา</h6>
                                <p>
                                    เราจะอัปโหลดรูปภาพของทีมที่ได้ร่วมทัวร์ตกปลากับทางเราทุก 2 วัน ท่านสามารถติดตามชมได้ทางเฟซบุ๊ก หรือ เว็บไซต์ตามความสะดวกของท่าน <b>(ใต๋และผู้ช่วยใต๋ พร้อมช่วยท่านตกปลา เพื่อให้ท่านได้นำปลากลับไปฝากครอบครัวของท่านให้ได้มากที่สุด)</b>    </p>
                            </div>
                        </div>
                        <div className="card_Developer">
                            <div className="card_Developer_img">
                                <i className="fa-solid fa-toolbox"></i>
                            </div>
                            <div className="card_Developer_body">
                                <h6>อุปกรณ์ต่าง ๆ</h6>
                                <p>
                                    ทางเรามีเครื่องมืออำนวยความสะดวกบนเรือ เช่น ห้องน้ำ เตาแก๊ส ที่นอน อื่น ๆ และขอแนะนำให้ท่านเตรียมอุปกรณ์ส่วนตัวเพิ่มเติมมาเองเพื่อความสะดวกสบายที่มากยิ่งขึ้น หรือ หากท่านมีข้อสงสัยเกี่ยวกับอุปกรณ์ที่จำเป็น กรุณาสอบถามทางเราได้ตลอดเวลา
                                </p>
                            </div>
                        </div>
                        <div className="card_Developer">
                            <div className="card_Developer_img">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="card_Developer_body">
                                <h6>สถานที่นัดพบ</h6>
                                <p>
                                    หลังจากท่านจองทัวร์นำเที่ยวตกปลาเรียบร้อย ทางเราจะติดต่อกลับไปยังหมายเลขโทรศัพท์ที่ท่านใช้สมัครสมาชิก เพื่อยืนยันข้อมูลและเตรียมความพร้อมก่อนออกทัวร์ โดยเจ้าหน้าที่จะติดต่อท่านล่วงหน้า 2 วัน ก่อนพบกันที่สะพานสายรุ่งบากันเคย  </p>
                            </div>
                        </div>
                        <div className="card_Developer">
                            <div className="card_Developer_img">
                                <i className="fa-solid fa-database"></i>
                            </div>
                            <div className="card_Developer_body">
                                <h6>บริการข้อมูล</h6>
                                <p>
                                    เว็บไซต์ทัวร์นำเที่ยวตกปลาตันหยงโป มีบริการข้อมูลเกี่ยวกับทัวร์ที่ท่านต้องการ เช่น รายละเอียดการจองรายวัน ข้อมูลการติดต่อ และบริการต่าง ๆ ที่พร้อมให้ความช่วยเหลือแก่ท่าน  </p>
                            </div>
                        </div>

                    </div>
                </section>
                <hr className="line-website" />
                {/* card image remaiew */}
                <section className="reviewTour">
                    <h1 className="text-headers ">รูปภาพรีวิวทีมตกปลา</h1>
                    <div className="line1">
                        <div className="line2"></div>
                    </div>
                    <CardImageReview />
                </section>
                <hr className="line-website" />
                {/* card theme tour */}
                <section className="themeDeveloper">
                    <h1 className="text-headers ">ทีมงานทัวร์นำเที่ยวตกปลา</h1>
                    <div className="line1">
                        <div className="line2"></div>
                    </div>
                    <CardThemeDeveloper />
                </section>
                <hr className="line-website" />
                <Footer />
            </main >
        </>
    )
}

export default Home;




