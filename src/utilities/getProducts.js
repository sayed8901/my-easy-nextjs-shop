import { getProductsFromDb } from "@/backendServices/product.service";
import { cache } from "react";
import "server-only";

const getProducts = cache(getProductsFromDb);

export default getProducts;
