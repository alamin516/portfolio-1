import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 300) {
  //     setIsSticky(true);
  //   }else{
  //     setIsSticky(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleMobile = () => {
    setShow(!show);
  };

  return (
    <>
      {isSticky ? (
        <>
          <div className="">
            <div
              className={`${
                isSticky ? "top-0 left-0 right-0" : "top-[-100%]"
              } fixed z-[99] transition-all duration-500 w-full bg-[#0d0518]/60 shadow-md backdrop:blur-[20px]`}
            >
              <div className="mx-[5%] lg:mx-[10%] py-[20px] flex justify-between items-center">
                {/* <img src='/assets/logo.svg' alt='logo'/> */}
                <div className="relative">
                  <h1 className="lg:px-[15px] text-[45px] font-semibold">
                    Tonmoy
                  </h1>
                  <img
                    src="/assets/theme_pattern.svg"
                    className="absolute bottom-0 right-0 z-[-1] w-[70px] h-[15px] mb-2.5"
                  />
                </div>
                <img
                  onClick={handleMobile}
                  src="/assets/menu_open.svg"
                  className="lg:hidden block cursor-pointer"
                  alt="nav-open"
                />
                <div className={`hidden lg:block`}>
                  <ul className="nav-menu ">
                    <img
                      src="/assets/menu_close.svg"
                      alt="nav-close"
                      className="nav-mob-close"
                    />
                    {["home", "about", "projects", "services", "contact"].map(
                      (item, i) => (
                        <li className="hover:text-[#da7c25] capitalize">
                          <AnchorLink
                            className="anchor-link"
                            offset={50}
                            href={`#${item}`}
                            onClick={() => setShow(false)}
                          >
                            <p onClick={() => setMenu(item)}>{item}</p>
                          </AnchorLink>
                          {menu === item ? (
                            <img
                              src="/assets/nav_underline.svg"
                              alt="underline"
                            />
                          ) : (
                            <></>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="nav-connect">
                  <AnchorLink
                    className="anchor-link"
                    offset={50}
                    href="#contact"
                  >
                    {" "}
                    Connect With Me
                  </AnchorLink>
                </div>
              </div>
              {/* Mobile Menu */}
              {show && (
                <div
                  className={`lg:hidden block absolute right-0 top-0 bottom-0`}
                >
                  <div className="h-[100%] z-[50]">
                    <ul className="nav-menu right: [-350px]">
                      <img
                        onClick={handleMobile}
                        src="/assets/menu_close.svg"
                        alt="nav-close"
                        className="nav-mod-close"
                      />
                      {["home", "about", "projects", "services", "contact"].map(
                        (item, i) => (
                          <li className="hover:text-[#da7c25] capitalize">
                            <AnchorLink
                              className="anchor-link"
                              offset={50}
                              href={`#${item}`}
                              onClick={() => setShow(false)}
                            >
                              <p onClick={() => setMenu(item)}>{item}</p>
                            </AnchorLink>
                            {menu === item ? (
                              <img
                                src="/assets/nav_underline.svg"
                                alt="underline"
                              />
                            ) : (
                              <></>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="transition-all duration-500">
            <div
              className={`transition-all duration-500 w-full`}
            >
              <div className="mx-[5%] lg:mx-[10%] py-[20px] flex justify-between items-center">
                {/* <img src='/assets/logo.svg' alt='logo'/> */}
                <div className="relative">
                  <h1 className="lg:px-[15px] text-[45px] font-semibold">
                    Tonmoy
                  </h1>
                  <img
                    src="/assets/theme_pattern.svg"
                    className="absolute bottom-0 right-0 z-[-1] w-[70px] h-[15px] mb-2.5"
                  />
                </div>
                <img
                  onClick={handleMobile}
                  src="/assets/menu_open.svg"
                  className="lg:hidden block cursor-pointer"
                  alt="nav-open"
                />
                <div className={`hidden lg:block`}>
                  <ul className="nav-menu ">
                    <img
                      src="/assets/menu_close.svg"
                      alt="nav-close"
                      className="nav-mob-close"
                    />
                    {["home", "about", "projects", "services", "contact"].map(
                      (item, i) => (
                        <li className="hover:text-[#da7c25] capitalize">
                          <AnchorLink
                            className="anchor-link"
                            offset={50}
                            href={`#${item}`}
                            onClick={() => setShow(false)}
                          >
                            <p onClick={() => setMenu(item)}>{item}</p>
                          </AnchorLink>
                          {menu === item ? (
                            <img
                              src="/assets/nav_underline.svg"
                              alt="underline"
                            />
                          ) : (
                            <></>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="nav-connect">
                  <AnchorLink
                    className="anchor-link"
                    offset={50}
                    href="#contact"
                  >
                    {" "}
                    Connect With Me
                  </AnchorLink>
                </div>
              </div>
              {/* Mobile Menu */}
              {show && (
                <div
                  className={`lg:hidden block absolute right-0 top-0 bottom-0`}
                >
                  <div className="h-[100%] z-[50]">
                    <ul className="nav-menu right: [-350px]">
                      <img
                        onClick={handleMobile}
                        src="/assets/menu_close.svg"
                        alt="nav-close"
                        className="nav-mod-close"
                      />
                      {["home", "about", "projects", "services", "contact"].map(
                        (item, i) => (
                          <li className="hover:text-[#da7c25] capitalize">
                            <AnchorLink
                              className="anchor-link"
                              offset={50}
                              href={`#${item}`}
                              onClick={() => setShow(false)}
                            >
                              <p onClick={() => setMenu(item)}>{item}</p>
                            </AnchorLink>
                            {menu === item ? (
                              <img
                                src="/assets/nav_underline.svg"
                                alt="underline"
                              />
                            ) : (
                              <></>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
