// import { getCategoriesFromDb } from "@/services/category.service";
import getCategories from "@/utilities/getCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
  // const categories = await getCategoriesFromDb();
  const categories = await getCategories();

  return (
    <div className="container mb-12 xl:mb-48">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-16 text-center">
          Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
          {categories.map((category) => (
            <SingleCategory category={category} key={category._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
