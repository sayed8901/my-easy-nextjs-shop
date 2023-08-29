import Image from "next/image";

const Contact = () => {
  return (
    <div className="hero min-h-screen">
      <div className="flex flex-col">
        <div className="text-center mb-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Contact Us
          </h1>
          <p className="py-6">
            <br />
            You can contact with us anytime without any hesitation.
            <br />
            You are always welcome in advance.
          </p>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <Image
              className="rounded-xl mx-4"
              src="https://images.unsplash.com/photo-1571805529673-0f56b922b359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60"
              alt="Contact"
              width={600}
              height={400}
            />
          </figure>
          <div className="card-body">
            <div className="text-2xl font-semibold flex flex-col mb-4 content-start">
              House No. 123, Road No. 45, SEL Center,
              <br /> Panthapath, Dhaka-1205, Bangladesh.
            </div>
            <p>
              Phone number: <b>+88 01915 158901</b>
            </p>
            <p>
              Email Address: <b>sayed91515@gmail.com</b>
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Drop a mail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
