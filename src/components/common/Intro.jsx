import staticImages from "../../utils/images";
import { FaBible } from "react-icons/fa";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { BsBookmarkStarFill } from "react-icons/bs";

const Intro = () => {
  return (
    <section className="py-12" id="intro">
      <div className="container">
        <div className="block rounded-lg bg-white shadow-lg">
          <div className="grid items-center lg:grid-cols-[auto_400px] xl:grid-cols-[auto_600px]">
            <div className="p-8 lg:self-center" data-aos="fade-right">
              <div>
                <h2 className="mb-6 text-3xl font-bold font-lora">
                  Our Vision and Beliefs
                </h2>
                <p className="text mb-3 text-justify bg-gray/5 p-3 border-[1px] border-gray/10 rounded">
                  At Yeshua New Life, we aspire to be a Apostolic Yeshua
                  community where people discover the life-changing power of
                  Jesus. We're committed to nurturing a strong, inclusive
                  fellowship that deepens their relationship with God and shares
                  the message of hope, salvation, and love with the world.
                </p>
                <h4 className="mb-3 mt-5 font-semibold text-2xl font-lora">
                  Our Beliefs
                </h4>
                <ul className="text grid sm:grid-cols-2 sm:gap-x-4 md:gap-x-6 items-stretch">
                  <li className="mb-3 rounded-lg overflow-hidden" data-aos="fade-right">
                    <div className="font-semibold blue-gradient text-white py-2 px-3 flex items-center gap-x-2 font-lora">
                      <BsBookmarkStarFill /> <span>Faith in Jesus Christ</span>
                    </div>
                    <p className="p-3 bg-blue-gray-50/20 h-full">
                      We believe in Jesus as the Son of God, the way to
                      salvation and eternal life through faith. John 14:6
                    </p>
                  </li>
                  <li className="mb-3 rounded-lg overflow-hidden" data-aos="fade-right">
                    <div className="font-semibold red-gradient text-white py-2 px-3 flex items-center gap-x-2 font-lora">
                      <BsBookmarkStarFill /> <span>Salvation by Grace</span>
                    </div>
                    <p className="p-3 bg-blue-gray-50/20 h-full">
                      Salvation is a gift of God's grace, received through faith
                      in Jesus Christ. (Ephesians 2:8-9)
                    </p>
                  </li>
                  <li className="mb-3 rounded-lg overflow-hidden" data-aos="fade-right">
                    <div className="font-semibold green-gradient text-white py-2 px-3 flex items-center gap-x-2 font-lora">
                      <BsBookmarkStarFill /> <span>Fivefold Ministry</span>
                    </div>
                    <p className="p-3 bg-blue-gray-50/20 h-full">
                      We honor the fivefold ministry, including apostolic,
                      prophetic, evangelistic, pastoral, and teaching roles, for
                      equipping and building the church (Ephesians 4:11).
                    </p>
                  </li>
                  <li className="mb-3 rounded-lg overflow-hidden" data-aos="fade-right">
                    <div className="font-semibold vanilla-gradient text-white py-2 px-3 flex items-center gap-x-2 font-lora">
                      <BsBookmarkStarFill />{" "}
                      <span>Empowered by the Holy Spirit</span>
                    </div>
                    <p className="p-3 bg-blue-gray-50/20 h-full">
                      We embrace the active presence and empowering work of the
                      Holy Spirit (Acts 1:8).
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-8 h-[400px] md:h-[500px] relative">
              <img
                src={staticImages.intro}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="text mb-5 text-justify bg-blue-gray-50 rounded px-5 py-4 border-[1px] border-blue-gray-50 absolute left-0 bottom-5 right-0 mx-10" data-aos="fade-left">
                <span className="inline-block me-1 text-dark">
                  <BiSolidQuoteAltLeft />
                </span>
                <span className="italic text-dark font-normal opacity-90">
                  Yet a time is coming and has now come when the true worshipers
                  will worship the Father in the Spirit and in truth, for they
                  are the kind of worshipers the Father seeks. God is spirit,
                  and his worshipers must worship in the Spirit and in truth.
                </span>
                <span className="inline-block ms-1 text-dark">
                  <BiSolidQuoteAltRight />
                </span>
                <div className="flex items-center gap-x-2 font-semibold justify-end mt-3">
                  <FaBible className="text-red" />{" "}
                  <span className="text-red">John 4:23-24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
