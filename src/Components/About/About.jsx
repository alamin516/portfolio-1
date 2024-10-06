import "./About.css";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-[80px] md:mx-[10%] mx-[5%] lg:my-[80px]"
    >
      <div className="relative">
        <h1 className="py-0 lg:px-[30px] lg:text-[60px] text-[40px]  font-semibold">About Me</h1>
        <img
          src="/assets/theme_pattern.svg"
          className="absolute bottom-0 right-0 z-[-1] lg:w-[190px] w-[120px]"
        />
      </div>
      <div className="flex lg:flex-row flex-col gap-20">
        <div className="800px:w-[300px] rounded-[20px]">
          <img
            src="/assets/tonmoy.jpg"
            alt="tonmoy"
            className="800px:w-[300px] w-full h-[400px] object-cover 800px:object-[-170px] transform rounded-[10px]"
            style={{ transform: "rotateY(180deg)" }}
          />
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="text-lg font-medium">
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
            {/* <p>I consider myself a quick learner, a self-motivated, responsible, disciplined and deadline-oriented person who can work under pressure and solve problems in a critical situation with analytical knowledge and the latest technology.</p> */}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-[5px] items-center duration-300 hover:scale-105 transition-transform">
              <p className="min-w-[150px] text-lg font-medium">HTML & CSS</p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-[50px]"
                style={{
                  width: "60%",
                  background:
                    "linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%)",
                }}
              />
            </div>
            <div className="flex gap-[5px] items-center duration-300 hover:scale-105 transition-transform">
              <p className="min-w-[150px] text-lg font-medium">Tailwind CSS</p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-[50px]"
                style={{
                  width: "70%",
                  background:
                    "linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%)",
                }}
              />
            </div>
            <div className="flex gap-[5px] items-center duration-300 hover:scale-105 transition-transform">
              <p className="min-w-[150px] text-lg font-medium"> Bootstrap </p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-[50px]"
                style={{
                  width: "90%",
                  background:
                    "linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%)",
                }}
              />
            </div>
            <div className="flex gap-[5px] items-center duration-300 hover:scale-105 transition-transform">
              <p className="min-w-[150px] text-lg font-medium"> JavaScript </p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-[50px]"
                style={{
                  width: "70%",
                  background:
                    "linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%)",
                }}
              />
            </div>
            <div className="flex gap-[5px] items-center duration-300 hover:scale-105 transition-transform">
              <p className="min-w-[150px] text-lg font-medium"> React JS </p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-[50px]"
                style={{
                  width: "70%",
                  background:
                    "linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%)",
                }}
              />
            </div>
            <div className="flex gap-[5px] items-center duration-300 hover:scale-105 transition-transform">
              <p className="min-w-[150px] text-lg font-medium"> Next JS </p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-[50px]"
                style={{
                  width: "20%",
                  background:
                    "linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%)",
                }}
              />
            </div>
            <div className="flex gap-[5px] items-center duration-300 hover:scale-105 transition-transform">
              <p className="min-w-[150px] text-lg font-medium">Node JS </p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-[50px]"
                style={{
                  width: "50%",
                  background:
                    "linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%)",
                }}
              />
            </div>
            <div className="flex gap-[5px] items-center duration-300 hover:scale-105 transition-transform">
              <p className="min-w-[150px] text-lg font-medium">Express JS </p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-[50px]"
                style={{
                  width: "50%",
                  background:
                    "linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%)",
                }}
              />
            </div>
            <div className="flex gap-[5px] items-center duration-300 hover:scale-105 transition-transform">
              <p className="min-w-[150px] text-lg font-medium">MongoDB </p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-[50px]"
                style={{
                  width: "40%",
                  background:
                    "linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex w-full justify-around mb-[80px]">
        <div className="flex flex-col items-center justify-center gap-1 duration-500 hover:scale-[1.12]">
          <h1
            className="lg:text-[40px] text-[28px] font-bold bg-clip-text"
            style={{
              background:
                "linear-gradient(270deg, #df8908 50.41%, #b415ff 90.25%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            1.5+
          </h1>
          <p className="lg:text-lg text-[12px] text-center font-medium">YEARS OF EXPERIENCE</p>
        </div>
        <hr className="bg-[#ddd] block w-[2px] h-auto" />
        <div className="flex flex-col items-center justify-center gap-1 duration-500 hover:scale-[1.12]">
          <h1
            className="lg:text-[40px] text-[28px] font-bold bg-clip-text"
            style={{
              background:
                "linear-gradient(270deg, #df8908 50.41%, #b415ff 90.25%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            25+
          </h1>
          <p className="lg:text-lg text-[12px] text-center font-medium ">PROJECTS COMPLETED</p>
        </div>
        <hr className="bg-[#ddd] block w-[2px] h-auto" />
        <div className="flex flex-col items-center justify-center gap-1 duration-500 hover:scale-[1.12]">
          <h1
            className="lg:text-[40px] text-[28px] font-bold bg-clip-text"
            style={{
              background:
                "linear-gradient(270deg, #df8908 50.41%, #b415ff 90.25%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            5+
          </h1>
          <p className="lg:text-lg text-[12px] text-center font-medium">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
