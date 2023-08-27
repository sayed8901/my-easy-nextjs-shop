import ThemeContext from "@/contexts/ThemeContext";
import { useContext } from "react";

const useTheme = () => {

  const theme = useContext(ThemeContext);

  // 3.1.1 এছাড়াও, Server এ আমাদের ‍application run হওয়ার সময় by default কোন theme থাকবে না।
  // 3.1.2 এজন্য আমাদেরকে আগে বুঝতে বা বের করতে হবে যে, আমাদের ‍application টি কি বর্তমানে client এ নাকি ‍server এ run হচ্ছে

  // 3.2.1 typeof window !== "undefined" দ্বারা check করা হচ্ছে যে, window এর typeof undefined না কিনা? কেননা, আমরা জানি, window object টা শুধুমাত্র browser এ available, এটি client-side এ পাওয়া যায় না।
  // 3.2.2 তার মানে হচ্ছে, window যদি undefined না হয় তার মানে এটি আছে, তাহলে isClient variable -টি হলো client-side.

  const isClient = typeof window !== "undefined";


  // 3.3 যদি, isClient -ও না হয় এবং theme -ও না থাকে, তাহলে কোন theme পাওয়া যাবে না, মানে empty object মানে {} return করবে।
  if (!isClient && !theme) return {}

  
  // 2. যদি client component হয় কিন্তু, theme না থাকে তাহলে আমরা custom একটা new Error throw করবো।
  if (!theme) {
    throw new Error("You must wrap you application with ThemeProvider or use the useTheme hook")
  }
  
  // 1. যদি কোন theme থাকে বা পাওয়া যায়, তাহলে সেই theme কে return দিবে
  return theme;
};

export default useTheme;
