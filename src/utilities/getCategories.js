import { getCategoriesFromDB } from "@/services/category.service";
import { cache } from "react";

const getCategories = cache(() => {
  return getCategoriesFromDB();
});

export default getCategories;