import { BsBookmarkStarFill } from "react-icons/bs";
import staticImages from "../../utils/images";
import Title from "./Title";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const About = () => {
  return (
    <section
      className="py-20 bg-black/95"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${staticImages.about_banner}) no-repeat fixed`,
        backgroundPosition: "top center",
        backgroundSize: "center",
      }}
    >
      <div className="container">
        {/* <Title /> */}
        <div className="section-content">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12 z-10 lg:py-12" data-aos="fade-right">
              <div className="flex h-full lg:-mr-10 rounded-lg overflow-hidden max-h-[500px]">
                <img
                  src={staticImages.about}
                  className="w-full h-full object-cover object-top"
                  alt="image"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 bg-white text-dark rounded-lg" data-aos="fade-left">
              <div className="flex h-full items-center rounded-lg bg-primary px-6 py-10 text-center lg:pl-12 lg:text-left min-h-[400px]">
                <div className="lg:pl-12">
                  <h2 className="mb-6 text-3xl font-bold font-lora">
                    Our Pastor - David Paul Limbu
                  </h2>
                  <div className="text mb-3 text-justify">
                    <span className="inline-block">
                      {" "}
                      <BiSolidQuoteAltLeft
                        size={16}
                      />
                    </span>
                    <span className="px-3">
                      Pastor David Paul Limbu, with two decades of dedication to
                      serving the Lord, leads our church with humility, a
                      gospel-driven life, unwavering commitment and
                      faithfulness. His profound sermons, prayer, and
                      Christ-centered life enrich our spiritual journey and
                      foster togetherness within our congregation. We are truly
                      blessed to have him as our spiritual shepherd.
                    </span>
                    <span className="inline-block">
                      {" "}
                      <BiSolidQuoteAltRight
                        size={16}
                      />
                    </span>
                  </div>
                  <p className="text text-justify">
                  <span className="inline-block">
                      {" "}
                      <BiSolidQuoteAltLeft
                        size={16}
                      />
                    </span>
                    <span className="px-3 text-np">पास्टर डेभिड पौल लिम्बु, प्रभुको सेवा गर्दै दुई दशक अघिदेखि,
                    विनम्रतामा, एक परमेश्वरका लागि प्रेरित जीवनमा, अचल
                    आत्मसमर्पण र विश्वासयोग्यताका साथ हाम्रो चर्चलाई अगाडि
                    बढाउँदैछन्। उहाँको गहिरो प्रवचनहरू, प्रार्थना, र
                    मसीहकेन्द्रित जीवनले हाम्रो आध्यात्मिक यात्रालाई समृद्ध
                    बनाएको छ र हाम्रो समुदायको बीचको एकतालाई बढाउँदैछ। हाम्रो
                    आत्मिक गोठालाको रूपमा उहाँलाई पाउदा हामी साच्चै नै आशिषित
                    भएका छौँ।</span>
                    <span className="inline-block">
                      {" "}
                      <BiSolidQuoteAltRight
                        size={16}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
