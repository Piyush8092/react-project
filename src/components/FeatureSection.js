import people from "../../assets/features/people.png";
import place from "../../assets/features/place.png";
import product from "../../assets/features/product.png";
import program from "../../assets/features/program.png";

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
      <div className="text-center bg-white p-6 rounded shadow">
        <img src={people} alt="People" className="h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">People</h3>
        <p className="mb-4">
          Find a teacher, coach, or expert for your hobby interest in your
          locality. Find a partner, teammate, accompanist or collaborator.
        </p>
        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Connect
        </button>
      </div>
      <div className="text-center bg-white p-6 rounded shadow">
        <img src={place} alt="Place" className="h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Place</h3>
        <p className="mb-4">
          Find a class, school, playground, auditorium, studio, shop, or an
          event venue. Book a slot at venues that allow booking through
          hobbycue.
        </p>
        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Meet up
        </button>
      </div>
      <div className="text-center bg-white p-6 rounded shadow">
        <img src={product} alt="Product" className="h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Product</h3>
        <p className="mb-4">
          Find equipment or supplies required for your hobby. Buy, rent or
          borrow from shops, online stores or from community members.
        </p>
        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Get it
        </button>
      </div>
      <div className="text-center bg-white p-6 rounded shadow">
        <img src={program} alt="Program" className="h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Program</h3>
        <p className="mb-4">
          Find events, meetups and workshops related to your hobby. Register or
          buy tickets online.
        </p>
        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Attend
        </button>
      </div>
    </div>
  );
};

export default FeatureSection;
