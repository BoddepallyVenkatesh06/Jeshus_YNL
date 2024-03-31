import staticImages from "../../utils/images";
import { MdVideoLibrary } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { Link } from "react-router-dom";
import { MediaDialog } from "../../components/common/MediaDialog";

const MediaScreen2 = () => {
  const vidId = "aqz-KE-bpKQ";
  const [mediaDialogOpen, setMediaDialogOpen] = useState(false);
  const handleMediaDialogOpen = () => setMediaDialogOpen((cur) => !cur);

  const onMediaDialogOpen = (e) => {
    e.preventDefault();
    handleMediaDialogOpen();
  };

  useEffect(() => scrollToTop(), []);

  return (
    <>
    <MediaDialog
        mediaDialogOpen={mediaDialogOpen}
        handleMediaDialogOpen={handleMediaDialogOpen}
      />
    <main className="content-wrapper">
      <div className="pg-gallery-album py-10 bg-whitesmoke">
        <div className="container">
          <div className="section-content px-3">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4 drop-shadow-lg font-lora">Testimonials</h3>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6 lg:gap-8">
              <div
                className="rounded-lg bg-white shadow-lg flex flex-col"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden bg-cover bg-no-repeat shadow-lg shadow-dark/20 p-1 rounded-lg">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/${vidId}`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/0 flex items-center justify-center">
                    <button type="button" className="w-[70px] hover:scale-105 default-transition" onClick={onMediaDialogOpen}>
                      <img src={staticImages.youtube} alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-start gap-y-3 mb-3">
                      <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                        <FaRegCirclePlay size={32} className="text-green" />
                        <span>New released Song 2023</span>
                      </h5>
                    </div>
                    <p className="text text-sm text-np">
                      सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                      यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत
                      गर्छ। म नेपाली हुँ।
                    </p>
                  </div>
                  <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between mb-3">
                    <div className="flex text text-sm items-center flex-wrap gap-x-2">
                      <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                    </div>
                    <div className="bg-green text-white rounded px-3 text-sm py-1 border-[1px] border-green">
                      <span className="font-medium">Lectures</span> - Watch on
                      YouTube
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg bg-white shadow-lg flex flex-col"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden bg-cover bg-no-repeat shadow-lg shadow-dark/20 p-1 rounded-lg">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/V-xr9RJvzlQ`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/0 flex items-center justify-center">
                    <button type="button" className="w-[70px] hover:scale-105 default-transition" onClick={onMediaDialogOpen}>
                      <img src={staticImages.youtube} alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-start gap-y-3 mb-3">
                      <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                        <FaRegCirclePlay size={32} className="text-green" />
                        <span>New released Song 2023</span>
                      </h5>
                    </div>
                    <p className="text text-sm text-np">
                      सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                      यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत
                      गर्छ। म नेपाली हुँ।
                    </p>
                  </div>
                  <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between mb-3">
                    <div className="flex text text-sm items-center flex-wrap gap-x-2">
                      <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                    </div>
                    <div className="bg-green text-white rounded px-3 text-sm py-1 border-[1px] border-green">
                      <span className="font-medium">Lectures</span> - Watch on
                      YouTube
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg bg-white shadow-lg flex flex-col"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden bg-cover bg-no-repeat shadow-lg shadow-dark/20 p-1 rounded-lg">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/aX6WTAYSz-s`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/0 flex items-center justify-center">
                    <button type="button" className="w-[70px] hover:scale-105 default-transition" onClick={onMediaDialogOpen}>
                      <img src={staticImages.youtube} alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-start gap-y-3 mb-3">
                      <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                        <FaRegCirclePlay size={32} className="text-green" />
                        <span>New released Song 2023</span>
                      </h5>
                    </div>
                    <p className="text text-sm text-np">
                      सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                      यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत
                      गर्छ। म नेपाली हुँ।
                    </p>
                  </div>
                  <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between mb-3">
                    <div className="flex text text-sm items-center flex-wrap gap-x-2">
                      <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                    </div>
                    <div className="bg-green text-white rounded px-3 text-sm py-1 border-[1px] border-green">
                      <span className="font-medium">Lectures</span> - Watch on
                      YouTube
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg bg-white shadow-lg flex flex-col"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden bg-cover bg-no-repeat shadow-lg shadow-dark/20 p-1 rounded-lg">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/LUexXsF14Z0`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/0 flex items-center justify-center">
                    <button type="button" className="w-[70px] hover:scale-105 default-transition" onClick={onMediaDialogOpen}>
                      <img src={staticImages.youtube} alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-start gap-y-3 mb-3">
                      <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                        <FaRegCirclePlay size={32} className="text-green" />
                        <span>New released Song 2023</span>
                      </h5>
                    </div>
                    <p className="text text-sm text-np">
                      सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                      यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत
                      गर्छ। म नेपाली हुँ।
                    </p>
                  </div>
                  <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between mb-3">
                    <div className="flex text text-sm items-center flex-wrap gap-x-2">
                      <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                    </div>
                    <div className="bg-green text-white rounded px-3 text-sm py-1 border-[1px] border-green">
                      <span className="font-medium">Lectures</span> - Watch on
                      YouTube
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg bg-white shadow-lg flex flex-col"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden bg-cover bg-no-repeat shadow-lg shadow-dark/20 p-1 rounded-lg">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/${vidId}`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/0 flex items-center justify-center">
                    <button type="button" className="w-[70px] hover:scale-105 default-transition" onClick={onMediaDialogOpen}>
                      <img src={staticImages.youtube} alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-start gap-y-3 mb-3">
                      <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                        <FaRegCirclePlay size={32} className="text-green" />
                        <span>New released Song 2023</span>
                      </h5>
                    </div>
                    <p className="text text-sm text-np">
                      सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                      यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत
                      गर्छ। म नेपाली हुँ।
                    </p>
                  </div>
                  <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between mb-3">
                    <div className="flex text text-sm items-center flex-wrap gap-x-2">
                      <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                    </div>
                    <div className="bg-green text-white rounded px-3 text-sm py-1 border-[1px] border-green">
                      <span className="font-medium">Lectures</span> - Watch on
                      YouTube
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg bg-white shadow-lg flex flex-col"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden bg-cover bg-no-repeat shadow-lg shadow-dark/20 p-1 rounded-lg">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/Hhw5676RCco`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/0 flex items-center justify-center">
                    <button type="button" className="w-[70px] hover:scale-105 default-transition" onClick={onMediaDialogOpen}>
                      <img src={staticImages.youtube} alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-start gap-y-3 mb-3">
                      <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                        <FaRegCirclePlay size={32} className="text-green" />
                        <span>New released Song 2023</span>
                      </h5>
                    </div>
                    <p className="text text-sm text-np">
                      सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                      यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत
                      गर्छ। म नेपाली हुँ।
                    </p>
                  </div>
                  <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between mb-3">
                    <div className="flex text text-sm items-center flex-wrap gap-x-2">
                      <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                    </div>
                    <div className="bg-green text-white rounded px-3 text-sm py-1 border-[1px] border-green">
                      <span className="font-medium">Lectures</span> - Watch on
                      YouTube
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10">
            <Link
              to="/article"
              className="relative inline-flex items-center gap-1 rounded border border-red bg-red px-3 py-2 pl-4 text-base text-white font-medium text-gray-500 hover:border-red hover:bg-white hover:text-red"
              href="/archive"
            >
              <span>Load More</span>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default MediaScreen2;
