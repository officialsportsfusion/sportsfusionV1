import React from "react";
import { useSwiper } from "@utils/hooks/useSwiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useTimer } from "@utils/hooks/useTimer";

export const Swiper = ({
  slides,
  withIndicators,
  withNavigators,
  children: reactChildren,
  ...rest
}) => {
  const containerRef = React.useRef(null);
  const indicatorRef = React.useRef(null);
  const [width, setWidth] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const { time, start, stop, reset } = useTimer();

  const moveLeft = () => {
    setCurrentIndex((prev) => {
      if (prev - 1 < 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const moveRight = () => {
    setCurrentIndex((prev) => {
      if (prev + slides === children) {
        return prev;
      }
      return prev + 1;
    });
  };

  const updateIndicator = (cont, index) => {
    if (cont instanceof HTMLElement) {
      const elems = [...cont.children];
      elems.forEach((elem) => {
        elem?.classList.remove("active");
      });
      const elem = elems[index];
      elem?.classList.add("active");
    }
  };

  const navigate = (direction) => {
    if (direction === "left") {
      moveLeft();
    }
    if (direction === "right") {
      moveRight();
    }
    reset();
  };

  const { startTouch } = useSwiper(navigate);

  React.useEffect(() => {
    updateIndicator(indicatorRef.current, currentIndex);
  }, [currentIndex]);

  React.useEffect(() => {
    const autoSwipe = (delay = 10) => {
      start();
      if (time === delay) {
        reset();
        setCurrentIndex((prev) => {
          if (prev + slides === children) {
            return 0;
          }
          return prev + 1;
        });
      }
    };
    autoSwipe();

    return () => {
      stop();
    };
  }, [time, start, stop, reset, slides, children]);

  React.useEffect(() => {
    containerRef.current instanceof HTMLElement &&
      (() => {
        setChildren(() => containerRef.current?.children[0]?.children?.length);

        setWidth(() => containerRef.current.clientWidth);
      })();

    const resizeHandler = (elem) => {
      elem instanceof HTMLElement && setWidth(() => elem.clientWidth);
    };

    const onResize = () => {
      resizeHandler(containerRef.current);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div {...rest}>
      <div className="relative" ref={containerRef}>
        <div
          className="flex swiper-container transition transform duration-300"
          style={{
            width: (children * width) / slides,
            transform: `translateX(-${(currentIndex * width) / slides}px)`,
          }}
          onTouchStart={startTouch}
        >
          {reactChildren}
        </div>

        {withNavigators && (
          <>
            <button
              disabled={currentIndex === 0}
              onClick={() => navigate("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 disabled:opacity-50"
            >
              <FaAngleLeft fontSize={48} />
            </button>
            <button
              disabled={currentIndex === children - slides}
              onClick={() => navigate("right")}
              className="absolute  right-0 top-1/2 -translate-y-1/2 disabled:opacity-50"
            >
              <FaAngleRight fontSize={48} />
            </button>
          </>
        )}
      </div>

      {withIndicators && (
        <div
          className="flex gap-x-4 p-4 items-center justify-center z-50"
          ref={indicatorRef}
        >
          {(() => {
            const a = [];
            for (let index = 0; index < children; index++) {
              a.push(index);
            }
            return a.map((e, i) => {
              if (i === 0) {
                return (
                  <Indicator
                    key={i}
                    setCurrentIndex={setCurrentIndex}
                    active
                    slides={children}
                    slide={slides}
                    reset={reset}
                  />
                );
              }
              return (
                <Indicator
                  key={i}
                  setCurrentIndex={setCurrentIndex}
                  slides={children}
                  slide={slides}
                  reset={reset}
                />
              );
            });
          })()}
        </div>
      )}
    </div>
  );
};

const Indicator = ({ active, setCurrentIndex, slides, reset, slide }) => {
  const onClick = (e) => {
    const elems = [...e.target.parentElement.children];
    const index = elems.findIndex(
      (elem) => elem === e.target || elem === e.currentTarget
    );

    setCurrentIndex(() =>
      index === slides - slide + 1 ? index - slide + 1 : index
    );
    reset();
  };
  return (
    <button
      onClick={onClick}
      className={`w-10 h-3 rounded-full transition height bg-gray-300 ${
        active ? "active" : ""
      }`}
    ></button>
  );
};
