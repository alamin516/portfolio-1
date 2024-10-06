import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";

const Hero = () => {
  const handleResume = () => {
    return <a href="https://drive.google.com/file/d/1zcZKRubGnHBuL99YN0CMROOfXXYUYuKZ/view?usp=drive_link" target="_blank"></a>
  }
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center lg:gap-[80px] gap-10 md:mx-[10%] mx-[5%] lg:my-[80px] lg:mt-[80px]"
    >
      <div className="flex flex-col gap-5 lg:gap-0">
        <div>
          <img
            src="/assets/hero.png"
            className="lg:w-[240px] w-[70%] !mx-auto md:mx-0"
          />
        </div>
        <div>
          <h1 className="lg:text-[65px] text-[40px]  lg:w-[65%] mx-auto capitalize text-center">
            <span className="hero-title text-center">
              I'm Mehedi Hasan Tonmoy,
            </span>
            <br />A passionate Front-End Developer from Bangladesh
          </h1>
          <p className="hero-text text-base text-center lg:w-[60%]  mx-auto">
            I have a ton of prior experience in web development from the
            Front-End point of view and am well-versed in coding for both Single
            Page Applications and larger multiple paged Websites.
          </p>
          <div className="hero-action flex justify-center">
            <div className="hero-connect ">
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                {" "}
                Contact
              </AnchorLink>
            </div>
            <div className="hero-resume">
              <div onClick={handleResume} className="hero-resume-button"><a href="https://drive.google.com/file/d/1zcZKRubGnHBuL99YN0CMROOfXXYUYuKZ/view?usp=drive_link" target="_blank">Resume</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
