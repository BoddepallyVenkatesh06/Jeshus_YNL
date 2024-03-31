import { IconButton, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import staticImages from "../../utils/images";
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

export function EventDialog({ eventDialogOpen, handleEventDialogOpen }) {
  return (
    <>
      <div
        className={`event-dialog font-cera ${
          eventDialogOpen ? "block" : "hidden"
        }`}
      >
        <div className="event-dialog-content scrollbar-y-dir">
          <div className="justify-between lg:px-8 px-6 py-4">
            <div className="flex items-center gap-3 mb-2 w-full border-b-[1px] border-blue-gray-50">
              <div className="flex w-full justify-between flex-wrap gap-x-4 items-center mb-2">
                <Typography className="font-semibold font-cera text-lg text-dark">
                  2073 Annual Seminar With Congregation
                </Typography>
                <IconButton
                  className="bg-dark rounded w-[30px] h-[30px]"
                  onClick={handleEventDialogOpen}
                >
                  <FaTimes size={14} />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="px-6 lg:px-8 py-1 mb-6">
            <div className="grid md:grid-cols-2 gap-x-6 md:mb-5">
              <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 h-[240px] red-overlay">
                <img
                  src={staticImages.notice2}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2 pb-3 flex flex-col justify-between flex-1">
                <div className="mb-3 flex items-start flex-col">
                  <div className="flex flex-col">
                    <div className="w-full text-2xl leading-8 text-gray-200 font-bold mb-3 mt-3">
                      Hillsong Hymns Seminar
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b-[1px] border-gray/10 w-full pb-2">
                    <div className="inline-flex flex-row items-center">
                      <div className="inline-flex items-center gap-x-2">
                        <FaMapMarkerAlt className="text-dark" size={13} />
                        <p className="text-sm text-gray">
                          House of Worship, Lalitpur
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex flex-row items-center">
                      <div className="inline-flex items-center gap-x-2">
                        <FaCalendarAlt className="text-dark" size={12} />
                        <p className="text-sm text-gray">
                          <span className="mr-3">Dec 35, 2023</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap gap-x-3 mb-1 mt-5 bg-whitesmoke p-3 w-full rounded-md border-[1px] border-gray/10 border-r-[6px] border-r-green">
                    <span className="w-[42px] h-[40px] green-gradient inline-flex items-center justify-center text-white rounded text-3xl font-semibold">
                      10
                    </span>
                    <span className="font-semibold text-dark text-lg">
                      Days Remaining
                    </span>
                  </div>
                  <button
                    className="btn bg-red capitalize py-1.5 px-3 text-center shadow-md rounded focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none default-transition mt-4"
                    type="button"
                  >
                    Register Now!
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-y-2">
              <p className="font-normal text-base text-dark/80 font-cera">
                Join us for a spiritually uplifting experience at the Christian
                Hymns Seminar. Immerse yourself in the timeless beauty of hymns
                that inspire and touch the soul. This seminar is a gathering of
                like-minded individuals who share a deep appreciation for the
                power of music in worship and reflection.
              </p>
              <p className="font-normal text-base text-dark/80 font-cera">
                Together, we'll explore the rich history and meaning behind some
                of the most beloved Christian hymns, deepening our understanding
                of the faith and the role of music in it. Join us for a
                harmonious journey through the melodies and lyrics that have
                touched hearts for generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

EventDialog.propTypes = {
  eventDialogOpen: PropTypes.bool,
  handleEventDialogOpen: PropTypes.func,
};
