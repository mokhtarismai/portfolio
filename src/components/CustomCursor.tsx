import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // إحداثيات الماوس الحقيقية للنقطة الداخلية
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // إعدادات الـ Spring للحلقة الخارجية لتكون ناعمة وبدون Lag
  const springConfig = { damping: 20, stiffness: 250, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // التأكد إذا كان الجهاز يعمل باللمس فقط (موبايل/تابلت)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // الفحص عن العناصر القابلة للنقر
      const target = e.target as HTMLElement;
      const clickable = target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer"
      );

      setIsHovered(!!clickable);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // لو كان جهاز لمس لا نعرِض المؤشر المخصص
  if (isTouchDevice) return null;

  return (
    <>
      {/* 1. النقطة المركزية الدقيقة (Inner Dot) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicked ? 0.5 : 1, // تتقلص قليلاً عند الضغط فقط
        }}
        transition={{ duration: 0.15 }}
      />

      {/* 2. الحلقة الخارجية (Outer Ring) - حجم ثابت 32px */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: 32, // الحجم ثابت دائماً
          height: 32,
          backgroundColor: isHovered
            ? "rgba(37, 99, 235, 0.2)" // خلفية خفيفة فقط عند الهوفر
            : "rgba(0, 0, 0, 0)",
          borderColor: isHovered
            ? "rgba(37, 99, 235, 1)"
            : "rgba(37, 99, 235, 0.4)",
          scale: isClicked ? 0.8 : 1, // تأثير الضغط فقط
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
      />
    </>
  );
};

export default CustomCursor;