import React, { useEffect } from "react";
import useCategory from "../Hooks/useCategory";
import useDetails from "../../../Hooks/useDetails";
import DetailsCard from "./DetailsCard.tsx/DetailsCard";

const ContentCategoryComponent = ({
  categoryId,
}: {
  categoryId: string | undefined;
}) => {
  const { category, getCategory } = useCategory();
  const { details, getDetails } = useDetails();

  useEffect(() => {
    if (categoryId) {
      const categoryIdNumber = parseInt(categoryId);
      if (!isNaN(categoryIdNumber)) {
        getCategory({ categoryId: categoryIdNumber });
        getDetails({ categoryId: categoryIdNumber });
      }
    }
  }, [categoryId]);
  return category ? (
    <div
      className="flex flex-col w-full h-screen  justify-center items-center overflow-y-scroll"
      style={{
        background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${category.bgImage}') no-repeat `,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 h-full py-4">
        {details?.map((detail) => (
          <DetailsCard key={`DetailsCard_${detail.id}`} details={detail} />
        ))}
      </div>
    </div>
  ) : (
    <p>Categoria no encontrada</p>
  );
};

export default ContentCategoryComponent;
