import { AiFillCheckCircle } from "react-icons/ai";
import staticImages from "../../utils/images";
import { BiSolidDonateHeart } from "react-icons/bi";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { Link } from "react-router-dom";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

const DonateScreen = () => {
  // smooth scroll on link click
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      // console.log("begin");
    });
    Events.scrollEvent.register("end", (to, element) => {
      // console.log("end");
    });
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  useEffect(() => scrollToTop(), []);
  return (
    <main className="content-wrapper">
      <div className="pg-gallery-album pb-12 bg-whitesmoke">
        <div
          className="py-16"
          style={{
            background: `linear-gradient(rgba(0, 0, 0,0.1), rgba(0, 0,0, 0.1)), url(${staticImages.donate_bg}) center/cover no-repeat`,
          }}
        >
          <div className="container">
            <div
              className="grid lg:grid-cols-2 bg-white min-h-[320px] max-w-[1000px] mx-auto rounded-lg shadow-normal overflow-hidden"
              data-aos="fade-up"
            >
              <div>
                <img
                  src={staticImages.donate_banner}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              <div className="px-6 py-8">
                <p className="text">
                  Every contribution directly impacts lives by spreading the
                  gospel, aiding the less fortunate, and supporting widows. We
                  ensure that every penny received is used with integrity and
                  purpose, funding events such as seminars, youth camps, and
                  training sessions that empower our community in their faith
                  journey.
                </p>
                <p className="text mt-3">
                  Join us in making a lasting impact; donate today and be a part
                  of God's extraordinary work through Yeshua New Life.
                </p>
                <ScrollLink
                  to="donate"
                  smooth={true}
                  duration={300}
                  offset={-200}
                  className="mt-4 cursor-pointer relative inline-flex items-center gap-x-2 rounded border border-red bg-red px-3 py-2 pl-4 text-base text-white font-medium text-gray-500 hover:border-red hover:bg-white hover:text-red"
                >
                  <span>Contribute</span>
                  <BiSolidDonateHeart />
                </ScrollLink>
              </div>
            </div>

            <div
              className="rounded-full border-2 shadow border-gray/10 w-20 h-20 flex items-center justify-center mx-auto my-8 bg-white relative after:absolute after:content-[''] after:bottom-full after:w-[2px] after:bg-gray/20 after:h-[34px] after:left-1/2 after:-translate-x-1/2 before:absolute before:content-[''] before:top-full before:w-[2px] before:bg-gray/20 before:h-[33px] before:left-1/2 before:-translate-x-1/2"
              data-aos="fade-up"
            >
              <img
                src={staticImages.donate}
                className="w-16 mx-auto rounded-full z-10"
                alt=""
              />
              <span className="animate-ping absolute bg-green rounded-full origin-center w-2/3 h-2/3"></span>
            </div>

            <div
              className="section-content grid lg:grid-cols-2 shadow-normal min-h-[500px] max-w-[1000px] rounded-lg overflow-hidden mx-auto"
              data-aos="fade-up"
              id="donate"
            >
              <div className="px-8 py-8 bg-white border-b-[1px] border-b-gray/5 lg:border-r-[1px] lg:border-r-gray/10 lg:border-b-0">
                <h3 className="text-3xl font-semibold mb-4 text-red flex flex-wrap gap-x-4 items-center">
                  <span className="font-lora">Help us do more!</span> <BiSolidDonateHeart />
                </h3>
                <div className="bg-gray/5 p-6 rounded">
                  <p className="text">
                    Each of you should give what you have decided in your heart
                    to give, not reluctantly or under compulsion, for God loves
                    a cheerful giver. And God is able to bless you abundantly,
                    so that in all things at all times, having all that you
                    need, you will abound in every good work.
                  </p>
                  <p className="italic font-semibold mt-4 text-dark">
                    2 Corinthians 9:6-8
                  </p>
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-6 font-lora">
                  Ways to Give
                </h3>
                <div className="flex flex-wrap gap-4 my-5">
                  <button
                    type="button"
                    className="max-w-[140px] rounded shadow h-[50px] p-1 relative hover:scale-110 default-transition"
                  >
                    <img
                      src={staticImages.pay_gateway1}
                      alt=""
                      className="object-center w-full h-full rounded"
                    />
                    <span className="absolute -top-[10px] -right-[10px]">
                      <AiFillCheckCircle size={24} className="text-green" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="max-w-[140px] rounded shadow h-[50px] p-1 relative hover:scale-110 default-transition"
                  >
                    <img
                      src={staticImages.pay_gateway2}
                      alt=""
                      className="object-center w-full h-full rounded"
                    />
                  </button>
                  <button
                    type="button"
                    className="max-w-[140px] rounded shadow h-[50px] p-1 relative hover:scale-110 default-transition"
                  >
                    <img
                      src={staticImages.pay_gateway3}
                      alt=""
                      className="object-center w-full h-full rounded"
                    />
                  </button>
                  <button
                    type="button"
                    className="max-w-[140px] rounded shadow h-[50px] p-1 relative hover:scale-110 default-transition "
                  >
                    <img
                      src={staticImages.pay_gateway4}
                      alt=""
                      className="object-center w-full h-full rounded"
                    />
                  </button>
                  <button
                    type="button"
                    className="max-w-[140px] rounded shadow h-[50px] p-1 relative hover:scale-110 default-transition"
                  >
                    <img
                      src={staticImages.pay_gateway5}
                      alt=""
                      className="object-center w-full h-full rounded"
                    />
                  </button>
                </div>
              </div>
              <div className="px-8 py-8 bg-white">
                <div className="max-w-[240px] mx-auto border-gray/10 border-[1px]">
                  <img src={staticImages.qr_sample} alt="" />
                </div>
                <div className="flex items-center justify-center mt-4 flex-wrap gap-x-3">
                  <img src={staticImages.giftbox} alt="" className="w-8 h-8" />
                  <p className="text italic text-sm font-semibold text-red">
                    Be a partaker of the mission & service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DonateScreen;
