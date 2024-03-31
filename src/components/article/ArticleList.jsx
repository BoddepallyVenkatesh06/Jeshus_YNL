import { FaCalendarAlt, FaShareAlt } from "react-icons/fa";
import staticImages from "../../utils/images";
import { BsFillEyeFill } from "react-icons/bs";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ArticleList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-1">
      <div className="border-b-[1px] border-b-gray/20 py-6" data-aos="fade-up">
        <div className="grid xl:grid-cols-[280px_auto] overflow-hidden">
          <div className="relative h-[320px] xl:h-auto">
            <img
              src={staticImages.temp1}
              className="w-full h-full object-cover absolute"
            />
          </div>
          <div className="max-w-4xl mt-4 xl:mt-0 px-6 mx-auto bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-x-6">
                <div className="flex items-center gap-x-1.5">
                  <FaCalendarAlt className="text-blue" size={12} />
                  <span className="text-[13px] text-dark font-medium">
                    10th Dec, 2023
                  </span>
                </div>
                <div className="flex items-center gap-x-1.5">
                  <BsFillEyeFill className="text-red" size={14} />
                  <span className="text-[13px] text-dark font-medium">245</span>
                </div>
              </div>
              <Button className="bg-green py-1.5 px-2.5 rounded inline-flex gap-x-2 items-center">
                {" "}
                <FaShareAlt /> Share
              </Button>
            </div>
            <div className="mt-2">
              <Link
                to="/article/1"
                className="text-xl font-bold text-dark hover:text-red hover:underline font-lora"
              >
                बाइडेनले भने- इजरायल-हमास युद्ध रोकिनुपर्छ
              </Link>
              <p className="mt-2 text">
                अमेरिकी राष्ट्रपति जो बाइडेनले इजरायल र हमासबीचको युद्ध
                रोकिनुपर्ने बताएका छन्। हमासले बन्धक बनाएका मानिसको मुक्तिका
                लागि युद्ध रोकिनुपर्ने उनले बताएका हुन्। मिनेसोटामा आयोजित
                कार्यक्रममा एक महिला...
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
              <div>
                <a href="#" className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    className="object-cover w-8 h-8 me-3 rounded-full"
                  />
                  <h1 className="font-semibold text-sm text-[15px] text-dark">
                    David Paul Limbu
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-b-gray/20 py-6" data-aos="fade-up">
        <div className="grid xl:grid-cols-[280px_auto] overflow-hidden">
          <div className="relative h-[320px] xl:h-auto">
            <img
              src={staticImages.temp2}
              className="w-full h-full object-cover absolute"
            />
          </div>
          <div className="max-w-4xl mt-4 xl:mt-0 px-6 mx-auto bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-x-6">
                <div className="flex items-center gap-x-1.5">
                  <FaCalendarAlt className="text-blue" size={12} />
                  <span className="text-[13px] text-dark font-medium">
                    10th Dec, 2023
                  </span>
                </div>
                <div className="flex items-center gap-x-1.5">
                  <BsFillEyeFill className="text-red" size={14} />
                  <span className="text-[13px] text-dark font-medium">245</span>
                </div>
              </div>
              <Button className="bg-green py-1.5 px-2.5 rounded inline-flex gap-x-2 items-center">
                {" "}
                <FaShareAlt /> Share
              </Button>
            </div>
            <div className="mt-2">
              <Link
                to="/article/1"
                className="text-xl font-bold text-dark hover:text-red hover:underline font-lora"
              >
                सञ्चारको पहुँच पुग्न नसकेको एउटा गाउँ
              </Link>
              <p className="mt-2 text text-np">
                स्याङ्जा- सूचना एवम् प्रबिधिले निकै फड्को मारेको पाचौँ
                जेनेरेसनको अवस्थामा आईपुगेको सञ्चार जगत् कुनै ठाउँ यस्ता पनि छन्
                जहाँ सञ्चारबिहिन बन्न पुगेका छन् । त्यसैको उदाहरणको रुपमा रहेको
                छ, स्याङजाको
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
              <div>
                <a href="#" className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    className="object-cover w-8 h-8 me-3 rounded-full"
                  />
                  <h1 className="font-semibold text-sm text-[15px] text-dark">
                    डेविङ पावल लिम्बु
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-b-gray/20 py-6" data-aos="fade-up">
        <div className="grid xl:grid-cols-[280px_auto] overflow-hidden">
          <div className="relative h-[320px] xl:h-auto">
            <img
              src={staticImages.temp3}
              className="w-full h-full object-cover absolute"
            />
          </div>
          <div className="max-w-4xl mt-4 xl:mt-0 px-6 mx-auto bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-x-6">
                <div className="flex items-center gap-x-1.5">
                  <FaCalendarAlt className="text-blue" size={12} />
                  <span className="text-[13px] text-dark font-medium">
                    10th Dec, 2023
                  </span>
                </div>
                <div className="flex items-center gap-x-1.5">
                  <BsFillEyeFill className="text-red" size={14} />
                  <span className="text-[13px] text-dark font-medium">245</span>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Link
                to="/article/1"
                className="text-xl font-bold text-dark hover:text-red hover:underline font-lora"
              >
                आफ्नो इ‍च्छाअनुरूप पढ्ने कोठा यसरी सजाउनुस्
              </Link>
              <p className="mt-2 text">
                पढ्ने कोठामा सकभर भोजन कहिल्यै नगर्नुस् । यदि, कहिलेकाहीँ भोजन
                गरिहाल्नुभयो भने जुठो भाँडालाई तत्कालै बाहिर लग्नुस् । अध्ययन
                कक्षमा जुठो भाँडा राख्दा पढाइमा मन लाग्दैन । विद्यार्थीको
                ध्यानलाई यस्ता...
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
              <div>
                <a href="#" className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    className="object-cover w-8 h-8 me-3 rounded-full"
                  />
                  <h1 className="font-semibold text-sm text-[15px] text-dark">
                    David Paul Limbu
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-b-gray/20 py-6" data-aos="fade-up">
        <div className="grid xl:grid-cols-[280px_auto] overflow-hidden">
          <div className="relative h-[320px] xl:h-auto">
            <img
              src={staticImages.article4}
              className="w-full h-full object-cover absolute"
            />
          </div>
          <div className="max-w-4xl mt-4 xl:mt-0 px-6 mx-auto bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-x-6">
                <div className="flex items-center gap-x-1.5">
                  <FaCalendarAlt className="text-blue" size={12} />
                  <span className="text-[13px] text-dark font-medium">
                    10th Dec, 2023
                  </span>
                </div>
                <div className="flex items-center gap-x-1.5">
                  <BsFillEyeFill className="text-red" size={14} />
                  <span className="text-[13px] text-dark font-medium">245</span>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Link
                to="/article/1"
                className="text-xl font-bold text-dark hover:text-red hover:underline font-lora"
              >
                What does the natural reveal about its existence?
              </Link>
              <p className="mt-2 text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora expedita dicta totam aspernatur doloremque. Excepturi
                iste iusto eos enim reprehenderit nisi!
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
              <div>
                <a href="#" className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    className="object-cover w-8 h-8 me-3 rounded-full"
                  />
                  <h1 className="font-semibold text-sm text-[15px] text-dark">
                    David Paul Limbu
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
