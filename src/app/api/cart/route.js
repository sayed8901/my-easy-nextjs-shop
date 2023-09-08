import { getMultipleProductsByIdsFromDb } from "@/backendServices/product.service";
import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    // cookie থেকে cart কে get করতে
    const cookie = request.cookies.get("cart")?.value;

    // যদি cookie থেকে cart না পাওয়া যায় তাহলে cart কে [] হিসেবে return কেরে দেয়া হচ্ছে
    if (!cookie) return NextResponse.json({ cart: [] });

    // যাইহোক, আমরা cookie থেকে যে cart data পাবো সেটাকে JSON.parse করে cartObj পাবো।
    const cartObj = JSON.parse(cookie);

    // cartObj এর উপরে Object.keys method ব্যবহার করলে এটি আমাদেরকে উক্ত cart data object-টির key-গুলো মানে এক্ষেত্রে id-গুলোর একটা array আমাদেরকে দিবে।
    // getMultipleProductsByIdsFromDb এর থেকে data পেতে হলে এটিতে এই id-গুলোর array-টা দিয়ে দিতে হবে..
    const products = await getMultipleProductsByIdsFromDb(Object.keys(cartObj));

    const cart = products.map((product) => {
      // DB থেকে পাওয়া products থেকে map করে প্রত্যেকটি ...product এবং এর সাথে quantity দিয়ে নতুন করে আরেকটি object return করা হচ্ছে।
      // এক্ষেত্রে, cookie থেকে প্রাপ্ত cartObj এ আমাদের এই map এর থেকে পাওয়া product এর _id কে ‍string এ convert করে সেটিকে quantity হিসেবে রেখে দিচ্ছে...
      return {
        ...product,
        quantity: cartObj[product._id.toString()],
      };
    });

    // এবং, উক্ত cart কেই এখানে NextResponse.json করে পাঠিয়ে দেয়া হচ্ছে
    return NextResponse.json({ cart });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500, }
    );
  }
};





// আমাদের product টির id টা cookie তে add করতে এই POST request টি তৈরি করা হয়েছে .......
export const POST = async (request) => {
  try {
    // আমাদের প্রদত্ত fetch(`/api/cart?id=${id}` এই url থেকে ‍searchParams কে পাবে
    // এবং এই ‍searchParams থেকে get করে id টি-কে নিয়ে নিবে।

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    // এছাড়াও, আমরা চাইলে searchParams এ action ও দিয়ে দিতে পারি। (এখানে, action দ্বারা btn click এ কোন কাজ যেমন: "plus" বা "minus" কে বোঝানো হয়েছে।)

    const action = searchParams.get("action");

    // যদি query থেকে যদি id না পাওয়া যায় তাহলে Error throw করে দিতে..
    if (!id) throw new Error("id not found");

    // cookies() কে call করে সেখান থেকে আমরা ‍stored-কৃত cookie -কে পাবো
    const cookie = cookies();

    let cart = {};

    // প্রাথমিকভাবে, response হিসেবে added কে true করে দিতে হবে এবং একটা message পাঠিয়ে দিতে হবে।
    let res = { added: true, message: "added to cart" };



    if (cookie.get("cart")?.value) {
      // cookie থেকে cart কে get করে যদি পাওয়া যায় তাহলে সেটিকে আমরা সেটিকে JSON.parse করে আবার আমাদের cart এ রেখে দিচ্ছি ...
      cart = JSON.parse(cookie.get("cart")?.value);

      // এছাড়াও, যদি cookie তে আগে থেকে cart থাকে এবং সেই cart এ আমরা এখন যেই product টি add করতে চাচ্ছি অর্থ্যাৎ সেই id’র product যদি আগে থেকে থাকে তাহলে ‍action ‍set করে দিতে পারি...
      if (cart[id]) {
        // action যদি "plus" হয়, তাহলে quantity-কে 1 করে যোগ করে দিবো।
        if (action === "plus") {
          cart[id] += 1;
        } else if (action === "minus") {
          // action যদি "minus" হয়, এবং quantity যদি 1 এর চেয়ে কম মানে 0 হয়, তাহলে "Minus must be greater than 1" লিখে আমরা Error throw করে দিতে পারি।
          if (cart[id] <= 1)
            throw new Error("To minus, product must be greater than 1");

          // action যদি "minus" হয়, তাহলে quantity-কে 1 করে বিয়োগ করে দিবো এবং একই সাথে "Reduced from cart" লিখে ‍response আকারে message দিয়ে দিতে পারি।
          cart[id] -= 1;
          res.message = "Reduced from cart";
        }

        // যদি cookie তে আগে থেকে cart থাকে কিন্ত‍ু কোন action না পাওয়া যায়, তাহলে "Already added to cart" লিখে আমরা Error throw করে দিতে পারি।
        else {
          throw new Error("Already added to cart");
        }
      }

      // যদি cookie তে আগে থেকে cart থাকে এবং সেই cart এ আমরা এখন যেই product টি add করতে চাচ্ছি অর্থ্যাৎ সেই id’র product যদি আগে থেকে না থাকে, তাহলে product এর quantity হিসেবে 1 ‍set করে দিবো।
      else {
        cart[id] = 1;
      }
    }

    // যদি cookie তে আগে থেকে কোন cart না থাকে, তাহলেও cart = {} এর মধ্যে ঐ id'র product এর quantity হিসেবে 1 ‍set করে দিবো।
    else {
      cart[id] = 1;
    }

    console.log(cart);

    // সর্বশেষে, cookie তে cart নামে আমাদের updated cart-টিকে JSON.stringify করে সেই value দিয়ে set করে দিচ্ছি..। এছাড়াও, যেন এটিকে আমরা শুধু server-side থেকে access করতে পারি, সেজন্য secure এবং httpOnly কে true করে দিয়েছি।
    cookie.set({
      name: "cart",
      value: JSON.stringify(cart),
      secure: true,
      httpOnly: true,
    });

    // সবকিছু ঠিক মতো হয়ে গেলে, প্রথমে declare করা response টি দিয়ে দিবে। ফলে, added কে true করে দিবে এবং error message পাঠিয়ে দিবে।
    return NextResponse.json(res);
  } 
  
  // এবং, কোন error হয়ে গেলে, response হিসেবে added কে false করে দিতে হবে এবং সাথে message টিকে-ও পাঠিয়ে দিতে হবে।
  catch (error) {
    return NextResponse.json({ added: false, message: error.message });
  }
};
