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



// MongoDB থেকে বিভিন্ন id দিয়ে একাধিক data পাওয়ার জন্য...
export const getMultipleProductsByIdsFromDb = async (ids = []) => {
  const db = await DbConnect();

  const productsCollection = db.collection("products");

  // id গুলোর প্রত্যেকটিকে map করে ObjectId বানিয়ে array তে দিয়ে দেয়া..
  const idsWithObjectId = ids.map((id) => new ObjectId(id));

  // উক্ত তৈরিকৃত idsWithObjectId কে database এর products collection এ _id এর অনুসারে সেখানে আছে কিনা এবং $in দ্বারা শুধু যেগুলো আছে সেগুলোকে query তে set করে দেয়া যায়।
  const query = {
    _id: { $in: idsWithObjectId },
  };

  return productsCollection.find(query).toArray();
};
