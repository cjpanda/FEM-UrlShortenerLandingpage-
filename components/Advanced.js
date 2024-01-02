import Image from "next/image";
import brand from "../public/icon-brand-recognition.svg";
import detailed from "../public/icon-detailed-records.svg";
import fully from "../public/icon-fully-customizable.svg";

const Advanced = () => {
  return (
    <section className="bg-gray-100 pt-44 pb-10 lg:pb-40 ">
      <div className="max-width ">
        <h2 className="text-primary text-center text-4xl font-extrabold mb-3">
          Advanced Statistics
        </h2>
        <p className="text-center text-secondary mb-10 lg:mb-20">
          Track how your links are performing across the web <br />
          with our advanced statistics dashboard.
        </p>

        <div className="relative card  grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <div className="line" />
          <div className="bg-white p-5 rounded relative mb-5">
            <Image
              src={brand}
              alt=""
              className="p-2 bg-[#3B3054] rounded-full -mt-10 object-contain"
            />
            <h3 className="text-lg font-bold text-primary mb-2 mt-5 ">
              Brand Recognition
            </h3>
            <p className="text-secondary text-sm mb-2 leading-6">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="bg-white p-5 rounded  relative mb-5">
            <Image
              src={detailed}
              alt=""
              className="p-2 bg-[#3B3054] rounded-full -mt-10 object-contain"
            />
            <h3 className="text-lg font-bold text-primary mb-2 mt-5">
              Detailed Records
            </h3>
            <p className="text-secondary text-sm mb-2 leading-6">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="bg-white p-5 rounded relative mb-5">
            <Image
              src={fully}
              alt=""
              className="p-2 bg-[#3B3054] rounded-full -mt-10 object-contain"
            />
            <h3 className="text-lg font-bold text-primary mb-2 mt-5">
              Fully Customizable
            </h3>
            <p className="text-secondary text-sm mb-2 leading-6">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advanced;
