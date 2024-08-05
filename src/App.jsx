import Image1 from "./assets/images/desktop-image-hero-1.jpg";
import Image2 from "./assets/images/desktop-image-hero-2.jpg";
import Image3 from "./assets/images/desktop-image-hero-3.jpg";
import Image1Mobile from "./assets/images/mobile-image-hero-1.jpg";
import Image2Mobile from "./assets/images/mobile-image-hero-2.jpg";
import Image3Mobile from "./assets/images/mobile-image-hero-3.jpg";
import ImageAboutDark from "./assets/images/image-about-dark.jpg";
import ImageAboutLight from "./assets/images/image-about-light.jpg";
import Arrow from "./assets/icons/icon-arrow.svg";
import Back from "./assets/icons/icon-angle-left.svg";
import Next from "./assets/icons/icon-angle-right.svg";
import Hamburger from "./assets/icons/icon-hamburger.svg";
import CloseHamburger from "./assets/icons/icon-close.svg";
import { Carousel, IconButton } from "@material-tailwind/react";
import { useState, useEffect, useRef } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const navBarControl = useRef();

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      const nodeList = document.querySelectorAll(".next");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].click();
      }
    } else if (event.key === "ArrowRight") {
      const nodeList = document.querySelectorAll(".prev");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].click();
      }
    }
  });

  const handleNavbar = () => {
    if (navBarControl.current.classList.contains("top-[-100px]")) {
      navBarControl.current.classList.replace("top-[-100px]", "top-0");
      navBarControl.current.classList.replace(
        "translate-y-0",
        "translate-y-[100px]"
      );
    } else if (navBarControl.current.classList.contains("top-0")) {
      navBarControl.current.classList.replace("top-0", "top-[-100px]");
      navBarControl.current.classList.replace(
        "translate-y-[100px]",
        "translate-y-0"
      );
    }
  };

  const clickerLinkPrevious = () => {
    document.getElementById("previous").click();
  };

  const clickerLinkNext = () => {
    document.getElementById("next").click();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function previousArrow(handle) {
    const handleClick = () => {
      handle();
      clickerLinkPrevious();
    };

    return (
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handleClick}
        className="!absolute top-[59.8vmin] left-[60vw] -translate-y-1/2 bg-black p-[2.5vw] rounded-none z-10 hover:bg-black hover:opacity-50 prev"
      >
        <img src={Back} className="w-[20px]" alt="Previous" />
      </IconButton>
    );
  }

  function nextArrow(handle) {
    const handleClick = () => {
      handle();
      clickerLinkNext();
    };

    return (
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handleClick}
        className="!absolute top-[59.8vmin] left-[65vw] -translate-y-1/2 bg-black p-[2.5vw] rounded-none z-10 hover:bg-black hover:opacity-50 next"
      >
        <img src={Next} className="w-[20px]" alt="Next" />
      </IconButton>
    );
  }

  function previousArrowMobile(handle) {
    const handleClick = () => {
      handle();
      clickerLinkPrevious();
    };

    return (
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handleClick}
        className="!absolute bottom-[-24px] !right-12 -translate-y-2/4 p-6 bg-black rounded-none prev"
      >
        <img src={Back} className="w-[15px]" alt="Previous" />
      </IconButton>
    );
  }

  function nextArrowMobile(handle) {
    const handleClick = () => {
      handle();
      clickerLinkNext();
    };

    return (
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handleClick}
        className="!absolute bottom-[-24px] !right-0 -translate-y-2/4 p-6 bg-black rounded-none next"
      >
        <img src={Next} className="w-[15px]" alt="Next" />
      </IconButton>
    );
  }

  return (
    <>
      {isMobile ? (
        <div className="flex justify-center">
          <header
            ref={navBarControl}
            className="transition-all ease-in-out absolute p-8 max-w-[811px] w-full xl:max-w-full top-[-100px] bg-white z-[11]"
          >
            <div className="flex justify-between items-center max-w-[811px] w-full xl:max-w-full">
              <img
                src={CloseHamburger}
                onClick={handleNavbar}
                className="w-[20px] h-[20px] mr-8"
                alt=""
              />
              <div className="flex justify-around items-center">
                <p className="cursor-pointer text-lg text-black mr-8">home</p>
                <p className="cursor-pointer text-lg text-black mr-8">shop</p>
                <p className="cursor-pointer text-lg text-black mr-8">about</p>
                <p className="cursor-pointer text-lg text-black ">contact</p>
              </div>
            </div>
          </header>
          <div className="flex justify-center">
            <header className="absolute z-10 max-w-[811px] w-full xl:max-w-full mt-10">
              <div className="grid grid-cols-3 items-center">
                <img
                  src={Hamburger}
                  onClick={handleNavbar}
                  className="w-[25px] ml-4"
                  alt=""
                />
                <div className="flex justify-center">
                  <p className="text-4xl xl:mr-16 justify-center">room</p>
                </div>
              </div>
            </header>
          </div>
        </div>
      ) : (
        <header className="absolute flex m-16 items-center z-10">
          <div className="cursor-pointer text-4xl mr-16">room</div>
          <div className="flex p-2">
            <p className="cursor-pointer ease-in-out text-lg mr-8 hover:border-b-2">
              home
            </p>
            <p className="cursor-pointer ease-in-out text-lg mr-8 hover:border-b-2">
              shop
            </p>
            <p className="cursor-pointer ease-in-out text-lg mr-8 hover:border-b-2">
              about
            </p>
            <p className="cursor-pointer ease-in-out text-lg mr-8 hover:border-b-2">
              contact
            </p>
          </div>
        </header>
      )}

      {isMobile ? (
        <div className="flex flex-col items-center">
          <div className="max-w-[811px] w-full xl:max-w-full">
            <Carousel
              loop
              prevArrow={({ handlePrev }) => previousArrowMobile(handlePrev)}
              nextArrow={({ handleNext }) => nextArrowMobile(handleNext)}
              className="relative"
              navigation={() => <div className="!hidden"></div>}
            >
              <img
                src={window.innerWidth < 600 ? Image1Mobile : Image1}
                className="w-[811px] object-cover col-span-3"
                alt=""
              />
              <img
                src={window.innerWidth < 600 ? Image2Mobile : Image2}
                className="w-[811px] object-cover col-span-3"
                alt=""
              />
              <img
                src={window.innerWidth < 600 ? Image3Mobile : Image3}
                className="w-[811px] object-cover col-span-3"
                alt=""
              />
            </Carousel>

            <Carousel
              loop
              prevArrow={({ handlePrev }) => (
                <IconButton
                  id="previous"
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!hidden prev"
                >
                  <p className="text-black hidden">Previous</p>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  id="next"
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!hidden next"
                >
                  <p className="text-black hidden">Next</p>
                </IconButton>
              )}
              navigation={() => <div className="!hidden"></div>}
              className="relative"
            >
              <div className="flex flex-col justify-center w-full items-center xl:col-span-2 mb-8 mt-8 xl:mb-12">
                <div className="flex flex-col justify-center w-[80%] xl:w-[460px]">
                  <p className="text-5xl text-black mb-8 font-[600] tracking-tighter">
                    Discover innovative ways to decorate
                  </p>
                  <p className="text-lg text-cgrey-100 font-medium">
                    We provide unmatched quality, comfort, and style for
                    property owners across the country. Our experts combine form
                    and function in bringing your vision to life. Create a room
                    in your own style with our collection and make your property
                    a reflection of you and what you love.
                  </p>
                  <div className="transition cursor-pointer flex mt-8 hover:opacity-50">
                    <p className="text-base xl:text-lg text-black tracking-[0.75em] xl:tracking-[1em] mr-4 font-medium">
                      SHOP NOW
                    </p>
                    <img src={Arrow} className="w-[75px] h-[auto]" alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center w-full items-center xl:col-span-2 mb-8 mt-8 xl:mb-12">
                <div className="flex flex-col justify-center w-[80%] xl:w-[460px]">
                  <p className="text-5xl text-black mb-8 font-[600] tracking-tighter">
                    We are available all across the globe
                  </p>
                  <p className="text-lg text-cgrey-100 font-medium">
                    With stores all over the world, it's easy for you to find
                    furniture for your home or place of business. Locally, we're
                    in most major cities throughout the country. Find the branch
                    nearest you using our store locator. Any questions? Don't
                    hesitate to contact us today.
                  </p>
                  <div className="transition cursor-pointer flex mt-8 hover:opacity-50">
                    <p className="text-base xl:text-lg text-black tracking-[0.75em] xl:tracking-[1em] mr-4 font-medium">
                      SHOP NOW
                    </p>
                    <img src={Arrow} className="w-[75px] h-[auto]" alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center w-full items-center xl:col-span-2 mb-8 mt-8 xl:mb-12">
                <div className="flex flex-col justify-center w-[80%] xl:w-[460px]">
                  <p className="text-5xl text-black mb-8 font-[600] tracking-tighter">
                    Manufactured with the best materials
                  </p>
                  <p className="text-lg text-cgrey-100 font-medium">
                    Our modern furnitures provide a high level of quality. Our
                    company has invested in advanced technology to ensure that
                    every product is made as perfect and as consistent as
                    possible. With three decades of experiences in this
                    industry, we understand what customers want for their home
                    and office.
                  </p>
                  <div className="transition cursor-pointer flex mt-8 hover:opacity-50">
                    <p className="text-base xl:text-lg text-black tracking-[0.75em] xl:tracking-[1em] mr-4 font-medium">
                      SHOP NOW
                    </p>
                    <img src={Arrow} className="w-[75px] h-[auto]" alt="" />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-5 z-0">
            <Carousel
              loop
              id="paragraph-carousel"
              className="col-span-3 static"
              prevArrow={({ handlePrev }) => previousArrow(handlePrev)}
              nextArrow={({ handleNext }) => nextArrow(handleNext)}
              navigation={() => <div className="!hidden"></div>}
            >
              <img
                id="image-1"
                src={Image1}
                className="w-[60vw] h-[65vh] object-cover col-span-3"
                alt=""
              />
              <img
                id="image-2"
                src={Image2}
                className="w-[60vw] h-[65vh] object-cover col-span-3"
                alt=""
              />
              <img
                id="image-3"
                src={Image3}
                className="w-[60vw] h-[65vh] object-cover col-span-3"
                alt=""
              />
            </Carousel>

            <div className="paragraph flex justify-center xl:col-span-2">
              <Carousel
                loop
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    id="previous"
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!hidden !absolute top-2/4 left-4 -translate-y-2/4 prev"
                  >
                    <p className="text-black hidden">Previous</p>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    id="next"
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!hidden !absolute top-2/4 !right-4 -translate-y-2/4 next"
                  >
                    <p className="text-black hidden">Next</p>
                  </IconButton>
                )}
                className="mt-16"
                navigation={() => <div className="!hidden"></div>}
              >
                <div
                  id="0"
                  className="inner flex flex-col justify-center w-full items-center xl:col-span-2 mb-8 xl:mb-12"
                >
                  <div className="flex flex-col justify-center w-[80%] xl:w-[460px]">
                    <p className="text-5xl text-black mb-8 font-[600] tracking-tighter">
                      Discover innovative ways to decorate
                    </p>
                    <p className="text-lg text-cgrey-100 font-medium">
                      We provide unmatched quality, comfort, and style for
                      property owners across the country. Our experts combine
                      form and function in bringing your vision to life. Create
                      a room in your own style with our collection and make your
                      property a reflection of you and what you love.
                    </p>
                    <div className="transition cursor-pointer flex mt-8 hover:opacity-50">
                      <p className="text-base xl:text-lg text-black tracking-[0.75em] xl:tracking-[1em] mr-4 font-medium">
                        SHOP NOW
                      </p>
                      <img src={Arrow} className="w-[75px] h-[auto]" alt="" />
                    </div>
                  </div>
                </div>

                <div
                  id="1"
                  className="inner flex flex-col justify-center w-full items-center xl:col-span-2 mb-8 xl:mb-12"
                >
                  <div className="flex flex-col justify-center w-[80%] xl:w-[460px]">
                    <p className="text-5xl text-black mb-8 font-[600] tracking-tighter">
                      We are available all across the globe
                    </p>
                    <p className="text-lg text-cgrey-100 font-medium">
                      With stores all over the world, it's easy for you to find
                      furniture for your home or place of business. Locally,
                      we're in most major cities throughout the country. Find
                      the branch nearest you using our store locator. Any
                      questions? Don't hesitate to contact us today.
                    </p>
                    <div className="transition cursor-pointer flex mt-8 hover:opacity-50">
                      <p className="text-base xl:text-lg text-black tracking-[0.75em] xl:tracking-[1em] mr-4 font-medium">
                        SHOP NOW
                      </p>
                      <img src={Arrow} className="w-[75px] h-[auto]" alt="" />
                    </div>
                  </div>
                </div>

                <div
                  id="2"
                  className="inner flex flex-col justify-center w-full items-center xl:col-span-2 mb-8 xl:mb-12"
                >
                  <div className="flex flex-col justify-center w-[80%] xl:w-[460px]">
                    <p className="text-5xl text-black mb-8 font-[600] tracking-tighter">
                      Manufactured with the best materials
                    </p>
                    <p className="text-lg text-cgrey-100 font-medium">
                      Our modern furnitures provide a high level of quality. Our
                      company has invested in advanced technology to ensure that
                      every product is made as perfect and as consistent as
                      possible. With three decades of experiences in this
                      industry, we understand what customers want for their home
                      and office.
                    </p>
                    <div className="transition cursor-pointer flex mt-8 hover:opacity-50">
                      <p className="text-base xl:text-lg text-black tracking-[0.75em] xl:tracking-[1em] mr-4 font-medium">
                        SHOP NOW
                      </p>
                      <img src={Arrow} className="w-[75px] h-[auto]" alt="" />
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </>
      )}

      <div className="flex justify-center">
        <div className="grid grid-row-3 xl:grid-cols-[30vw_40vw_30vw] max-w-[811px] w-full xl:max-w-full">
          <img
            src={ImageAboutDark}
            className="w-[810px] h-[35vh] object-cover"
            alt=""
          />
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col w-[80%] xl:w-[70%] mt-16 xl:mt-0 mb-12 xl:mb-0">
              <p className="text-base xl:text-lg text-black mb-4 xl:mb-8 font-[700] tracking-[.5em]">
                ABOUT OUR FURNITURE
              </p>
              <p className="text-lg text-cgrey-100 font-medium">
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interest and what inspires
                you. Find the furniture pieces you need, from traditional to
                contemporary styles or anything in between. Product specialists
                are available to help you create your dream space.
              </p>
            </div>
          </div>

          <img
            src={ImageAboutLight}
            className="w-[810px] h-[35vh] object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
