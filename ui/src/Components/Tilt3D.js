import React, { useRef, useState, useEffect, useCallback } from "react";

/**
 * Mouse-driven CSS 3D tilt (perspective + rotateX/Y).
 * Respects prefers-reduced-motion.
 */
export default function Tilt3D({
  children,
  className = "",
  innerClassName = "",
  maxTilt = 14,
  perspective = 1100,
  scale = 1.02,
}) {
  const wrapRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  const [transform, setTransform] = useState("");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const reset = useCallback(() => {
    setTransform(
      reduceMotion
        ? ""
        : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
  }, [reduceMotion, perspective]);

  useEffect(() => {
    reset();
  }, [reset]);

  const onPointerMove = (e) => {
    if (reduceMotion) return;
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const px = (x / r.width) * 2 - 1;
    const py = (y / r.height) * 2 - 1;
    const rotY = px * maxTilt;
    const rotX = -py * maxTilt;
    setTransform(
      `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, ${scale})`
    );
  };

  const onPointerLeave = () => {
    if (!reduceMotion) reset();
  };

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ perspective: reduceMotion ? undefined : `${perspective}px` }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div
        className={innerClassName}
        style={{
          transform: reduceMotion ? undefined : transform || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
          transformStyle: "preserve-3d",
          transition: reduceMotion ? undefined : "transform 0.12s ease-out",
          willChange: reduceMotion ? undefined : "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
