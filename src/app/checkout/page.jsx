import Checkout from "./Checkout";

export const metadata = {
  title: "Checkout - Easy Shop",
};

const CheckoutPage = () => {
  return (
    <div className="my-4 xl:my-8">
      <h1 className="my-5 text-2xl text-center">Review added products</h1>
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
