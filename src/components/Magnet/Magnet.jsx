import { useState, useEffect, useRef } from "react";

const Magnet = ({
  children,
  padding = 80,
  disabled = false,
  magnetStrength = 8,
  activeTransition = "transform .18s ease-out",
  inactiveTransition = "transform .45s cubic-bezier(.22,.61,.36,1)",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;

      const rect = magnetRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const withinX = Math.abs(distanceX) < rect.width / 2 + padding;
      const withinY = Math.abs(distanceY) < rect.height / 2 + padding;

      if (withinX && withinY) {
        setIsActive(true);

        setPosition({
          x: distanceX / magnetStrength,
          y: distanceY / magnetStrength,
        });
      } else {
        setIsActive(false);

        setPosition({
          x: 0,
          y: 0,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, [disabled, padding, magnetStrength]);

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{
        display: "inline-block",
      }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px,${position.y}px,0)`,
          transition: isActive
            ? activeTransition
            : inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;