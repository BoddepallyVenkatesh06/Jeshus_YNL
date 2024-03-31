import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import staticImages from "../../utils/images";
import Title from "./Title";
import { EventDialog } from "./EventDialog";
import { useState } from "react";
import Slider from "react-slick";
import CustomNextArrow from "../common/CustomNextArrow";
import CustomPrevArrow from "../common/CustomPrevArrow";
import { FaClock } from "react-icons/fa6";

const Events = () => {
  const [eventDialogOpen, setEventDialogOpen] = useState(false);
  const handleEventDialogOpen = () => setEventDialogOpen((cur) => !cur);

  const onEventDialogOpen = (e) => {
    e.preventDefault();
    handleEventDialogOpen();
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <EventDialog
        eventDialogOpen={eventDialogOpen}
        handleEventDialogOpen={handleEventDialogOpen}
      />
      <section className="py-8 bg-whitesmoke" id="events">
        <div className="container">
          <Title
            title={"upcoming events"}
            description={
              "Explore our upcoming church services and events schedule."
            }
          />
          <div className="section-content">
            <Slider
              nextArrow={<CustomNextArrow />}
              prevArrow={<CustomPrevArrow />}
              {...settings}
            >
              <div className="px-3">
                <div
                  className="notice-card group relative flex w-full mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg font-cera cursor-pointer"
                  onClick={onEventDialogOpen}
                  data-aos="fade-up"
                >
                  <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-dark/20 h-[220px] border-4 border-white">
                    <img
                      src={staticImages.notice1}
                      className="w-full h-full object-cover group-hover:scale-110 default-transition"
                    />
                    <div className="absolute z-10 top-0 rotate-180 left-3 border-t-[20px] border-t-transparent border-l-[36px] border-l-red border-r-[36px] border-r-red border-b-[80px] border-b-red shadow-lg">
                      <div className="absolute top-5 rotate-180 flex text-center right-1/2 translate-x-1/2 leading-[6px] gap-y-2 font-bold uppercase flex-col">
                        <span className="text-3xl">29</span>
                        <span>Dec</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:px-5 p-4 flex flex-col justify-between flex-1">
                    <div className="mb-3 flex items-start flex-col">
                      <div className="flex flex-col">
                        <div className="w-full text-xl xl:leading-8 text-gray-200 font-bold mb-3 font-lora">
                          2073 Annual Seminar With Congregation
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 my-1.5">
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaMapMarkerAlt className="text-dark" size={15} />
                            <p className="text-sm text-gray">
                              House of Worship, Lalitpur
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaCalendarAlt className="text-dark" size={13} />
                            <p className="text-sm text-gray">
                              <span className="mr-3">Dec 35, 2023</span>
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaClock className="text-dark" size={12} />
                            <p className="text-sm text-gray">
                              <span className="mr-3">10:00 AM -3:00 PM</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-x-2 mb-1 bg-red/5 py-2 px-2.5 border-r-4 border-red rounded">
                      <span className="w-[26px] h-[24px] red-gradient inline-flex items-center justify-center text-white rounded font-semibold">
                        1
                      </span>
                      <span className="font-semibold text-red">
                        Days Remaining
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3 mt-3 flex-wrap gap-y-2">
                      <button
                        className="btn bg-red capitalize py-1.5 px-2 text-center shadow-md flex-1 rounded whitespace-nowrap focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:scale-105 default-transition"
                        type="button"
                      >
                        Register Now
                      </button>
                      <button
                        className="btn bg-blue capitalize py-1.5 px-3 text-center shadow-md flex-1 whitespace-nowrap rounded focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:scale-105 default-transition"
                        type="button"
                      >
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div
                  className="notice-card group relative flex w-full mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg font-cera cursor-pointer"
                  data-aos="fade-up"
                  onClick={onEventDialogOpen}
                >
                  <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-dark/20 h-[220px] border-4 border-white">
                    <img
                      src={staticImages.notice2}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute z-10 top-0 rotate-180 left-3 border-t-[20px] border-t-transparent border-l-[36px] border-l-red border-r-[36px] border-r-red border-b-[80px] border-b-red shadow-lg">
                      <div className="absolute top-5 rotate-180 flex text-center right-1/2 translate-x-1/2 leading-[6px] gap-y-2 font-bold uppercase flex-col">
                        <span className="text-3xl">29</span>
                        <span>Dec</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:px-5 p-4 flex flex-col justify-between flex-1">
                    <div className="mb-3 flex items-start flex-col">
                      <div className="flex flex-col">
                        <div className="w-full text-xl xl:leading-8 text-gray-200 font-bold mb-3 font-lora">
                          2073 Annual Seminar With Congregation
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 my-1">
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaMapMarkerAlt className="text-dark" size={15} />
                            <p className="text-sm text-gray">
                              House of Worship, Lalitpur
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaCalendarAlt className="text-dark" size={13} />
                            <p className="text-sm text-gray">
                              <span className="mr-3">Dec 35, 2023</span>
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaClock className="text-dark" size={12} />
                            <p className="text-sm text-gray">
                              <span className="mr-3">10:00 AM -3:00 PM</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-x-2 mb-1 bg-green/5 py-2 px-2.5 border-r-4 border-green rounded">
                      <span className="w-[26px] h-[24px] green-gradient inline-flex items-center justify-center text-white rounded font-semibold">
                        10
                      </span>
                      <span className="font-semibold text-green">
                        Days Remaining
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3 mt-3 flex-wrap gap-y-2">
                      <button
                        className="btn bg-blue capitalize py-1.5 px-3 text-center shadow-md flex-1 whitespace-nowrap rounded focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:scale-105 default-transition"
                        type="button"
                      >
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div
                  className="notice-card group relative flex w-full mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg font-cera cursor-pointer"
                  data-aos="fade-up"
                  onClick={onEventDialogOpen}
                >
                  <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-dark/20 h-[220px] border-4 border-white">
                    <img
                      src={staticImages.notice3}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute z-10 top-0 rotate-180 left-3 border-t-[20px] border-t-transparent border-l-[36px] border-l-blue border-r-[36px] border-r-blue border-b-[80px] border-b-blue shadow-lg">
                      <div className="absolute top-5 rotate-180 flex text-center right-1/2 translate-x-1/2 leading-[6px] gap-y-2 font-bold uppercase flex-col">
                        <span className="text-3xl">29</span>
                        <span>Dec</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:px-5 p-4 flex flex-col justify-between flex-1">
                    <div className="mb-3 flex items-start flex-col">
                      <div className="flex flex-col">
                        <div className="w-full text-xl xl:leading-8 text-gray-200 font-bold mb-3 font-lora">
                          2073 Annual Seminar With Congregation
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 my-1">
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaMapMarkerAlt className="text-dark" size={15} />
                            <p className="text-sm text-gray">
                              House of Worship, Lalitpur
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaCalendarAlt className="text-dark" size={13} />
                            <p className="text-sm text-gray">
                              <span className="mr-3">Dec 35, 2023</span>
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaClock className="text-dark" size={12} />
                            <p className="text-sm text-gray">
                              <span className="mr-3">10:00 AM -3:00 PM</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-x-2 mb-1 bg-green/5 py-2 px-2.5 border-r-4 border-green rounded">
                      <span className="w-[26px] h-[24px] green-gradient inline-flex items-center justify-center text-white rounded font-semibold">
                        10
                      </span>
                      <span className="font-semibold text-green">
                        Days Remaining
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3 mt-3 flex-wrap gap-y-2">
                      <button
                        className="btn bg-red capitalize py-1.5 px-2 text-center shadow-md flex-1 rounded whitespace-nowrap focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:scale-105 default-transition"
                        type="button"
                      >
                        Register Now
                      </button>
                      <button
                        className="btn bg-blue capitalize py-1.5 px-3 text-center shadow-md flex-1 whitespace-nowrap rounded focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:scale-105 default-transition"
                        type="button"
                      >
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div
                  className="notice-card group relative flex w-full mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg font-cera cursor-pointer"
                  data-aos="fade-up"
                  onClick={onEventDialogOpen}
                >
                  <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-dark/20 h-[220px] border-4 border-white">
                    <img
                      src={staticImages.notice4}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute z-10 top-0 rotate-180 left-3 border-t-[20px] border-t-transparent border-l-[36px] border-l-red border-r-[36px] border-r-red border-b-[80px] border-b-red shadow-lg">
                      <div className="absolute top-5 rotate-180 flex text-center right-1/2 translate-x-1/2 leading-[6px] gap-y-2 font-bold uppercase flex-col">
                        <span className="text-3xl">29</span>
                        <span>Dec</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:px-5 p-4 flex flex-col justify-between flex-1">
                    <div className="mb-3 flex items-start flex-col">
                      <div className="flex flex-col">
                        <div className="w-full text-xl xl:leading-8 text-gray-200 font-bold mb-3 font-lora">
                          2073 Annual Seminar With Congregation
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 my-1">
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaMapMarkerAlt className="text-dark" size={15} />
                            <p className="text-sm text-gray">
                              House of Worship, Lalitpur
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaCalendarAlt className="text-dark" size={13} />
                            <p className="text-sm text-gray">
                              <span className="mr-3">Dec 35, 2023</span>
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaClock className="text-dark" size={12} />
                            <p className="text-sm text-gray">
                              <span className="mr-3">10:00 AM -3:00 PM</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-x-2 mb-1 bg-green/5 py-2 px-2.5 border-r-4 border-green rounded">
                      <span className="w-[26px] h-[24px] green-gradient inline-flex items-center justify-center text-white rounded font-semibold">
                        10
                      </span>
                      <span className="font-semibold text-green">
                        Days Remaining
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3 mt-3 flex-wrap gap-y-2">
                      <button
                        className="btn bg-red capitalize py-1.5 px-2 text-center shadow-md flex-1 rounded whitespace-nowrap focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:scale-105 default-transition"
                        type="button"
                      >
                        Register Now
                      </button>
                      <button
                        className="btn bg-blue capitalize py-1.5 px-3 text-center shadow-md flex-1 whitespace-nowrap rounded focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:scale-105 default-transition border-[1px]"
                        type="button"
                      >
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div
                  className="notice-card group relative flex w-full mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg font-cera cursor-pointer"
                  data-aos="fade-up"
                  onClick={onEventDialogOpen}
                >
                  <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-dark/20 h-[220px] border-4 border-white">
                    <img
                      src={staticImages.member1}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute z-10 top-0 rotate-180 left-3 border-t-[20px] border-t-transparent border-l-[36px] border-l-blue border-r-[36px] border-r-blue border-b-[80px] border-b-blue shadow-lg">
                      <div className="absolute top-5 rotate-180 flex text-center right-1/2 translate-x-1/2 leading-[6px] gap-y-2 font-bold uppercase flex-col">
                        <span className="text-3xl">29</span>
                        <span>Dec</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:px-5 p-4 flex flex-col justify-between flex-1">
                    <div className="mb-3 flex items-start flex-col">
                      <div className="flex flex-col">
                        <div className="w-full text-xl xl:leading-8 text-gray-200 font-bold mb-3 font-lora">
                          2073 Annual Seminar With Congregation
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 my-1">
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaMapMarkerAlt className="text-dark" size={15} />
                            <p className="text-sm text-gray">
                              House of Worship, Lalitpur
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaCalendarAlt className="text-dark" size={13} />
                            <p className="text-sm text-gray">
                              <span className="mr-3">Dec 35, 2023</span>
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex flex-row items-center">
                          <div className="inline-flex items-center gap-x-2">
                            <FaClock className="text-dark" size={12} />
                            <p className="text-sm text-gray">
                              <span className="mr-3">10:00 AM -3:00 PM</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-x-2 mb-1 bg-green/5 py-2 px-2.5 border-r-4 border-green rounded">
                      <span className="w-[26px] h-[24px] green-gradient inline-flex items-center justify-center text-white rounded font-semibold">
                        10
                      </span>
                      <span className="font-semibold text-green">
                        Days Remaining
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3 mt-3 flex-wrap gap-y-2">
                      <button
                        className="btn bg-red capitalize py-1.5 px-2 text-center shadow-md flex-1 rounded whitespace-nowrap focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:scale-105 default-transition"
                        type="button"
                      >
                        Register Now
                      </button>
                      <button
                        className="btn bg-blue capitalize py-1.5 px-3 text-center shadow-md flex-1 whitespace-nowrap rounded focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:scale-105 default-transition"
                        type="button"
                      >
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
