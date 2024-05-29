import React, { useState, useEffect } from "react";
import logo from "../../assets/Endsection/gotop.png";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <button
        onClick={scrollToTop}
        className="flex flex-col items-center bg-white shadow-md rounded-full px-3 py-2"
      >
        <img src={logo} alt="Logo" className="h-6 w-auto mb-1" />
        <span className="text-blue-500 font-medium">Go to top</span>
      </button>
    </div>
  );
};

export default GoToTop;
