import toast from "react-hot-toast";
import "./Contact.css";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "0feabc17-69c3-4689-adc2-4326df278ffa");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      form.reset();
      toast.success("Email has been sent successfully!!");
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-[80px] md:mx-[10%] mx-[5%] lg:my-[80px] my-10">
      <div className="relative">
        <h1 className="py-0 lg:px-[30px] lg:text-[60px] text-[40px]  font-semibold">
          Contact
        </h1>
        <img
          src="/assets/theme_pattern.svg"
          className="absolute bottom-0 right-0 z-[-1] lg:w-[190px] w-[120px]"
        />
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-[150px] gap-10">
        <div className="lg:w-1/2 flex flex-col gap-[30px]">
          <h1 className="lg:text-[51px] text-[35px] font-bold" style={{
                background:
                  "linear-gradient(270deg, #df8908 50%, #b415ff 100%)",
                backgroundClip: "text",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}>Let's talk</h1>
          <p className="text-lg leading-[32px] text-[#d8d8d8]">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="flex flex-col gap-[30px] text-[#d8d8d8] text-xl">
            <div className="flex items-center gap-5">
              <img className="w-[30px]" src="/assets/mail_icon.svg" alt="email" />{" "}
              <p>meheditonmoy917@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <img className="w-[30px]" src="/assets/call_icon.svg" alt="phone" />{" "}
              <p>+8801966527486</p>
            </div>
            <div className="flex items-center gap-5">
              <img className="w-[30px]" src="/assets/location_icon.svg" />{" "}
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          {/* ============ form part =========== */}
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="border-none w-full h-[58px] pl-5 rounded-sm text-[#a0a0a0] text-lg"
              required
            />
            <label htmlFor="email">Your Email *</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="border-none w-full h-[58px] pl-5 rounded-sm text-[#a0a0a0] text-lg"
              required
            />
            <label htmlFor="message">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
              className="border-none w-full p-2.5 rounded-sm text-[#a0a0a0] text-lg bg-[#32323c]"
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
