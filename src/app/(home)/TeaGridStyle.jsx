import freshTea1 from "@/assets/tea-images/fresh-1.png";
import freshTea2 from "@/assets/tea-images/fresh-2.png";
import Image from "next/image";

const TeaGridStyle = () => {
    return (
      <div className="container px-4 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 mb-12 xl:mb-48">
        {/* tea grid part */}
        <div className="md:w-5/6 grid grid-cols-2 grid-rows-3 gap-6 order-2 md:order-1">
          <div className="bg-gradient-to-r from-red-200 via-red-100 to-white rounded-lg"></div>
          <div className="row-span-2 bg-red-100 rounded-lg">
            <Image className="mx-auto" src={freshTea1} alt="" />
          </div>
          <div className="row-span-2 bg-gradient-to-r bg-stone-200 rounded-lg">
            <Image className="mx-auto scale-90" src={freshTea2} alt="" />
          </div>
          <div className="bg-gradient-to-r from-stone-200 via-stone-100 to-white rounded-l"></div>
        </div>
        {/* <fresh text part */}
        <div className="space-y-3 xl:space-y-5 order-1 md:order-2 pb-10 md:pb-0">
          <div className="space-y-3 xl:space-y-5 mb-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-8">
              Great Tea, Freshly Served
            </h1>
            <p className="text-base xl:text-sm">
              The meaning of gong cha is chinese is to provide the best tea to
              emperor from all possessions. It represents the highest quality
              and self expectation. It had been deeply appreciated by its
              customers because of good words of mouth and unique customized
              service originated from Taiwan.
            </p>
          </div>
          <h3 className="text-xl font-extrabold">Unique Taste</h3>
          <p className="text-base xl:text-lg">
            A Unique and different style from other teapots gives a luxurious
            and minimalist impression
          </p>
          <h3 className="text-xl font-extrabold">Premium Quality</h3>
          <p className="text-base xl:text-lg">
            Premium Quality that makes tea more elegant and more durable when
            you use it.
          </p>
        </div>
      </div>
    );
};

export default TeaGridStyle;