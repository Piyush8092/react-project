import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import AddYourOwnSection from "./AddYourOwn";
import Testimonial from "./Testimonial";
import End from "./End";

const Body = () => {
  return (
    <div className="body">
      <HeroSection />
      <FeatureSection />
      <AddYourOwnSection />
      <Testimonial />
      <End />
    </div>
  );
};

export default Body;
