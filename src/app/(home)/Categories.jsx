import getCategories from "@/utilities/getCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className="hero min-h-screen -mt-36">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-24 text-center">
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
