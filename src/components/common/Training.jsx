import { FaCalendarAlt, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import Title from "./Title";
import { MdPlayLesson } from "react-icons/md";
import staticImages from "../../utils/images";

const Training = () => {
  return (
    <section
      className="py-8 bg-black/95"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${staticImages.training}) no-repeat fixed`,
        backgroundPosition: "top center",
        backgroundSize: "center",
      }}
    >
      <div className="container">
        <Title
          classes={"text-white"}
          title={"Trainings"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum, id veritatis autem nostrum dolor."
          }
        />
        <div className="section-content mt-6 mb-10">
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2  xxl:grid-cols-4 w-full">
              <div className="relative bg-white/10 py-5 px-5 rounded-lg my-4 shadow-default shadow-black font-cera cursor-pointer hover:scale-110 default-transition">
                <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-red left-4 -top-6">
                  <MdPlayLesson />
                </div>
                <div className="mt-4 flex-1 flex flex-col justify-between h-full text-white">
                  <div>
                    <p className="text-2xl font-semibold my-2">
                      Theory of Methodology
                    </p>

                    <div className="flex items-center space-x-3 py-1.5">
                      <FaMapMarkerAlt className="text-white" />
                      <p className="font-medium text-base">
                        Kirtipur, Kathmandu
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 py-1.5">
                      <FaCalendarAlt className="text-white" />
                      <p className="font-medium text-base">1 Weeks Left</p>
                    </div>
                    <div className="flex items-center space-x-3 py-1.5">
                      <FaGlobe className="text-white" />
                      <p className="font-medium text-base">
                        Augustus Mermorial College
                      </p>
                    </div>
                  </div>
                  <div className="bg-vanilla py-0.5 px-4 rounded-lg my-3">
                    <p className="text text-dark/70 my-4 font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla, quis exercitationem expedita nam incidunt?
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/10 py-5 px-5 rounded-lg my-4 shadow-default shadow-black font-cera cursor-pointer hover:scale-110 default-transition">
                <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue left-4 -top-6">
                  <MdPlayLesson />
                </div>
                <div className="mt-4 flex-1 flex flex-col justify-between h-full text-white">
                  <div>
                    <p className="text-2xl font-semibold my-2">
                      Fundmental Studies of the Theories
                    </p>

                    <div className="flex items-center space-x-3 py-1.5">
                      <FaMapMarkerAlt className="text-white" />
                      <p className="font-medium text-base">
                        Kirtipur, Kathmandu
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 py-1.5">
                      <FaCalendarAlt className="text-white" />
                      <p className="font-medium text-base">1 Weeks Left</p>
                    </div>
                    <div className="flex items-center space-x-3 py-1.5">
                      <FaGlobe className="text-white" />
                      <p className="font-medium text-base">
                        Augustus Mermorial College
                      </p>
                    </div>
                  </div>
                  <div className="bg-vanilla py-0.5 px-4 rounded-lg my-3">
                    <p className="text text-dark/70 my-4 font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla, quis exercitationem expedita nam incidunt?
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/10 py-5 px-5 rounded-lg my-4 shadow-default shadow-black font-cera cursor-pointer hover:scale-110 default-transition">
                <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green left-4 -top-6">
                  <MdPlayLesson />
                </div>
                <div className="mt-4 flex-1 flex flex-col justify-between h-full text-white">
                  <div>
                    <p className="text-2xl font-semibold my-2">
                      History & Archeology of Ancient Era
                    </p>

                    <div className="flex items-center space-x-3 py-1.5">
                      <FaMapMarkerAlt className="text-white" />
                      <p className="font-medium text-base">
                        Kirtipur, Kathmandu
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 py-1.5">
                      <FaCalendarAlt className="text-white" />
                      <p className="font-medium text-base">1 Weeks Left</p>
                    </div>
                    <div className="flex items-center space-x-3 py-1.5">
                      <FaGlobe className="text-white" />
                      <p className="font-medium text-base">
                        Augustus Mermorial College
                      </p>
                    </div>
                  </div>
                  <div className="bg-vanilla py-0.5 px-4 rounded-lg my-3">
                    <p className="text text-dark/70 my-4 font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla, quis exercitationem expedita nam incidunt?
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/10 py-5 px-5 rounded-lg my-4 shadow-default shadow-black font-cera cursor-pointer hover:scale-110 default-transition">
                <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-dark left-4 -top-6">
                  <MdPlayLesson />
                </div>
                <div className="mt-4 flex-1 flex flex-col justify-between h-full text-white">
                  <div>
                    <p className="text-2xl font-semibold my-2">
                      Winter Study Session
                    </p>

                    <div className="flex items-center space-x-3 py-1.5">
                      <FaMapMarkerAlt className="text-white" />
                      <p className="font-medium text-base">
                        Kirtipur, Kathmandu
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 py-1.5">
                      <FaCalendarAlt className="text-white" />
                      <p className="font-medium text-base">1 Weeks Left</p>
                    </div>
                    <div className="flex items-center space-x-3 py-1.5">
                      <FaGlobe className="text-white" />
                      <p className="font-medium text-base">
                        Augustus Mermorial College
                      </p>
                    </div>
                  </div>
                  <div className="bg-vanilla py-0.5 px-4 rounded-lg my-3">
                    <p className="text text-dark/70 my-4 font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla, quis exercitationem expedita nam incidunt?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
