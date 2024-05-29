import React from "react";

const AddYourOwnSection = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Add your own</h2>
          <p className="mb-8">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page.
          </p>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Add new
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddYourOwnSection;
