import { Link } from "react-router-dom";
import staticImages from "../../utils/images";
import Title from "./Title";

const Gallery = () => {
  return (
    <section className="py-8 bg-whitesmoke/50">
      <div className="container">
        <Title
          title={"our gallery"}
        />
        <div className="section-content mb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 grid-cols-1 gap-4 lg:gap-6">
            <Link
              to="/gallery"
              className="h-[280px] w-[90%] mx-auto rounded-lg shadow-normal relative dark-overlay cursor-pointer group stack block hover:scale-110"
              data-aos="fade-up"
            >
              <img
                className="h-full w-full object-cover default-transition"
                src={staticImages.gallery1}
                alt=""
              />
              <div className="absolute top-1 left-0 px-3 py-2.5 text-white z-10">
                <div className=" uppercase text-sm drop-shadow-lg font-semibold">
                  Worship 2022, Summer
                </div>
                <span className="text-sm">10 Photos</span>
              </div>
            </Link>

            <Link
              to="/gallery"
              className="h-[280px] w-[90%] mx-auto rounded-lg shadow-normal relative dark-overlay cursor-pointer group stack"
              data-aos="fade-up"
            >
              <img
                className="h-full w-full object-cover default-transition"
                src={staticImages.gallery2}
                alt=""
              />
              <div className="absolute top-1 left-0 px-3 py-2.5 text-white z-10">
                <div className=" uppercase text-sm drop-shadow-lg font-semibold">
                  Worship 2022, Summer
                </div>
                <span className="text-sm">10 Photos</span>
              </div>
            </Link>

            <Link
              to="/gallery"
              className="h-[280px] w-[90%] mx-auto rounded-lg shadow-normal relative dark-overlay cursor-pointer group stack"
              data-aos="fade-up"
            >
              <img
                className="h-full w-full object-cover default-transition"
                src={staticImages.gallery3}
                alt=""
              />
              <div className="absolute top-1 left-0 px-3 py-2.5 text-white z-10">
                <div className=" uppercase text-sm drop-shadow-lg font-semibold">
                  Worship 2022, Summer
                </div>
                <span className="text-sm">10 Photos</span>
              </div>
            </Link>

            <Link
              to="/gallery"
              className="h-[280px] w-[90%] mx-auto rounded-lg shadow-normal relative dark-overlay cursor-pointer group stack"
              data-aos="fade-up"
            >
              <img
                className="h-full w-full object-cover default-transition"
                src={staticImages.gallery4}
                alt=""
              />
              <div className="absolute top-1 left-0 px-3 py-2.5 text-white z-10">
                <div className=" uppercase text-sm drop-shadow-lg font-semibold">
                  Worship 2022, Summer
                </div>
                <span className="text-sm">10 Photos</span>
              </div>
            </Link>

            <Link
              to="/gallery"
              className="h-[280px] w-[90%] mx-auto rounded-lg shadow-normal relative dark-overlay cursor-pointer group stack"
              data-aos="fade-up"
            >
              <img
                className="h-full w-full object-cover default-transition"
                src={staticImages.gallery5}
                alt=""
              />
              <div className="absolute top-1 left-0 px-3 py-2.5 text-white z-10">
                <div className=" uppercase text-sm drop-shadow-lg font-semibold">
                  Worship 2022, Summer
                </div>
                <span className="text-sm">10 Photos</span>
              </div>
            </Link>

            <Link
              to="/gallery"
              className="h-[280px] w-[90%] mx-auto rounded-lg shadow-normal relative dark-overlay cursor-pointer group stack"
              data-aos="fade-up"
            >
              <img
                className="h-full w-full object-cover default-transition"
                src={staticImages.gallery6}
                alt=""
              />
              <div className="absolute top-1 left-0 px-3 py-2.5 text-white z-10">
                <div className=" uppercase text-sm drop-shadow-lg font-semibold">
                  Worship 2022, Summer
                </div>
                <span className="text-sm">10 Photos</span>
              </div>
            </Link>

            <Link
              to="/gallery"
              className="h-[280px] w-[90%] mx-auto rounded-lg shadow-normal relative dark-overlay cursor-pointer group stack"
              data-aos="fade-up"
            >
              <img
                className="h-full w-full object-cover default-transition"
                src={staticImages.temp1}
                alt=""
              />
              <div className="absolute top-1 left-0 px-3 py-2.5 text-white z-10">
                <div className=" uppercase text-sm drop-shadow-lg font-semibold">
                  Worship 2022, Summer
                </div>
                <span className="text-sm">10 Photos</span>
              </div>
            </Link>

            <Link
              to="/gallery"
              className="h-[280px] w-[90%] mx-auto rounded-lg shadow-normal relative dark-overlay cursor-pointer group stack"
              data-aos="fade-up"
            >
              <img
                className="h-full w-full object-cover default-transition"
                src={staticImages.temp2}
                alt=""
              />
              <div className="absolute top-1 left-0 px-3 py-2.5 text-white z-10">
                <div className=" uppercase text-sm drop-shadow-lg font-semibold">
                  Worship 2022, Summer
                </div>
                <span className="text-sm">10 Photos</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Link
              to="/gallery"
              className="relative inline-flex items-center gap-1 rounded border border-red bg-red px-3 py-2 pl-4 text-base text-white font-medium text-gray-500 hover:border-red hover:bg-white hover:text-red"
            >
              <span>See All Albums</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
