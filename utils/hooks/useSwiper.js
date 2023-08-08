import React from "react";

export const useSwiper = (callback) => {
  let startX;
  const ref = React.useRef(null);

  const endTouch = (e) => {
    const swipeLimit = 50;
    const finishingTouch = e.changedTouches[0].clientX;
    if (startX < finishingTouch - swipeLimit) {
      callback && callback instanceof Function && callback("left");
    } else if (startX > finishingTouch + swipeLimit) {
      callback && callback instanceof Function && callback("right");
    }

    ref.current.removeEventListener("touchend", endTouch);
  };

  const startTouch = ({ touches, target, currentTarget }) => {
    ref.current = currentTarget;
    if (touches && touches.length === 1) {
      const touch = touches[0];
      startX = touch.clientX;

      ref.current.addEventListener("touchend", endTouch);
    }
  };

  return { startTouch };
};
