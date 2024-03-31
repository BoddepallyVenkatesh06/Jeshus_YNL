import { useEffect } from "react";
import staticImages from "../../utils/images";
import { scrollToTop } from "../../utils/scrollToTop";
import { FaPlay, FaShareAlt } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { FaRegClock } from "react-icons/fa";

const WatchLiveScreen = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <main className="content-wrapper">
      <div className="pg-watch-live flex items-center justify-center">
        <div className="container">
          <div className="section-content mb-10 mt-10">
            <div className="grid max-w-[1000px] mx-auto mb-12">
              <div className="block bg-white shadow-lg overflow-hidden">
                <div className="relative overflow-hidden bg-cover bg-no-repeat border-b-4 border-b-white shadow-lg shadow-dark/20">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    // src={`https://www.youtube.com/embed/Hhw5676RCco`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>

                  <div className="absolute top-0 left-0 w-full h-full after:absolute after:content-[''] after:bg-black after:left-0 after:top-0 after:w-full after:h-full after:opacity-80">
                    <img src={staticImages.watch_live} />
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
                    <div className="inline-flex items-center gap-x-3 bg-red text-white px-3 sm:px-4 sm:py-2 py-1.5 rounded">
                      <FaPlay />
                      <span className="font-medium sm:text-base text-sm">Watch Now</span>
                    </div>
                    <h3 className="text-white font-semibold text-base sm:text-xl md:text-2xl md:mt-6 mt-3 drop-shadow-lg font-lora text-center">
                      New Southern Music Band
                    </h3>

                    <div className="xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl text-center flex w-full items-center justify-center md:mt-8 mt-4 lg:gap-x-2.5">
                      <div className="lg:text-2xl md:text-xl sm:text-lg xs:text-base text-sm mr-1 font-extralight text-white uppercase sm:block hidden">
                        in
                      </div>
                      <div className="w-12 sm:w-24 sm:h-24 flex flex-col items-center justify-center mx-1 p-2 bg-white text-red lg:rounded-lg rounded font-bold countdown-block">
                        <div className="font-mono leading-none">00</div>
                        <div className="font-mono uppercase sm:text-sm text-xs leading-none hidden sm:block">
                          Days
                        </div>
                        <div className="font-mono uppercase text-[10px] leading-none sm:hidden">
                          Day
                        </div>
                      </div>
                      <div className="w-12 sm:w-24 sm:h-24 flex flex-col items-center justify-center mx-1 p-2 bg-white text-red lg:rounded-lg rounded font-bold countdown-block">
                        <div className="font-mono leading-none">00</div>
                        <div className="font-mono uppercase sm:text-sm text-xs leading-none hidden sm:block">
                          Hours
                        </div>
                        <div className="font-mono uppercase text-[10px] leading-none sm:hidden">
                          HRS.
                        </div>
                      </div>
                      <div className="w-12 sm:w-24 sm:h-24 flex flex-col items-center justify-center mx-1 p-2 bg-white text-red lg:rounded-lg rounded font-bold countdown-block">
                        <div className="font-mono leading-none">00</div>
                        <div className="font-mono uppercase sm:text-sm text-xs leading-none hidden sm:block">
                          Minutes
                        </div>
                        <div className="font-mono uppercase text-[10px] leading-none sm:hidden">
                          MIN
                        </div>
                      </div>
                      <div className="lg:text-2xl md:text-xl sm:text-lg xs:text-base text-sm mx-1 font-extralight text-white uppercase sm:block hidden">
                        and
                      </div>
                      <div className="w-12 sm:w-24 sm:h-24 flex flex-col items-center justify-center mx-1 p-2 bg-white text-red lg:rounded-lg rounded font-bold countdown-block">
                        <div className="font-mono leading-none">00</div>
                        <div className="font-mono uppercase sm:text-sm text-xs leading-none sm:block hidden">
                          Seconds
                        </div>
                        <div className="font-mono uppercase text-[10px] leading-none sm:hidden">
                          Secs.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="sm:p-6 p-3">
                    <h5 className="mb-3 text-lg sm:text-xl lg:text-2xl font-semibold text-dark border-b-[1px] border-b-gray/10 pb-1 font-lora">
                      Saturday Live Watch
                    </h5>
                    <div className="flex flex-center gap-x-6 flex-wrap gap-y-3">
                      <div className="inline-flex items-center flex-wrap gap-x-2 text">
                        <FaRegClock />
                        <span className="text-sm font-medium">
                          11:00 AM | Saturday
                        </span>
                      </div>
                      <Button className="bg-green py-1.5 px-2.5 rounded inline-flex gap-x-2 items-center">
                        {" "}
                        <FaShareAlt /> Share
                      </Button>
                    </div>
                  </div>
                  <div className="text-justify bg-gray/5 sm:p-6 p-3 border-t-[1px] border-t-gray/10">
                    <p className="text">
                      Generating random paragraphs can be an excellent way for
                      writers to get their creative flow going at the beginning
                      of the day. The writer has no idea what topic the random
                      paragraph will be about when it appears. This forces the
                      writer to use creativity to complete one of three common
                      writing challenges. The writer can use the paragraph as
                      the first one of a short story and build upon it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WatchLiveScreen;
