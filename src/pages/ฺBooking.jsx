import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import '../assets/css/cardTable.css';

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';  // นำเข้า CSS ที่ถูกต้อง
import 'datatables.net';  // นำเข้า DataTables
import "datatables.net-bs5";
import "datatables.net-buttons-bs5";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';


function Booking() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    // จำลองข้อมูลที่ดึงมาจากฐานข้อมูล
    const [data] = useState([
        { date: '20/10/67', name: 'Internet Explorer 4.0 Lorem ipsum dolor sit amet. ', status: 'ปิด' },
        { date: '22/10/67', name: 'Internet Explorer 5.0 Loret Explorer 5.0 Loreet Explorer 5.0 Loreem ipsumr sปุ่มจองทัวร์it am', status: 'เปิด' },
        { date: '24/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'ปิด' },
        { date: '26/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'ปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
        { date: '28/10/67', name: 'Internet Explorer 5.0 Lorem ipsum dolor sit amet.', status: 'เปิด' },
    ]);

    useEffect(() => {
        $(document).ready(function () {
            const table = $('#example2').DataTable({
                responsive: true,
                language: {
                    lengthMenu: "แสดง&nbsp _MENU_รายการต่อหน้า",
                    search: "ค้นหาทัวร์ที่ต้องการจอง :",
                    searchPlaceholder: "พิมพ์ \"เปิด\" เพื่อค้นหาทัวร์",
                    info: "แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ",
                    paginate: {
                        next: "ถัดไป",
                        previous: "ก่อนหน้า"
                    },
                    infoFiltered: "(กรองจากทั้งหมด _MAX_ รายการ)",
                    infoEmpty: "ไม่มีข้อมูลที่จะแสดง",
                    zeroRecords: "ไม่พบข้อมูลที่ค้นหา",
                },
                pagingType: "simple_numbers",
            }).buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');

            return () => {
                table.destroy(true);
            };
        });

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        const interval = setInterval(() => {
            const now = new Date();

            // Format date
            const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'Asia/Bangkok' };
            const formattedDate = now.toLocaleDateString('th-TH', dateOptions);

            // Format time
            const timeOptions = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Bangkok' };
            const formattedTime = now.toLocaleTimeString('th-TH', timeOptions);

            setDate(formattedDate);
            setTime(formattedTime);
        }, 1000); // Update every second

        // Cleanup event listener เมื่อ component ถูกทำลาย
        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(interval);
        };
    }, []);

    const boxStyle = {
        width: windowWidth < 510 ? '140px' : '100%', // ถ้าจอเล็กกว่า 460px ให้ width เป็น 100px, ถ้าใหญ่กว่านั้นให้เป็น 200px
    };
    const boxStyleBtn = {
        width: windowWidth < 510 ? '140px' : '140px', // ถ้าจอเล็กกว่า 460px ให้ width เป็น 100px, ถ้าใหญ่กว่านั้นให้เป็น 200px
    };
    const boxStyledate = {
        width: windowWidth < 510 ? '75px' : '75px', // ถ้าจอเล็กกว่า 460px ให้ width เป็น 100px, ถ้าใหญ่กว่านั้นให้เป็น 200px
    };

    return (
        <>
            <main>
                <Navbar />
                <section className="contant-dataTable">
                    <div className="container-fluid">
                        <div className="card card-customTable">
                            <div className="card-header">
                                <h3 className="card-title card-title-custom-text  mt-2">ข้อมูลตารางจองคิวทัวร์นำเที่ยวตกปลา&nbsp;
                                    <i className="fa-regular fa-calendar-plus"></i>
                                </h3>
                                <div className="box-btn-detals">
                                    <div>
                                        <button className="btn-read-manual" type="button" data-bs-toggle="modal" data-bs-target="#rateTourPrice">เรทราคาทัวร์ <i className="fa-solid fa-magnifying-glass-dollar"></i></button>
                                    </div>
                                    <div>
                                        <button className="btn-read-manual" type="button" data-bs-toggle="modal" data-bs-target="#readManual">คู่มือการใช้งาน <i className="fa-solid fa-file-lines"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body card-body-customs">
                                <div className='date-current'>วันนี้ <b>{date}</b> | เวลา <b>{time}</b></div>
                                <table id="example2" className="table table-bordered table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th style={boxStyledate}>วันที่</th>
                                            <th><div style={boxStyle}>รายละเอียดทัวร์</div></th>
                                            <th>สถานะ</th>
                                            <th><div style={boxStyleBtn}></div>ปุ่มจองทัวร์</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {data.map((item) => (
                                            <tr key={item.date}>
                                                <td style={{ textAlign: "center" }}>
                                                    {item.date}
                                                </td>
                                                <td >
                                                    <div>
                                                        <div>{item.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={`card-status ${item.status === 'เปิด' ? 'card-status_blue' : 'card-status_red'}`}>
                                                        <div>{item.status}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {item.status === 'เปิด' && (
                                                        <button className="btn-bookingTour" type="submit">
                                                            คลิกจองคิว <i className="fa-solid fa-user-plus ms-2"></i>
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="line-website" />
                <Footer />
            </main>

            <div className="modal fade modal-customs modal-custom-manual" id="readManual" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"><i className="fa-solid fa-file-lines"></i> <b>คู่มือการใช้งานระบบจองทัวร์</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='center-card-body'>
                                <div className='text-details-manual'>
                                    <b className='mt-2'>คำอธิบาย และวิธีการใช้งาน</b>
                                </div>
                                <hr />
                                <div className="text-detals-body">
                                    <p><b>1.</b> กรุณา<b>เข้าสู่ระบบ</b>เว็บไซต์ทัวร์นำเที่ยวตกปลาก่อนการใช้งานระบบจองทัวร์</p><hr />
                                    <p><b>2.</b> หากท่าน<b>ยังไม่มีบัญชี</b>ผู้ใช้ ท่านสามารถคลิกปุ่มไปยังหน้าเข้าสู่ระบบแล้วเลือกสมัครสมาชิก <br /><Link to="#">เริ่มสมัครสมาชิก</Link> </p><hr />
                                    <p><b>3.</b> หลังจาก<b>เข้าสู่ระบบเป็นที่เรียบร้อย</b> ท่านสามารถเริ่มทำการจองทัวร์โดยการเลือกทัวร์ แล้ว<span>เลื่อนตารางไปทางซ้ายจากนั้น</span>คลิกปุ่มจองทัวร์ได้ทันที </p><hr />
                                    <p><b>4.</b> ในขั้นตอนการจอง ท่านจะต้องกรอก<b>จำนวนผู้ร่วมทริป</b>และ<b>โอนเงินมัดจำ</b> เพื่อยืนยันสิทธิ์การจองของท่าน </p><hr />
                                    <p><b>5.</b> หลังจากการจอง<b>เสร็จสมบูรณ์</b> เราจะติดต่อท่านภายใน 2-3 วัน</p><hr />
                                    <p className="text-video-manual"><b>ลิ่งคริปวีดีโอสอน : </b><a href="">สมัครสมาชิก และจองทัวร์</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal  fade modal-customs modal-custom-cardrateTour" id="rateTourPrice" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content ">
                        <div className="modal-header modal-header-custom-rateTour">
                            <h5 className="modal-title" id="staticBackdropLabel"><i className="fa-solid fa-magnifying-glass-dollar"></i> <b>เรทราคาทัวร์นำเที่ยวตกปลา</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body modal-body-custom-rateTour">
                            <div className='center-card-body'>
                                <div className='text-details-manual'>
                                    <b className='mt-2'>เรทราคาทัวร์ในแต่ละประเภท</b>
                                </div>
                                <hr />
                                <div className="text-detals-body">
                                    <p><b>1. ประเภททัวร์ตกปลาเกาะสาม (ปลากะพงดุ)</b> <br />&nbsp;&nbsp; - ช่วงเช้าถึงเย็น เวลาออก 06:00-17:00 ราคา 2,700 บ. <br />&nbsp;&nbsp; - ช่วงเย็นถึงเที่ยงอีกวัน เวลาออก 17:00-12:00 ราคา 3,200 บ.<br />&nbsp;&nbsp; - หรือออก 2-3 วัน ราคาจะ + เพิ่ม <br /><b>ค่ามัดจำในการจองทัวร์ 500 บ.</b> <hr /></p>
                                    <p><b>2. ประเภททัวร์ตกปลาเกาะโกย (ปลาอังจอ-เก๋าดุ)</b> <br />&nbsp;&nbsp; - ช่วงเช้าถึงเย็น เวลาออก 06:00-17:00 ราคา 3,000 บ. <br />&nbsp;&nbsp; - ช่วงเย็นถึงเที่ยงอีกวัน เวลาออก 17:00-12:00 ราคา 3,500 บ.<br />&nbsp;&nbsp; - หรือออก 2-3 วัน ราคาจะ + เพิ่ม <br /><b>ค่ามัดจำในการจองทัวร์ 500 บ.</b><hr /></p>
                                    <p><b>3. ประเภททัวร์ตกปลาเกาะตะรุเตา (ปลาตัวใหญ่น้ำลึก)</b> <br />&nbsp;&nbsp; - ออกประมาณ 2-3 หรือ 3-4 วัน กลับช่วงเย็น ราคา 6,000-9,000 บ. <br /><b>ค่ามัดจำในการจองทัวร์ 1,000 บ. (ต้องแจ้งสอบถามใต๋โดยตรง)</b><hr /> </p>
                                    <p><b>มีทัวร์ประเภทอื่น ๆ ให้เลือกเช่น ตกปลาเกาะอาดัง หรือ ตกปลาเกาะกลาง เป็นต้น ทัวร์เหล่านี้ท่านต้องแจ้งสอบถามใต๋โดยตรง</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking
