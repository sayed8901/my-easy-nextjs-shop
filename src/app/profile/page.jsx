"use client";

import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";


const ProfilePage = () => {
  const { user } = useAuth();
  const { uid, email, displayName, photoURL } = user || {};

  return (
    <div className="hero my-12 xl:my-48">
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

          <Link href="/checkout">
            <div className="card-actions">
              <button className="btn btn-primary mt-16">
                Checkout My Cart
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
