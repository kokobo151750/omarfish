import { useState, useEffect } from 'react';
import '../assets/css/backToTop.css'; 
function BackToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup event listener
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // ใช้การเลื่อนที่นุ่มนวล
        });
    };

    return (
        <>
            {showButton && (
                <button onClick={scrollToTop} className="button show">
 
                </button>
            )}
        </>
    )
}

export default BackToTop
