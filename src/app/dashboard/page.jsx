import CheckoutPage from "../checkout/page";
import ProfilePage from "../profile/page";

const DashboardPage = () => {
  return (
    <div className="my-4 xl:my-8">
      <h1 className="my-5 text-2xl text-center">My Dashboard</h1>
      <ProfilePage />
      <CheckoutPage />
    </div>
  );
};

export default DashboardPage;
