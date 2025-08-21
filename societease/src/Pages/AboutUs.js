import React from "react";
import Logo from "../assets/logo.png";
import { MdAutoAwesome } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section
      id="about-section"
      className="flex justify-between items-center py-16 px-4 md:px-12 bg-black text-white"
    >
      {/* about left  */}
      <div className="about-left">
        <img
          src={Logo}
          alt="hero"
          className="w-96 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* about right  */}
      <div className="about-right w-1/2">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          SocietEase is a project dedicated to simplifying and enhancing the
          lives of residents within residential societies. Our mission is
          encapsulated in the project's slogan: "SocietEase: Making your Living
          Simpler and Easier." We recognize the myriad challenges faced by
          society members today and aim to address them through practical
          solutions delivered via a centralized platform.
        </p>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="flex items-center">
            <MdAutoAwesome
              icon={FaCheckCircle}
              className="text-9xl text-green-400 mr-2"
            />
            <p className="text-lg leading-relaxed">
              {" "}
              Members can conveniently receive maintenance updates, read
              notices, providing them with greater convenience and efficiency.
            </p>
          </div>
          <div className="flex items-center">
            <MdAutoAwesome
              icon={FaCheckCircle}
              className="text-9xl text-green-400 mr-2"
            />
            <p className="text-lg leading-relaxed">
              One of our key features is the ability for members to report any
              problems or issues they encounter,{" "}
            </p>
          </div>
          <div className="flex items-center">
            <MdAutoAwesome
              icon={FaCheckCircle}
              className="text-9xl text-green-400 mr-2"
            />
            <p className="text-lg leading-relaxed">
              We place a strong emphasis on upholding social norms within
              societies, offering features that facilitate online polls to
              simplify decision-making processes during society meetings.
            </p>
          </div>
          <div className="flex items-center">
            <MdAutoAwesome
              icon={FaCheckCircle}
              className="text-9xl text-green-400 mr-2"
            />
            <p className="text-lg leading-relaxed">
              our platform enables society committees to securely manage all
              account records online, ensuring transparency and accountability
              in financial matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
