import React from "react";
import { DetailsModel } from "../../Models/Details.model";
import useNavigateToDetails from "./Hooks/useNavigateToDetails";

interface SearchBarItemProps {
  detail: DetailsModel;
}

const SearchBarItem: React.FC<SearchBarItemProps> = ({
  detail,
}: SearchBarItemProps) => {
  const { navigateToDetail } = useNavigateToDetails(detail);

  return (
    <button className="flex items-center" onClick={navigateToDetail}>
      <img src={detail?.logo} alt="" className="h-10 w-10 rounded-full"></img>
      <p className="text-white pl-2">
        {detail.name}-{detail.releaseDate.substring(0, 4)}
      </p>
    </button>
  );
};

export default SearchBarItem;
