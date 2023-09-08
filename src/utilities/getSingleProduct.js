import { getProductByIdFromDb } from "@/backendServices/product.service";
import { cache } from "react";
import "server-only";

const getSingleProduct = cache(getProductByIdFromDb);

export default getSingleProduct;
