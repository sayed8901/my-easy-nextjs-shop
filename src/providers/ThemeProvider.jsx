import ThemeContext from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let storedTheme = localStorage.getItem("theme");
    if (!storedTheme || !(storedTheme === "dark" || storedTheme === "light")) {
      // 1. Device এর by default কি theme apply করা আছে তা জানতে:
      storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    setTheme(storedTheme);
  }, []);

  // 2. যখনই theme state টা change হবে, সে অনুযায়ী UI তে update করার জন্য querySelector দিয়ে html কে ধরে , তাতে data-theme ‍এই attribute-টিকে set করে দেয়া হচ্ছে।
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  // 3.0 user যদি page load হওয়ার পরে কোন theme মানে এখানে ”Device theme" change করে, তখন-
  useEffect(() => {
    // 3.2 onChange ফাংশনটি event এর মধ্যে matches যদি পাওয়া যায় তাহলে, dark set করবে, অন্যথায় light set করে দিবে।
    const onChange = (e) => {
      const colorScheme = e.matches ? "dark" : "light";
      setTheme(colorScheme);
    };

    // 3.1 এক্ষেত্রে, ”Device theme" কে catch করে তাতে "change" নামে event add করে onChange কে call করে দিবে।
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", onChange);

    // 3.3 এছাড়াও, unmountung এর সময় উক্ত onChange event listener টি-কে remove করে দেয়া হচ্ছে।
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", onChange);
    };
  }, []);

  // 4.1 Option A:
  // const toggleTheme = (theme) => {
  //   theme == "dark" ? "light" : "dark"
  // }

  // or, 4.2 Option B:
  const toggleTheme = () => {
    // 4.2.1 ⇒ setTheme এর মধ্যে callback pattern দিলে আমরা preTheme এ আগের value টা পাবো।
    setTheme((preTheme) => {
      // 4.2.2 ⇒ এরপর, এই আগের value’র উপর ভিত্তি করে conditionally নতুন theme-কে select করে দিতে পারি এবং, সেটিকে localStorage এ-ও save করে দিতে হবে।
      const currentTheme = preTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", currentTheme);
      // 4.2.3 ⇒ এবং, currentTheme কে return করা মানে হলো সেটি ‍setTheme এ ‍set হয়ে যাওয়া।
      return currentTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
