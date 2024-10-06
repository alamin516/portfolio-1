import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-[30px] md:mx-[10%] mx-[5%]">
      <div className="w-full flex flex-col lg:flex-row justify-around">
        <div className="flex flex-col gap-[30px]">
          <div className="relative">
            <h1 className="lg:text-[45px] text-[30px] font-medium">Tonmoy</h1>
            <img
              src="/assets/theme_pattern.svg"
              className="absolute bottom-0 left-[115px] z-[-1] w-[70px] h-[15px] mb-2.5"
            />
          </div>
          <p className="text-lg mb-5 lg:mb-0">
            I am Mehedi Hasan Tonmoy, A passionate Front-End Developer from
            Bangladesh.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end gap-[30px]">
          <a
            href="https://www.facebook.com/mehedihasan.tonmoy.7161/"
            target="_blank"
            className="h-[50px]"
          >
            {" "}
            <FaFacebook className="md:mt-10 text-4xl rounded-full hover:text-[#da7c25]" />
          </a>
          <a href="https://github.com/tonmoy3673" target="_blank">
            {" "}
            <FaGithub className="md:mt-10 text-4xl rounded-full hover:text-[#da7c25]" />
          </a>
          <a
            href="https://www.linkedin.com/in/mehedi-hasan-tonmoy/"
            target="_blank"
          >
            {" "}
            <FaLinkedin className="md:mt-10 text-4xl rounded-full hover:text-[#da7c25]" />
          </a>
        </div>
      </div>
      <hr className="bg-white"/>
      <div className="flex lg:flex-row flex-col justify-between text-lg">
        <p className="footer-bottom-left">
          © 2024 Mehedi Hasan Tonmoy. All rights reserved.
        </p>
        <div className="flex gap-[30px] mb-10">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
