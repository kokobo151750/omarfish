import { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import '../assets/css/vidioYouTub.css';

const VidioYoutube = (props2) => {
    const playerRef = useRef(null); // สร้าง ref สำหรับ YouTube player
    const [isPlaying] = useState(false);

    // ตัวเลือกสำหรับการตั้งค่าวิดีโอ (ปรับได้ตามต้องการ)
    const opts = {
        playerVars: {
            autoplay: isPlaying ? 1 : 0, // ตั้งค่า autoplay ตามสถานะการเล่น
        },
    };

    // ฟังก์ชันเพื่อหยุดวิดีโอ
    const stopVideo = () => {
        if (playerRef.current) {
            playerRef.current.internalPlayer.pauseVideo(); // หยุดวิดีโอ
        }
    };

    // ตรวจจับการคลิกนอก modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            const modal = document.getElementById(props2.id);

            if (modal && !modal.contains(event.target)) {
                stopVideo(); // หยุดวิดีโอเมื่อคลิกนอก modal
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [props2.id]);

    return (
        <>
            <div className="modal fade " id={props2.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={stopVideo}>
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-cusrom">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">วิดีโอทริปทัวน์นำเที่ยวตกปลา (ตันหยงโป)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="">
                            <div className="responsive-video">
                                <YouTube
                                    ref={playerRef} // ใช้ ref ใน YouTube component
                                    videoId="uTlFFZP4RuY"
                                    opts={opts}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VidioYoutube;
