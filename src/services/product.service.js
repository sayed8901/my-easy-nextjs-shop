import { ObjectId } from "mongodb";
import DbConnect from "./DbConnect";
import "server-only";

export const getProductsFromDb = async (categoryId) => {
  const db = await DbConnect();

  const productsCollection = db.collection("products");
  //   প্রাথমিকভাবে query = {} ম্বারা সব products গুলো load করা যায়
  let query = {};

  //   এবং, category-wise products load করার জন্যে তা query -তে set করে দিতে হয়
  if (categoryId) {
    query = {
      categoryId: categoryId,
    };
  }

  return productsCollection.find(query).toArray();
};


export const getProductByIdFromDb = async (id) => {
  const db = await DbConnect();

  const productsCollection = db.collection("products");
  const query = {
    _id : new ObjectId(id),
  };
  
  return productsCollection.findOne(query);
};