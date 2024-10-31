export function navbarController() {
  const nav = document.querySelector(".nav"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn"),
    navLinks = document.querySelectorAll(".nav-links li a"); // เลือกลิงก์ทั้งหมดใน sidebar

  // ฟังก์ชันสำหรับการปิด sidebar เมื่อผู้ใช้คลิกนอก sidebar
  const handleClickOutside = (event) => {
    if (!nav.contains(event.target) && !navOpenBtn.contains(event.target)) {
      nav.classList.remove("openNav");
      navOpenBtn.classList.remove("change"); // เปลี่ยนสถานะของ navOpenBtn เมื่อ sidebar ปิด
    }
  };

  document.addEventListener("click", handleClickOutside);

  navOpenBtn.addEventListener("click", () => {
    // สลับสถานะของ sidebar
    if (nav.classList.contains("openNav")) {
      nav.classList.remove("openNav");
      navOpenBtn.classList.remove("change"); // ปิด sidebar และเปลี่ยนสถานะปุ่ม
    } else {
      nav.classList.add("openNav");
      navOpenBtn.classList.add("change"); // เปิด sidebar และเปลี่ยนสถานะปุ่ม
    }
  });

  navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
    navOpenBtn.classList.remove("change"); // เปลี่ยนสถานะของ navOpenBtn เมื่อ sidebar ปิด
  });

  // ปิด sidebar เมื่อคลิกที่ลิงก์ใดๆ ในแถบนำทาง
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("openNav");
      navOpenBtn.classList.remove("change"); // เปลี่ยนสถานะของ navOpenBtn เมื่อ sidebar ปิด
    });
  });

  // ควบคุมการเลื่อนแนวนอน
  const bgHead = document.querySelector("header .bg-head");
  let isDown = false;
  let startX;
  let scrollLeft;

  bgHead.addEventListener("mousedown", (e) => {
    isDown = true;
    bgHead.classList.add("active");
    startX = e.pageX - bgHead.offsetLeft;
    scrollLeft = bgHead.scrollLeft;
  });

  bgHead.addEventListener("mouseleave", () => {
    isDown = false;
    bgHead.classList.remove("active");
  });

  bgHead.addEventListener("mouseup", () => {
    isDown = false;
    bgHead.classList.remove("active");
  });

  bgHead.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - bgHead.offsetLeft;
    const walk = (x - startX) * 2; // ปรับความเร็วการเลื่อน
    bgHead.scrollLeft = scrollLeft - walk;
  });
    
  // Cleanup function เพื่อถอด event listeners
  return () => {
    document.removeEventListener("click", handleClickOutside);
    navOpenBtn.removeEventListener("click", () => {});
    navCloseBtn.removeEventListener("click", () => {});
    navLinks.forEach((link) => {
      link.removeEventListener("click", () => {});
    });
  };
}
