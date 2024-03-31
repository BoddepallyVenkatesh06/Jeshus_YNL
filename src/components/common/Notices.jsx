import Title from "./Title";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPinFill } from "react-icons/bs";

const Notices = () => {
  return (
    <section className="py-8 bg-gray/5">
      <div className="container">
        <Title title={"notices"} />
        <div className="section-content grid xl:grid-cols-2 gap-6 mb-10">
          <div className="notice-item shadow-normal grid md:grid-cols-[180px_auto] bg-white overflow-hidden rounded-lg">
            <div className="py-6 flex flex-col text-center red-gradient text-white items-center justify-center rounded-l-lg relative">
              <span className="text-5xl font-bold mb-2">17</span>
              <span className="text-3xl uppercase font-semibold tracking-[3px]">
                Sept
              </span>
              <div className="absolute top-3 left-3">
                <BsFillPinFill size={22} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-bold text-dark">
                Elevate Christmas Party
              </h3>
              <ul className="grid gap-2">
                <li className="flex items-center text-black/70 gap-x-3">
                  <FaMapMarkerAlt />
                  <span className="font-medium">New Baneshwor, Kathmandu</span>
                </li>
                <li className="flex items-center text-black/70 gap-x-3">
                  <FaCalendarAlt />
                  <span className="font-medium">17 September, 2023</span>
                </li>
              </ul>
              <div className="mt-3">
                <p className="text text-gray">
                  This event will start from 6:00 PM – 8:00 PM. It’s the most
                  wonderful time of the year! In the middle of this crazy
                  season, we will take a moment to pause together with middle
                  and high schoolers and remember what it’s all about – the
                  birth of Jesus. That’s worthy of a celebration!
                </p>
              </div>
            </div>
          </div>

          <div className="notice-item shadow-normal grid md:grid-cols-[180px_auto] bg-white overflow-hidden rounded-lg">
            <div className="py-6 flex flex-col text-center red-gradient text-white items-center justify-center rounded-l-lg relative">
              <span className="text-5xl font-bold mb-2">12</span>
              <span className="text-3xl uppercase font-semibold tracking-[3px]">
                Oct
              </span>
              <div className="absolute top-3 left-3">
                <BsFillPinFill size={22} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-bold text-dark">
              Parents Night Out
              </h3>
              <ul className="grid gap-2">
                <li className="flex items-center text-black/70 gap-x-3">
                  <FaMapMarkerAlt />
                  <span className="font-medium">New Baneshwor, Kathmandu</span>
                </li>
                <li className="flex items-center text-black/70 gap-x-3">
                  <FaCalendarAlt />
                  <span className="font-medium">17 September, 2023</span>
                </li>
              </ul>
              <div className="mt-3">
                <p className="text text-gray">
                Looking for a little “me time” this holiday season? We’ve got you covered! Drop off your kids (ages 6 months to 5th grade) for an evening of Christmas-themed fun while you enjoy a well-deserved break. It’s going to be a jolly good time playing games, making crafts, watching Christmas movies, and eating Pizza and other holiday treats.
                </p>
              </div>
            </div>
          </div>

          <div className="notice-item shadow-normal grid md:grid-cols-[180px_auto] bg-white overflow-hidden rounded-lg">
            <div className="py-6 flex flex-col text-center red-gradient text-white items-center justify-center rounded-l-lg relative">
              <span className="text-5xl font-bold mb-2">01</span>
              <span className="text-3xl uppercase font-semibold tracking-[3px]">
                Jan
              </span>
              <div className="absolute top-3 left-3">
                <BsFillPinFill size={22} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-bold text-dark">
                Community Service Opportunity
              </h3>
              <ul className="grid gap-2">
                <li className="flex items-center text-black/70 gap-x-3">
                  <FaMapMarkerAlt />
                  <span className="font-medium">New Baneshwor, Kathmandu</span>
                </li>
                <li className="flex items-center text-black/70 gap-x-3">
                  <FaCalendarAlt />
                  <span className="font-medium">17 September, 2023</span>
                </li>
              </ul>
              <div className="mt-3">
                <p className="text text-gray">
                  Want to give back to the community? Volunteer for our upcoming
                  charity event. Contact the Community Service Club for more
                  details and to sign up.
                </p>
              </div>
            </div>
          </div>

          <div className="notice-item shadow-normal grid md:grid-cols-[180px_auto] bg-white overflow-hidden rounded-lg">
            <div className="py-6 flex flex-col text-center red-gradient text-white items-center justify-center rounded-l-lg relative">
              <span className="text-5xl font-bold mb-2">08</span>
              <span className="text-3xl uppercase font-semibold tracking-[3px]">
                Dec
              </span>
              <div className="absolute top-3 left-3">
                <BsFillPinFill size={22} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-bold text-dark">
                Art Exhibition Opening
              </h3>
              <ul className="grid gap-2">
                <li className="flex items-center text-black/70 gap-x-3">
                  <FaMapMarkerAlt />
                  <span className="font-medium">New Baneshwor, Kathmandu</span>
                </li>
                <li className="flex items-center text-black/70 gap-x-3">
                  <FaCalendarAlt />
                  <span className="font-medium">20 September, 2023</span>
                </li>
              </ul>
              <div className="mt-3">
                <p className="text text-gray">
                  Join us for the grand opening of the student art exhibition
                  this Friday at 6 PM in the campus gallery. Explore incredible
                  artwork created by our talented students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notices;
