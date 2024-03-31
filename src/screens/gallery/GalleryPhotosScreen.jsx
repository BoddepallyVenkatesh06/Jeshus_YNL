import staticImages from "../../utils/images";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const GalleryPhotosScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <>
      <main className="content-wrapper">
        <div className="pg-gallery-album py-12 bg-gray/5">
          <div className="container">
            <div className="section-content mb-6">
              <div className="border-b border-b-gray/20 mb-5 flex justify-between text-sm">
                <div className="text text-dark flex items-center pb-2 pr-2 uppercase">
                  <p>
                    <span className="font-bold text-red font-lora">
                      Posted On:
                    </span>{" "}
                    16th July, 2023
                  </p>
                </div>
                <Link
                  to="/gallery"
                  type="button"
                  className="flex items-center gap-x-3 hover:text-red default-transition"
                >
                  <FaLongArrowAltLeft />
                  <span className="font-semibold text-base">Go Back</span>
                </Link>
              </div>
              <div className="mt-6 mb-10">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-2 font-lora">
                  2023 Youth Revival Meeting
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 grid-cols-1 gap-4 lg:gap-6">
                <div
                  className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white"
                  data-aos="fade-up"
                >
                  <img
                    className="h-full w-full object-cover group-hover:scale-110 default-transition"
                    src={staticImages.gallery1}
                    alt=""
                  />
                </div>

                <div
                  className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white"
                  data-aos="fade-up"
                >
                  <img
                    className="h-full w-full object-cover group-hover:scale-110 default-transition"
                    src={staticImages.gallery2}
                    alt=""
                  />
                </div>

                <div
                  className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white"
                  data-aos="fade-up"
                >
                  <img
                    className="h-full w-full object-cover group-hover:scale-110 default-transition"
                    src={staticImages.gallery3}
                    alt=""
                  />
                </div>

                <div
                  className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white"
                  data-aos="fade-up"
                >
                  <img
                    className="h-full w-full object-cover group-hover:scale-110 default-transition"
                    src={staticImages.gallery4}
                    alt=""
                  />
                </div>

                <div
                  className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white"
                  data-aos="fade-up"
                >
                  <img
                    className="h-full w-full object-cover group-hover:scale-110 default-transition"
                    src={staticImages.gallery5}
                    alt=""
                  />
                </div>

                <div
                  className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white"
                  data-aos="fade-up"
                >
                  <img
                    className="h-full w-full object-cover group-hover:scale-110 default-transition"
                    src={staticImages.gallery6}
                    alt=""
                  />
                </div>

                <div
                  className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white"
                  data-aos="fade-up"
                >
                  <img
                    className="h-full w-full object-cover group-hover:scale-110 default-transition"
                    src={staticImages.gallery1}
                    alt=""
                  />
                </div>

                <div
                  className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white"
                  data-aos="fade-up"
                >
                  <img
                    className="h-full w-full object-cover group-hover:scale-110 default-transition"
                    src={staticImages.gallery2}
                    alt=""
                  />
                </div>
              </div>

              <div className="gallery mx-auto mt-24">
                <span style={{ "--i": 1 }}>
                  <img
                    src={staticImages.gallery1}
                    alt=""
                    className="border-[4px] border-white"
                  />
                </span>
                <span style={{ "--i": 2 }}>
                  <img
                    src={staticImages.gallery2}
                    alt=""
                    className="border-[4px] border-white"
                  />
                </span>
                <span style={{ "--i": 3 }}>
                  <img
                    src={staticImages.gallery3}
                    alt=""
                    className="border-[4px] border-white"
                  />
                </span>
                <span style={{ "--i": 4 }}>
                  <img
                    src={staticImages.gallery4}
                    alt=""
                    className="border-[4px] border-white"
                  />
                </span>
                <span style={{ "--i": 5 }}>
                  <img
                    src={staticImages.gallery5}
                    alt=""
                    className="border-[4px] border-white"
                  />
                </span>
                <span style={{ "--i": 6 }}>
                  <img
                    src={staticImages.gallery6}
                    alt=""
                    className="border-[4px] border-white"
                  />
                </span>
                <span style={{ "--i": 7 }}>
                  <img
                    src={staticImages.temp1}
                    alt=""
                    className="border-[4px] border-white"
                  />
                </span>
                <span style={{ "--i": 8 }}>
                  <img
                    src={staticImages.temp2}
                    alt=""
                    className="border-[4px] border-white"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default GalleryPhotosScreen;
