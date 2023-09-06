import FeaturedTeaProducts from "../(home)/FeaturedTeaProducts";
import TeaGridStyle from "../(home)/TeaGridStyle";

export const metadata = {
  title: "CoffeeShop - Easy Shop",
};

const CoffeeShopPage = () => {
  return (
    <div className="my-24 space-y-48">
      <FeaturedTeaProducts />
      <TeaGridStyle />
    </div>
  );
};

export default CoffeeShopPage;
