const commonNavData = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/categories",
    title: "Categories",
  },
  {
    path: "/products",
    title: "Products",
  },
  {
    path: "/coffeeShop",
    title: "Coffee-shop",
  },
];

export const afterLoginNavData = [
  ...commonNavData,
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

export const beforeLoginNavData = [
  ...commonNavData,
  {
    path: "/signup",
    title: "Signup",
  },
  {
    path: "/login",
    title: "Login",
  },
];
