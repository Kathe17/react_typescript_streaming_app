import React, { useState } from "react";
import useDetails from "../../Hooks/useDetails";
import SearchBarItem from "../SearchBarItem/SearchBarItem";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { details, getDetails, clearDetails } = useDetails();

  const getDetailsBySearchTerm = (searchTerm: string) => {
    if (searchTerm.length > 2) {
      getDetails({ searchTerm });
    } else {
      if (details) {
        clearDetails();
      }
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    getDetailsBySearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Buscar..."
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={searchTerm}
        onChange={handleSearch}
      />
      {details.length > 0 && (
        <div className="absolute  top-20 h-auto w-1/6 rounded-md p-1 bg-gray-700 bg-opacity-90">
          {details.map((detail) => {
            return (
              <SearchBarItem
                key={`SearchBarItem_${detail.id}`}
                detail={detail}
              ></SearchBarItem>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
