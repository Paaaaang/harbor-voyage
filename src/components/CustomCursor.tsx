"use client";

import React, { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  const updateCursor = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${
        positionRef.current.x - 10
      }px, ${positionRef.current.y - 10}px, 0)`;
    }
  }, []);

  const updateMousePosition = useCallback(
    (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      requestAnimationFrame(updateCursor);
    },
    [updateCursor]
  );

  const handleMouseEnter = useCallback(() => {
    isHoveringRef.current = true;
    if (cursorRef.current) {
      cursorRef.current.classList.add("hover");
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
    if (cursorRef.current) {
      cursorRef.current.classList.remove("hover");
    }
  }, []);

  useEffect(() => {
    // 호버 가능한 요소들 선택
    const hoverElements = document.querySelectorAll(
      'a, button, [role="button"], .hover-target'
    );

    // 이벤트 리스너 추가
    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter, {
        passive: true,
      });
      element.addEventListener("mouseleave", handleMouseLeave, {
        passive: true,
      });
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "rgba(163, 177, 138, 0.8)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 0.05s ease-out, scale 0.15s ease",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
