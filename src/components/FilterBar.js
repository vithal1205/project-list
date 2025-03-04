import { useState } from "react";

const FilterBar = ({ setFilter }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "On-Track", "At-Risk", "Blocked"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <div className="flex gap-2 mt-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={`px-4 py-2 rounded-lg ${
            activeFilter === filter
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
