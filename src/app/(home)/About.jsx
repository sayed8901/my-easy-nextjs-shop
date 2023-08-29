import mainImg from "@/assets/components-photo.jpeg";
import partImg from "@/assets/435.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-2">
        <div className="lg:w-1/2 relative">
          <Image
            src={mainImg}
            alt="main-img"
            className="w-5/6 rounded-lg shadow-2xl"
          />
          <Image
            src={partImg}
            alt="part-img"
            className="absolute w-3/6 -bottom-5 right-10 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-8">
            We are committed to provide quality products with top-notch service
          </h1>
          <p>
            Welcome to our shop.
            <br />
            we are not just a store; we are a curation of passion, style, and
            quality. Our journey is built on a foundation of dedication and a
            commitment to delivering excellence.{" "}
          </p>
          <p className="py-6">
            From carefully selected products to an unrivaled shopping
            experience, we are here to make every moment memorable. Join us in
            exploring the stories that shape our brand and the values that drive
            us forward.{" "}
          </p>
          <button className="btn btn-error text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;