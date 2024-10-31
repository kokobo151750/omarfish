import { useRef, useState, useEffect } from "react";
import '../assets/css/CardImageReciew.css';
import ModalInageReview from "./ModalInageReview";

function CardImageReview() {
  const cardContainerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true); // Auto-scroll state
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  const [hoverTimeout, setHoverTimeout] = useState(null); // Track timeout for auto-scroll delay


  // Handle mouse and touch events
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - cardContainerRef.current.offsetLeft);
    setScrollLeft(cardContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cardContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    cardContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Auto scroll functionality
  useEffect(() => {
    let scrollInterval;
    if (isAutoScrolling) {
      scrollInterval = setInterval(() => {
        const container = cardContainerRef.current;
        container.scrollLeft += scrollDirection; // Adjust scroll direction

        // Check if it reached the right end
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          setScrollDirection(-1); // Reverse direction to left
        }
        // Check if it reached the left end
        if (container.scrollLeft <= 0) {
          setScrollDirection(1); // Reverse direction to right
        }
      }, 20); // Scroll every 10 milliseconds
    }

    return () => clearInterval(scrollInterval); // Cleanup interval on unmount or stop auto-scroll
  }, [isAutoScrolling, scrollDirection]);

  // Stop auto-scroll on hover
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout); // Clear any existing timeout to avoid multiple timers
    setIsAutoScrolling(false);
  };

  // Restart auto-scroll after 2 seconds when the mouse leaves
  const handleMouseLeaveScroll = () => {
    const timeout = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 1000); // Delay auto-scroll by 2 seconds

    setHoverTimeout(timeout); // Store the timeout so we can clear it if necessary
  };

  return (
    <>
      <div className='card-container'
        ref={cardContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveScroll}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
      >
        <div className="card card-image-review">
          <div className="card-date">
            <p><b>17/9/2567</b></p>
          </div>
          <div className="card-img-head">
            <img src="https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/456709275_3764717703744027_313277227117883726_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=amYp1r8xzHsQ7kNvgG3zf4E&_nc_ht=scontent-bkk1-2.xx&_nc_gid=A-oAcq36a4jqbMW2M0A2JVN&oh=00_AYB1yG94EiYHVszWN7S-BDk5nMb2g-Y6TT_ndQYpOcASrA&oe=670704EA" className="card-img-top" alt="img" />
          </div>
          <div className="card-body card-body-image-review">
            <h5 className="card-title">ทัวร์ทีม : เจ๊ะอูหมาก มะสมัน</h5>
            <p className="card-text">
              <b>วันที่ : </b>17/9/2567 <br />
              <b>จำนวนปลา : </b>50 ตัว <br />
              <b>ประเภททัวร์ : </b>ออกตกปลาเย็นกลับเที่ยง 17:00-12:00 <br />
            </p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#ModalImageReview">ดูเพิ่มเติม</a>
          </div>
        </div>      
      </div>
      <ModalInageReview id="ModalImageReview" />
    </>
  )
}

export default CardImageReview

