import React from "react";
import partimage1 from "../../assets/Endsection/part1actimage.png";
import partimage2 from "../../assets/Endsection/part2actimage.png";
import logo from "../../assets/Endsection/gotop.png"; // Assuming you have a logo for the "Go to top" link

const End = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 text-left relative">
        <h2 className="text-3xl font-bold mb-4">
          Your <span className="text-purple-500">Hobby</span>, Your{" "}
          <span className="text-blue-500">Community</span>...
        </h2>
        <button className="px-6 py-3 bg-purple-500 text-white rounded-[8px] hover:bg-purple-600 mb-8">
          Get started
        </button>
        <div className="flex justify-center items-center space-x-4 gap-11">
          <img src={partimage1} alt="Hobby 1" className="h-32 w-auto" />
          <img src={partimage2} alt="Hobby 2" className="h-32 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default End;
