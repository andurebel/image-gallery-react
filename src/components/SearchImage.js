import React from "react";

const SearchImage = () => {
  return (
    <div className="max-w-sm rounded my-10 mx-auto">
      <form className="w-full max-w-sm">
        <div className="flex items-center border border-b-2 border-purple-500 py-2">
          <input
            type="text"
            className="appearence-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
            placeholder="Search an image"
          />
          <button
            className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchImage;
