import { useState } from "react";
import staticImages from "../../utils/images";
import Title from "./Title";
import { VideoDialog } from "./VideoDialog";

const Ministries = () => {
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const handleVideoDialogOpen = () => setVideoDialogOpen((cur) => !cur);

  const onVideoDialogOpen = (e) => {
    e.preventDefault();
    handleVideoDialogOpen();
  };

  return (
    <>
      <VideoDialog
        videoDialogOpen={videoDialogOpen}
        handleVideoDialogOpen={handleVideoDialogOpen}
      />
      <section className="py-8 min-h-[80vh] flex items-center" id="ministries">
        <div className="container relative z-10">
          <Title
            title={"Our Ministries"}
            description={
              "Yeshua New Life is a focused group with a clear mission, serving both the congregation and the wider community."
            }
          />
          <div className="section-content mb-10 grid xl:grid-cols-4 sm:grid-cols-2 gap-4">
            <div className="shadow-normal rounded-xl" data-aos="fade-up">
              <div className="h-[380px] relative rounded-xl overflow-hidden cursor-pointer group">
                <img
                  src={staticImages.ministry1}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={onVideoDialogOpen}
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-red text-white font-semibold px-3 whitespace-nowrap py-2 rounded shadow-xl opacity-0 border-white-2 hover:bg-white group-hover:opacity-100 hover:text-dark default-transition"
                >
                  Watch Intro Video
                </button>
                <div className="absolute bottom-2 left-1/2 text-center bg-white/90 rounded -translate-x-1/2 w-[92%] py-3 px-2">
                  <h3 className="text-xl font-semibold capitalize text-red mb-1 font-lora">
                    Children’s Ministry
                  </h3>
                  <p className="text text-gray">
                    Nurturing the faith of the youngest members of our church.
                  </p>
                </div>
              </div>
            </div>

            <div className="shadow-normal rounded-xl" data-aos="fade-up">
              <div className="h-[380px] relative rounded-xl overflow-hidden cursor-pointer group">
                <img
                  src={staticImages.ministry2}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={onVideoDialogOpen}
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-red text-white font-semibold px-3 whitespace-nowrap py-2 rounded shadow-xl opacity-0 border-white-2 hover:bg-white group-hover:opacity-100 hover:text-dark default-transition"
                >
                  Watch Intro Video
                </button>
                <div className="absolute bottom-2 left-1/2 text-center bg-white/90 rounded -translate-x-1/2 w-[92%] py-3 px-2">
                  <h3 className="text-xl font-semibold capitalize text-blue mb-1 font-lora">
                    Youth Ministry
                  </h3>
                  <p className="text text-gray">
                    Supportive community where young people can grow in their
                    faith.
                  </p>
                </div>
              </div>
            </div>

            <div className="shadow-normal rounded-xl" data-aos="fade-up">
              <div className="h-[380px] relative rounded-xl overflow-hidden cursor-pointer group">
                <img
                  src={staticImages.ministry3}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={onVideoDialogOpen}
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-red text-white font-semibold px-3 whitespace-nowrap py-2 rounded shadow-xl opacity-0 border-white-2 hover:bg-white group-hover:opacity-100 hover:text-dark default-transition"
                >
                  Watch Intro Video
                </button>
                <div className="absolute bottom-2 left-1/2 text-center bg-white/90 rounded -translate-x-1/2 w-[92%] py-3 px-2">
                  <h3 className="text-xl font-semibold capitalize text-green mb-1 font-lora">
                    Women’s ministry
                  </h3>
                  <p className="text text-gray">
                    A supportive community where women can come together to
                    deepen their faith and connection.
                  </p>
                </div>
              </div>
            </div>

            <div className="shadow-normal rounded-xl" data-aos="fade-up">
              <div className="h-[380px] relative rounded-xl overflow-hidden cursor-pointer group">
                <img
                  src={staticImages.ministry4}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={onVideoDialogOpen}
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-red text-white font-semibold px-3 whitespace-nowrap py-2 rounded shadow-xl opacity-0 border-white-2 hover:bg-white group-hover:opacity-100 hover:text-dark default-transition"
                >
                  Watch Intro Video
                </button>
                <div className="absolute bottom-2 left-1/2 text-center bg-white/90 rounded -translate-x-1/2 w-[92%] py-3 px-2">
                  <h3 className="text-xl font-semibold capitalize text-gray mb-1 font-lora">
                    Mission and Outreach
                  </h3>
                  <p className="text text-gray">
                    Dedicated to spreading the love of Christ beyond our church
                    walls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ministries;
