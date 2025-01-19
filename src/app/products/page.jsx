import getProducts from "@/utilities/getProducts";
import SingleProduct from "./SingleProduct";

// revalidate = 0 দিলে, dynamic মানে ‍server side rendering (SSR) হবে। অর্থ্যাৎ, এর ফলে, প্রতিবার request এ database থেকে dynamically data নিয়ে আসবে।
export const revalidate = 0;

export const metadata = {
  title: "Products - Easy Shop",
};

const ProductsPage = async ({ searchParams: { categoryId } }) => {
  const products = await getProducts(categoryId);

  return (
    <div className="container mx-auto my-8 xl:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {products.map((product) => (
          <SingleProduct product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
