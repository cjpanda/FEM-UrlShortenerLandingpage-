import Image from "next/image";
import hero from "../public/illustration-working.svg";

const Hero = () => {
  return (
    <>
      <section className="py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
          <div className="text-center md:text-left ">
            <h1 className="text-5xl lg:text-6xl mb-5 font-bold text-slate-800">
              More than just shorter links
            </h1>
            <p className="lg:text-lg text-secondary mb-10">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="flex justify-center items-center md:justify-start">
              <button className="btn btn-sm rounded-full">Get Started</button>
            </div>
          </div>
          <div>
            <Image src={hero} alt="hero" className="object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
