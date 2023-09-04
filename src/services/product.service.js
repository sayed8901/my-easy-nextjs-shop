import "server-only";
import DbConnect from "./DbConnect";

export const getProductsFromDB = async () => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");

  return productsCollection.find({}).toArray();
};
