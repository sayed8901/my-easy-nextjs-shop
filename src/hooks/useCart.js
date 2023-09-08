import useSWR from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data.cart;
};
// যেহেতু, route.js এ GET request এ cart নামে NextResponse করে দেয়া হয়েছিলো, তাই এখানে data থেকে cart -কে return করে দিতে হয়েছে।


const useCart = () => {
  const {
    data: cart = [],
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR("/api/cart", fetcher);

  return {
    cart,
    error,
    isLoading,
    isValidating,
    mutate,
  };
};

export default useCart;
