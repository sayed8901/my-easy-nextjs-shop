"use client";

import useAuth from "@/hooks/useAuth";
import Image from "next/image";


const Profile = () => {
  const { user } = useAuth();
  const { uid, email, displayName, photoURL } = user || {};

  return (
    <div>
      <div className="hero-content flex-col lg:flex-row gap-16">
        <Image
          alt="user-logo"
          title={displayName}
          src={photoURL}
          width={300}
          height={300}
          className="max-w-sm rounded-3xl shadow-xl mb-8 sm:mb-0 avatar"
        />
        <div>
          <h1 className="text-5xl font-bold mb-16">{displayName}</h1>
          <div className="space-y-4">
            <p>User ID: {uid}</p>
            <p>Email: {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
