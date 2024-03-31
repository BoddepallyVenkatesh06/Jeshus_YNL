import { Link } from "react-router-dom";
import staticImages from "../../utils/images";
import { IoMdPhotos } from "react-icons/io";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { FaLongArrowAltLeft } from "react-icons/fa";

const GalleryAlbumScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <main className="content-wrapper">
      <div className="pg-gallery-album pb-12">
        <div
          className="mb-8 h-[200px] flex items-center"
          style={{
            background: `linear-gradient(rgba(36, 110, 185, 0.4), rgba(0, 0, 0, 0.5)), url(${staticImages.album_banner}) center/cover no-repeat fixed`,
          }}
        >
          <div className="container">
            <h2 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2 font-lora">
              Our Photo Albums
            </h2>
            <p className="text text-white drop-shadow-lg">
              The photo albums of all the events and celebrations.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="section-content mb-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 grid-cols-1 gap-4 lg:gap-6">
              <Link
                to="/gallery/1"
                className="h-[280px] w-[90%] mx-auto rounded-lg shadow-normal relative dark-overlay cursor-pointer group stack"
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
                to="/gallery/1"
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
                to="/gallery/1"
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
                to="/gallery/1"
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
                to="/gallery/1"
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
                to="/gallery/1"
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
                to="/gallery/1"
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
                to="/gallery/1"
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
          </div>
          <div className="flex items-center justify-center mt-10">
            <Link
              to="/"
              className="relative inline-flex items-center gap-1 rounded border border-red bg-red px-3 py-2 pl-4 text-base text-white font-medium text-gray-500 hover:border-red hover:bg-white hover:text-red"
              href="/archive"
            >
              <span>Lore More</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryAlbumScreen;
