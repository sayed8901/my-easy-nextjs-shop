import DBConnect from "./DBConnect";
import 'server-only';

export const getCategoriesFromDB = async () => {
    const db = await DBConnect();
    const categoriesCollection = db.collection("categories");

    return categoriesCollection.find({}).toArray();
}