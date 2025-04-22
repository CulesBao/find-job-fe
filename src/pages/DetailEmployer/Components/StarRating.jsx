import { useState } from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating = 0, onRate, readOnly = false }) => {
  const [hovered, setHovered] = useState(null);

  const handleClick = (value) => {
    if (!readOnly && onRate) onRate(value);
  };

  return (
    <div className="flex items-center gap-1">
      <p className="text-gray-500">Rating for us: </p>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-7 h-7 cursor-pointer transition-all ${
            (hovered || rating) >= star ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-400"
          }`}
          onMouseEnter={() => !readOnly && setHovered(star)}
          onMouseLeave={() => !readOnly && setHovered(null)}
          onClick={() => handleClick(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
