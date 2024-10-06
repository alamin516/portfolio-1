import "./Services.css";
const Services = () => {
  return (
    <div
      id="services"
      className="services flex flex-col items-center justify-center gap-[80px] md:mx-[10%] mx-[5%] lg:my-[80px]"
    >
      <div className="relative">
        <h1 className="py-0 lg:px-[30px] lg:text-[60px] text-[40px]  font-semibold">
          My Services
        </h1>
        <img
          src="/assets/theme_pattern.svg"
          className="absolute bottom-0 right-0 z-[-1] lg:w-[190px] w-[120px]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] justify-center items-center text-center ">
        {services.map((service, i) => (
          <div key={i} className="p-[30px] text-left flex flex-col gap-[10px] border-2 border-white rounded-[10px] h-[250px] hover:scale-[1.05] hover:border-[#ff00ff] hover:bg-[#3f0028] transition-all duration-300">
            <h3>{i + 1}</h3>
            <h1
              className="text-[30px] font-extrabold"
              style={{
                background:
                  "linear-gradient(270deg, #df8908 50%, #b415ff 100%)",
                backgroundClip: "text",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              {service.title}
            </h1>

            <div className="flex items-center gap-2.5 py-2">
              <p>Read More</p>
              <img src="/assets/arrow_icon.svg" className="w-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I build fast, scalable, and secure web applications using modern technologies such as React",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "I build mobile applications for both Android and iOS using React Native and Flutter",
  },
  {
    id: 3,
    title: "E-commerce Development",
    description:
      "I build e-commerce websites and applications using Shopify and WooCommerce",
  },
];
