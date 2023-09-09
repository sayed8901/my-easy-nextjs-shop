import clientImg from "@/assets/tea-images/client.png";
import Image from "next/image";

const SuperClients = () => {
    return (
      <div className="container mb-12 xl:mb-48">
        <div className="container mx-auto p-16 my-28 grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-orange-400 via-orange-600 to-red-600 rounded-lg gap-x-10 lg:gap-x-5 items-center">
          {/* clients text part */}
          <div className="relative pb-12 lg:py-16">
            <div className="lg:w-5/6 space-y-6 text-white pb-12 md:pb-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-8">
                Meet Our Super Clients
              </h1>
              <p>
                Get inspired by their stories, see how they incorporate our
                products into their lives, and join the ranks of our Super
                Clients. You are not just shopping with us; you are becoming
                part of a family that celebrates style, quality, and connection
              </p>
              <button className="btn text-orange-600 font-semibold py-2 px-5 rounded-lg bg-white">
                Show All
              </button>
            </div>
          </div>
          {/* client cards */}
          <div className="relative flex-row grid justify-items-end gap-y-10">
            {/* transparent - card 1 */}
            <div className="relative opacity-30 w-5/6">
              <div className="absolute -top-6 -left-6">
                <Image src={clientImg} alt="" />
              </div>
              <div className="bg-white rounded-lg p-6 sm:px-10 space-y-1">
                <p className="pb-3 text-sm lg:text-base">
                  We provide the best & suitable products of variety of taste &
                  range that make your life so easy.
                </p>
                <h4 className="font-extrabold">Md. Sayed Hossain</h4>
                <h6>Designer, Developer</h6>
              </div>
            </div>
            {/* transparent - card 2 */}
            <div className="relative opacity-30 w-5/6">
              <div className="absolute -top-6 -left-6">
                <Image src={clientImg} alt="" />
              </div>
              <div className="bg-white rounded-lg p-6 sm:px-10 space-y-1">
                <p className="pb-3 text-sm lg:text-base">
                  We provide the best & suitable products of variety of taste &
                  range that make your life so easy.
                </p>
                <h4 className="font-extrabold">Md. Sayed Hossain</h4>
                <h6>Designer, Developer</h6>
              </div>
            </div>
            {/* front floating - card 3 */}
            <div className="absolute w-5/6 top-28 -left-0">
              <div className="absolute -top-6 -left-6">
                <Image src={clientImg} alt="" />
              </div>
              <div className="bg-white rounded-lg p-6 sm:px-10 space-y-1">
                <p className="pb-3 text-sm lg:text-base">
                  We provide the best & suitable products of variety of taste &
                  range that make your life so easy.
                </p>
                <h4 className="font-extrabold">Md. Sayed Hossain</h4>
                <h6>Designer, Developer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SuperClients;