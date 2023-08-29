import teaImg1 from "@/assets/tea-images/tea-1.png";
import teaImg2 from "@/assets/tea-images/tea-2.png";
import teaImg3 from "@/assets/tea-images/tea-3.png";
import teaImg4 from "@/assets/tea-images/tea-4.png";
import Image from 'next/image';

const FeaturedTeaProducts = () => {
    return (
      <div className="container mx-auto my-10">
        <div className="mx-auto md:w-3/4 text-center space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-4">
            Our Featured Tea Items
          </h1>
          <p>
            Explore a delightful range of taste that cater to every palate.
            Whether you are a fan of traditional brews or looking to try
            something new, our blends are here to add comfort and joy to your
            day.
            <br /> Take a sip and savor the goodness!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
          <div className=" bg-base-300 shadow-xl text-center space-y-3 p-6 rounded-lg mx-6 sm:mx-0">
            <Image className="mx-auto pb-3" src={teaImg1} alt="" />
            <h3 className="text-2xl font-extrabold">Milk Tea</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className=" bg-base-300 shadow-xl text-center space-y-3 p-6 rounded-lg mx-6 sm:mx-0">
            <Image className="mx-auto pb-3" src={teaImg2} alt="" />
            <h3 className="text-2xl font-extrabold">Black Tea</h3>
            <p>Vitae recusandae accusantium consequuntur</p>
          </div>
          <div className=" bg-base-300 shadow-xl text-center space-y-3 p-6 rounded-lg mx-6 sm:mx-0">
            <Image className="mx-auto pb-3" src={teaImg3} alt="" />
            <h3 className="text-2xl font-extrabold">Lemon Tea</h3>
            <p>Vitae recusandae accusantium consequuntur</p>
          </div>
          <div className=" bg-base-300 shadow-xl text-center space-y-3 p-6 rounded-lg mx-6 sm:mx-0">
            <Image className="mx-auto pb-3" src={teaImg4} alt="" />
            <h3 className="text-2xl font-extrabold">Green Tea</h3>
            <p>Odit assumenda facere est tempore pariatur.</p>
          </div>
        </div>
      </div>
    );
};

export default FeaturedTeaProducts;