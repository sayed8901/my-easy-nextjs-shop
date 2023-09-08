"use client";

import useCart from "@/hooks/useCart";
import { toast } from "react-hot-toast";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const AddToCartBtn = ({ id }) => {
  // mutate মানে fetcher এবং isLoading পাওয়ার জন্য useCart এ SWR package ব্যবহার করা হয়েছে।
  const { cart, isLoading, mutate } = useCart();

  // cart এ মানে cookie তে আমাদের বর্তমান product টি ‍already added বা আছে কিনা তা চেক করতে
  // cart এ saved product list এ product এর _id এর সাথে আমাদের targeted নতুন product টির id দিয়ে check করে findIndex করা..

  const isAlready = cart.findIndex((pd) => pd._id === id);

  const handleAddToCart = async (id) => {
    try {
      // /api/cart route এ id দিয়ে query করে fetch করলে result মানে product টিকে POST করা যাবে।
      const res = await fetch(`/api/cart?id=${id}`, {
        method: "POST",
      });
      const result = await res.json();

      // এক্ষেত্রে প্রাপ্ত result এর মধ্যে added true থাকলে success toast message দেখানো যেতে পারে
      if (result.added) {
        toast.success(result.message);

        // data / status refetch করে ফেলবে..
        mutate();

        // অথবা, added না থাকলে মানে false হলে error toast message দেখানো যেতে পারে
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button
      // এই handleAddToCart দ্বারা মূলত আমাদের product টির id টা cookie তে add হবে..
      onClick={() => handleAddToCart(id)}
      className="btn btn-primary mt-4"

      // isLoading থাকলে বা isAlready !== -1 হলে ( এখানে -1 মানে cart এ product টি add করা নাই, তবে, !== -1 মানে cart এ এটি আছে বুঝায় ) তার প্রেক্ষীতে “minus” btn টি disabled হবে...
      disabled={isAlready !== -1 || isLoading}
    >
      <MdOutlineAddShoppingCart />

      {/* cart এ মানে cookie তে আমাদের বর্তমান product টি ‍already added বা আছে কিনা তার ভিত্তিতে বাটনের text dynamically change করতে.. */}
      {isAlready !== -1 ? "Already added" : "Add To Cart"}
    </button>
  );
};

export default AddToCartBtn;

