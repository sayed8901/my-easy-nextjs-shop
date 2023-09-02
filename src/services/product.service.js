import DBConnect from "./DBConnect";
import "server-only";

export const getProductsFromDB = async () => {
  const db = await DBConnect();
  const productsCollection = db.collection("products");

  return productsCollection.find({}).toArray();
};
