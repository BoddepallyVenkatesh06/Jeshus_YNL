import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import staticImages from "../../utils/images";
import { Intro } from "../../components";
import { SocialIcon } from "react-social-icons";

const AboutScreen = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <main className="content-wrapper">
      <div className="pg-about relative after:absolute after:content-[''] after:top-0 after:right-0 after:w-[400px] after:h-[240px] after:bg-blue/10 after:hidden lg:after:block">
        <div className="bg-white">
          <div className="container">
            <div className="max-w-[1200px] min-h-[240px] mx-auto grid lg:grid-cols-2 gap-10 py-12">
              <div className="text-justify" data-aos="fade-right">
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px] font-lora">
                  YESHUA NEW LIFE
                </h2>
                <p className="text">
                  As a community, we are dedicated to spreading the
                  transformative power of the gospel, sharing the good news with
                  passion and purpose, and inviting all to experience the
                  life-changing grace that emanates from our belief in Jesus
                  Christ.
                </p>
                <br />
                <p className="text">
                  Join us in a journey of faith, fellowship, and discovering the
                  abundant life found in Yeshua, the source of our new life.
                </p>
              </div>
              <div
                className="h-[320px] overflow-hidden rounded-lg shadow-normal z-10"
                data-aos="fade-left"
              >
                <img
                  src={staticImages.temp2}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-whitesmoke py-16"
          style={{
            background: `linear-gradient(rgb(179, 25, 1, 0.8), rgb(179, 25, 1, 0.9)), url(${staticImages.about_banner}) center/cover no-repeat`,
          }}
        >
          <div className="container">
            <div className="grid max-w-[1200px] mx-auto gap-y-8">
              <div className="flex gap-8 flex-col md:flex-row md:items-center">
                <div
                  className="h-[280px] w-[280px] mx-auto md:ms-0 min-w-[280px] rounded-full shadow-normal border-4 border-white relative after:absolute after:content-[''] after:w-[60px] after:h-[60px] after:bg-white after:right-2 after:bottom-3 after:rounded-full"
                  data-aos="fade-right"
                >
                  <img
                    src={staticImages.member1}
                    className="w-full h-full object-cover object-top rounded-full"
                    alt=""
                  />
                </div>
                <div
                  className="shadow-shadow4 px-6 py-8 rounded-lg border-2 border-gray/5 bg-white"
                  data-aos="fade-left"
                >
                  <div className="grid lg:grid-cols-2 items-start gap-x-4 border-b-[1px] border-whitesmoke">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-700 font-lora">
                        David Paul Limbu
                      </h3>
                      <h5 className="text text-sm opacity-90 mt-1 mb-1.5">
                        Founder & Senior Chariman
                      </h5>
                    </div>
                    <div className="flex gap-x-2 mt-1.5 lg:justify-end mb-3">
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.facebook.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.gmai.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.linkedin.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.instagram.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                    </div>
                  </div>
                  <div className="mt-4 opacity-90">
                    <p className="text">
                      Pastor David Paul Limbu, with two decades of dedication to
                      serving the Lord, leads our church with humility, a gospel
                      driven life, unwavering commitment and faithfulness. His
                      profound sermons, prayer, and Christ centered life enrich
                      our spiritual journey and foster togetherness within our
                      congregation. We are truly blessed to have him as our
                      spiritual shepherd.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 flex-col md:flex-row-reverse md:items-center">
                <div
                  className="h-[280px] w-[280px] mx-auto md:ms-0 min-w-[280px] overflow-hidden rounded-full shadow-normal border-4 border-white"
                  data-aos="fade-left"
                >
                  <img
                    src={staticImages.member4}
                    className="w-full h-full object-cover object-top"
                    alt=""
                  />
                </div>
                <div
                  className="shadow-shadow4 px-6 py-8 rounded-lg border-2 border-gray/5 bg-white"
                  data-aos="fade-left"
                >
                  <div className="grid lg:grid-cols-2 items-start gap-x-4 border-b-[1px] border-whitesmoke">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-700 font-lora">
                        Ramesh Thapa
                      </h3>
                      <h5 className="text text-sm opacity-90 mt-1 mb-1.5">
                        Elder
                      </h5>
                    </div>
                    <div className="flex gap-x-2 mt-1.5 lg:justify-end mb-3">
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.facebook.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.gmai.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.linkedin.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.instagram.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                    </div>
                  </div>
                  <div className="mt-4 opacity-90">
                    <p className="text">
                      Ramesh Thapa, a devoted Elder in our community, brings a
                      wealth of wisdom and spiritual insight to our church
                      family. With a steadfast commitment to the gospel, Ramesh
                      plays a vital role in guiding and supporting our
                      congregation. His warm presence and compassionate spirit
                      create an atmosphere of care and understanding, fostering
                      a sense of unity and belonging among our members. We are
                      truly grateful for Ramesh's dedication to serving the Lord
                      and leading by example.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 flex-col md:flex-row md:items-center">
                <div
                  className="h-[280px] w-[280px] mx-auto md:ms-0 min-w-[280px] rounded-full shadow-normal border-4 border-white relative"
                  data-aos="fade-right"
                >
                  <img
                    src={staticImages.member5}
                    className="w-full h-full object-cover object-top rounded-full z-10 relative"
                    alt=""
                  />
                  <img
                    src={staticImages.twinkle}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2]"
                  />
                </div>
                <div
                  className="shadow-shadow4 px-6 py-8 rounded-lg border-2 border-gray/5 bg-white"
                  data-aos="fade-left"
                >
                  <div className="grid lg:grid-cols-2 items-start gap-x-4 border-b-[1px] border-whitesmoke">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-700 font-lora">
                        Abhisek Rai
                      </h3>
                      <h5 className="text text-sm opacity-90 mt-1 mb-1.5">
                        Deacon
                      </h5>
                    </div>
                    <div className="flex gap-x-2 mt-1.5 lg:justify-end mb-3">
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.facebook.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.gmai.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.linkedin.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                      <SocialIcon
                        className="shadow-lg rounded-full"
                        url="www.instagram.com"
                        target="_blank"
                        style={{ width: "28px", height: "28px" }}
                      />
                    </div>
                  </div>
                  <div className="mt-4 opacity-90">
                    <p className="text">
                      Abhisek Rai, a faithful Deacon in our fellowship, is a
                      beacon of enthusiasm and service within our church. With a
                      heart dedicated to Christ and a passion for community
                      outreach, Abhisek actively contributes to the spiritual
                      and practical needs of our congregation. His commitment to
                      fostering a welcoming environment and assisting in various
                      ministries reflects the love of Christ in action. We are
                      blessed to have Abhisek as a devoted member and servant
                      leader in our Yeshua New Life family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="lg:min-h-[70vh] min-h-[50vh] flex items-center"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${staticImages.mission}) center/cover no-repeat`,
          }}
        >
          <div className="container">
            <h2 className="text-[#e02529] text-3xl lg:text-4xl xxl:text-5xl font-semibold shadow-lg mb-4 font-lora">
              Our Mission
            </h2>
            <h1 className="text-white text-4xl lg:text-5xl xxl:text-6xl font-semibold max-w-[800px] hero-text shadow-lg">
              Delivering all the gospel, to all the world, and to all
              generations.
            </h1>
          </div>
        </div>
        <div className="py-10">
          <div className="container">
            <h3 className="text-dark text-3xl font-bold font-lora">Our beliefs</h3>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="overflow-hidden">
                <div className="h-[200px] overflow-hidden shadow-lg">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={staticImages.belief1}
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="py-4">
                  <div className="font-bold text-xl mb-2 font-lora">
                    Faith in Jesus Christ
                  </div>
                  <p className="text">
                    We believe in Jesus as the Son of God, the way to salvation
                    and eternal life through faith. John 14:6
                  </p>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="h-[200px] overflow-hidden shadow-lg">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={staticImages.belief2}
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="py-4">
                  <div className="font-bold text-xl mb-2 font-lora">
                    Faith in Jesus Christ
                  </div>
                  <p className="text">
                    Salvation is a gift of God's grace, received through faith
                    in Jesus Christ. (Ephesians 2:8-9)
                  </p>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="h-[200px] overflow-hidden shadow-lg">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={staticImages.belief3}
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="py-4">
                  <div className="font-bold text-xl mb-2 font-lora">
                    Faith in Jesus Christ
                  </div>
                  <p className="text">
                    We honor the fivefold ministry, including apostolic,
                    prophetic, evangelistic, pastoral, and teaching roles, for
                    equipping and building the church (Ephesians 4:11).
                  </p>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="h-[200px] overflow-hidden shadow-lg">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={staticImages.belief4}
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="py-4">
                  <div className="font-bold text-xl mb-2 font-lora">
                    Faith in Jesus Christ
                  </div>
                  <p className="text">
                    We embrace the active presence and empowering work of the
                    Holy Spirit (Acts 1:8).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={staticImages.wave} className="lg:-mt-[100px]" />
      </div>
    </main>
  );
};

export default AboutScreen;
