"use client";

import useCart from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Checkout = () => {
  const { isLoading, mutate, cart } = useCart();

  const handleCount = async (id, action) => {
    try {
      const res = await fetch(`api/cart?id=${id}&action=${action}`, {
        method: "POST",
      });
      const result = await res.json();
      if (result.added) {
        toast.success(result.message);
        mutate();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {!isLoading && cart.length === 0 && <h1>No product added to cart</h1>}

      {cart.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table table-lg">
            <thead>
              <tr className="text-center">
                <th>No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(
                ({ _id, title, brand, quantity, price, imageUrls }, i) => (
                  <tr key={_id} className="text-center">
                    <th>{i + 1}</th>
                    <td>
                      <Image
                        alt={title}
                        src={imageUrls[2]}
                        width={100}
                        height={100}
                        className="rounded-xl"
                      ></Image>
                    </td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{brand}</td>
                    <td className="flex items-center justify-center my-4">
                      <button
                        onClick={() => handleCount(_id, "minus")}
                        className="btn btn-info mr-3"
                        disabled={quantity <= 1}
                      >
                        <AiOutlineMinus />
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() => handleCount(_id, "plus")}
                        className="btn btn-primary ml-3"
                      >
                        <AiOutlinePlus />
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          <div className="flex justify-end">
            <Link href={"/products"}>
              <button className="btn btn-primary mt-12 ml-auto mr-16">
                Go to all products
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
