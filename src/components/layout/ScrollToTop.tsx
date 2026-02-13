import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowIcon = FaArrowUp as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary position-fixed bottom-0 end-0 m-3"
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        >
          <ArrowIcon />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
