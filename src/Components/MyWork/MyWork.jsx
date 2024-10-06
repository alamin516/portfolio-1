import { Link } from "react-router-dom";
import "./MyWork.css";
const MyWork = () => {
  return (
    <div
      id="projects"
      className="services flex flex-col items-center justify-center gap-[80px] md:mx-[10%] mx-[5%] lg:my-[80px] my-10"
    >
      <div className="relative">
        <h1 className="py-0 lg:px-[30px] lg:text-[60px] text-[40px]  font-semibold">
          My Latest Works
        </h1>
        <img
          src="/assets/theme_pattern.svg"
          className="absolute bottom-0 right-0 z-[-1] lg:w-[190px] w-[120px]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] justify-center items-center text-center ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-[10px] text-left flex flex-col gap-[10px] border-2 border-white rounded-[10px] h-[250px] hover:scale-[1.05] hover:border-[#ff00ff]  transition-all duration-300 overflow-hidden cursor-pointer group relative"
          >
            <a href={project.url} target="_black">
              <div className="w-full h-[100%]">
                <img src={project.image} alt={project.title}/>
              </div>
              <h1
                className="lg:text-[30px] text-base font-extrabold bg-[#3f0028] absolute bottom-1/2 w-full text-center opacity-0 group-hover:bottom-[15%] group-hover:opacity-100 transition-all duration-500 ease-in-out z-20"
                style={{
                  background:
                    "linear-gradient(270deg, #df8908 50%, #b415ff 100%)",
                  backgroundClip: "text",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                }}
              >
                {project.title}
              </h1>
              <span className="bg-[#000]/0 group-hover:bg-[#000]/30 backdrop-blur-none group-hover:backdrop-blur-[5px] absolute top-0 left-0 w-full h-full z-[1] transition-all duration-500 ease-in-out"></span>

            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;

const projects = [
  {
    id: 1,
    title: "RH Construction",
    description: "This is a description of project 1",
    image:
      "/assets/images/rhconstructionusa.png",
    url: "https://www.rhconstructionusa.com/",
  },
  {
    id: 2,
    title: "Book-Berry",
    description: "This is a description of project 2",
    image:
      "/assets/images/book-berry-vercel-app.png",
    url: "https://book-berry.vercel.app/",
  },
  {
    id: 3,
    title: "Health Coach",
    description: "This is a description of project 3",
    image:
      "https://portfolio-56f42.web.app/static/media/gym.de16c5d40500af89f7a9.png",
    url: "https://health-coach-4ecad.web.app/",
  },
  {
    id: 4,
    title: "Car Dealer",
    description: "This is a description of project 4",
    image:
      "https://portfolio-56f42.web.app/static/media/car.b55f6daa3a6018dcbcfb.png",
    url: "https://car-dealer-42617.web.app/",
  },
  {
    id: 5,
    title: "Code Academy",
    description: "This is a description of project 5",
    image:
      "https://portfolio-56f42.web.app/static/media/coder.676cb55225e92cd18f28.png",
    url: "https://code-academy-906db.web.app/",
  },
];
