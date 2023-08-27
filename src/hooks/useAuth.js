import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const auth = useContext(AuthContext);

  // 1.0 এজন্য আমাদেরকে আগে বুঝতে বা বের করতে হবে যে, আমাদের ‍application টি কি বর্তমানে client এ নাকি ‍server এ run হচ্ছে

  // 1.1 typeof window !== "undefined" দ্বারা check করা হচ্ছে যে, window এর typeof undefined না কিনা? কেননা, আমরা জানি, window object টা শুধুমাত্র browser এ available, এটি client-side এ পাওয়া যায় না।
  // 1.2 তার মানে হচ্ছে, window যদি undefined না হয় তার মানে এটি আছে, তাহলে isClient variable -টি হলো client-side.
  
  const isClient = typeof window !== "undefined";


  // 2.1 যদি, isClient -ও না হয় এবং user -ও না থাকে, তাহলে কোন user পাওয়া যাবে না, মানে empty object মানে {} return করবে।
    if (!isClient && !auth) return {};


  // 2.2 যদি client component হয় কিন্তু, user না থাকে তাহলে আমরা custom একটা new Error throw করবো।
  if (!auth) {
    throw new Error(
      "You must wrap your application with AuthProvider ot use the useAuth"
    );
  }

  // 3. এবং, যদি কোন user থাকে বা পাওয়া যায়, তাহলে সেই user কে return দিবে
  return auth;
};

export default useAuth;
