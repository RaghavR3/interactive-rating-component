import React from "react";

const Rating = (props) => {
  const [rating, setRating] = props.functions;

  return (
    <div className="flex flex-row justify-between">
      <button
        onClick={() => setRating(1)}
        className="flex flex-col justify-center items-center w-12 h-12 rounded-full 
        bg-secondary-blue text-paragraph hover:bg-medium-gray hover:text-white focus:bg-orange focus:text-white"
      >
        <p>1</p>
      </button>
      <button
        onClick={() => setRating(2)}
        className="flex flex-col justify-center items-center w-12 h-12 rounded-full 
      bg-secondary-blue text-paragraph hover:bg-medium-gray hover:text-white focus:bg-orange focus:text-white"
      >
        <p>2</p>
      </button>
      <button
        onClick={() => setRating(3)}
        className="flex flex-col justify-center items-center w-12 h-12 rounded-full 
      bg-secondary-blue text-paragraph hover:bg-medium-gray hover:text-white focus:bg-orange focus:text-white"
      >
        <p>3</p>
      </button>
      <button
        onClick={() => setRating(4)}
        className="flex flex-col justify-center items-center w-12 h-12 rounded-full 
      bg-secondary-blue text-paragraph hover:bg-medium-gray hover:text-white focus:bg-orange focus:text-white"
      >
        <p>4</p>
      </button>
      <button
        onClick={() => setRating(5)}
        className="flex flex-col justify-center items-center w-12 h-12 rounded-full 
      bg-secondary-blue text-paragraph hover:bg-medium-gray hover:text-white focus:bg-orange focus:text-white"
      >
        <p>5</p>
      </button>
    </div>
  );
};

export default Rating;
