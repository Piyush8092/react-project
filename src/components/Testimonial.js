import actimage from "../../assets/testimonial/actimagesm.png";
import actimage2 from "../../assets/testimonial/actimage.png";
import mic from "../../assets/testimonial/mic.png";
import play from "../../assets/testimonial/play.png";
const Testimonial = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="bg-purple-50 p-8 rounded shadow-lg flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/4 mb-4 lg:mb-0 lg:mr-4">
            <h3 className="text-xl font-bold mb-4">Testimonials</h3>
            <p className="mb-4">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
            <div className="flex items-center">
              <button className="mr-2">
                <img src={play} alt="Play" className="h-8 w-8" />
              </button>
              <div>
                <div className="w-full bg-purple-200 h-2 rounded">
                  <div className="bg-purple-500 h-2 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 text-center lg:text-left">
            <img
              src={actimage}
              alt="Shubha Nagarajan"
              className="h-16 w-16 rounded-full mx-auto lg:mx-0 mb-2"
            />
            <p className="font-bold">Shubha Nagarajan</p>
            <p className="text-sm text-gray-600">Classical Dancer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
