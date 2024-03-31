import { BsBookFill } from "react-icons/bs";
import Title from "./Title";
import { AiFillHeart } from "react-icons/ai";
import staticImages from "../../utils/images";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <section className="py-8">
      <div className="container">
        <Title
          title={"Latest articles to read"}
        />
        <div className="grid xxl:grid-cols-2 gap-4">
          <div className="relative flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 border border-white bg-white" data-aos="fade-right">
            <div className="relative w-full md:w-1/3 bg-white grid place-items-center h-[320px] lg:h-auto">
              <img
                src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="tailwind logo"
                className="rounded-xl w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full md:w-2/3 red-gradient rounded-lg flex flex-col px-5 py-6 text-white">
              <div className="flex justify-between item-center mb-5">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <BsBookFill />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <AiFillHeart />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                  इतिहास तथा भूगोल
                </div>
              </div>
              <h3 className="font-bold text-gray-800 md:text-2xl text-xl font-lora font-lora">
                सञ्चारको पहुँच पुग्न नसकेको एउटा गाउँ
              </h3>
              <div className="my-5">
                <p className="text-base text text-white">
                  स्याङ्जा- सूचना एवम् प्रबिधिले निकै फड्को मारेको पाचौँ
                  जेनेरेसनको अवस्थामा आईपुगेको सञ्चार जगत् कुनै ठाउँ यस्ता पनि
                  छन् जहाँ सञ्चारबिहिन बन्न पुगेका छन् । त्यसैको उदाहरणको रुपमा
                  रहेको छ, स्याङजाको ...
                </p>
              </div>
              <div className="flex items-end justify-between gap-x-3 flex-wrap mt-2">
                <div className="text-sm leading-4 text-white flex items-center gap-x-3">
                  <div className="flex-shrink-0 flex">
                    <img
                      className="h-10 w-10 border-2 object-cover border-white rounded-full"
                      src={staticImages.member1}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
                    </span>
                    <span className="text-[13px]">Jan 4, 2023</span>
                  </div>
                </div>
                <Link
                  to="/article/1"
                  className="btn capitalize bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-dark py-1 px-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 border border-white bg-white" data-aos="fade-left">
            <div className="relative w-full md:w-1/3 bg-white grid place-items-center h-[320px] lg:h-auto">
              <img
                src={staticImages.temp1}
                alt="tailwind logo"
                className="rounded-xl w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full md:w-2/3 blue-gradient rounded-lg flex flex-col px-5 py-6 text-white">
              <div className="flex justify-between item-center mb-5">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <BsBookFill />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <AiFillHeart />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                  इतिहास तथा भूगोल
                </div>
              </div>
              <h3 className="font-bold text-gray-800 md:text-2xl text-xl font-lora">
                सञ्चारको पहुँच पुग्न नसकेको एउटा गाउँ
              </h3>
              <div className="my-5">
                <p className="text-base text text-white">
                  स्याङ्जा- सूचना एवम् प्रबिधिले निकै फड्को मारेको पाचौँ
                  जेनेरेसनको अवस्थामा आईपुगेको सञ्चार जगत् कुनै ठाउँ यस्ता पनि
                  छन् जहाँ सञ्चारबिहिन बन्न पुगेका छन् । त्यसैको उदाहरणको रुपमा
                  रहेको छ, स्याङजाको ...
                </p>
              </div>
              <div className="flex items-end justify-between gap-x-3 flex-wrap mt-2">
                <div className="text-sm leading-4 text-white flex items-center gap-x-3">
                  <div className="flex-shrink-0 flex">
                    <img
                      className="h-10 w-10 border-2 object-cover border-white rounded-full"
                      src={staticImages.member1}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
                    </span>
                    <span className="text-[13px]">Jan 4, 2023</span>
                  </div>
                </div>
                <Link
                  to="/article/1"
                  className="btn capitalize bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-dark py-1 px-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 border border-white bg-white" data-aos="fade-right">
            <div className="relative w-full md:w-1/3 bg-white grid place-items-center h-[320px] lg:h-auto">
              <img
                src={staticImages.temp2}
                alt="tailwind logo"
                className="rounded-xl w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full md:w-2/3 red-gradient rounded-lg flex flex-col px-5 py-6 text-white">
              <div className="flex justify-between item-center mb-5">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <BsBookFill />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <AiFillHeart />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                  इतिहास तथा भूगोल
                </div>
              </div>
              <h3 className="font-bold text-gray-800 md:text-2xl text-xl font-lora">
                सञ्चारको पहुँच पुग्न नसकेको एउटा गाउँ
              </h3>
              <div className="my-5">
                <p className="text-base text text-white">
                  स्याङ्जा- सूचना एवम् प्रबिधिले निकै फड्को मारेको पाचौँ
                  जेनेरेसनको अवस्थामा आईपुगेको सञ्चार जगत् कुनै ठाउँ यस्ता पनि
                  छन् जहाँ सञ्चारबिहिन बन्न पुगेका छन् । त्यसैको उदाहरणको रुपमा
                  रहेको छ, स्याङजाको ...
                </p>
              </div>
              <div className="flex items-end justify-between gap-x-3 flex-wrap mt-2">
                <div className="text-sm leading-4 text-white flex items-center gap-x-3">
                  <div className="flex-shrink-0 flex">
                    <img
                      className="h-10 w-10 border-2 object-cover border-white rounded-full"
                      src={staticImages.member1}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
                    </span>
                    <span className="text-[13px]">Jan 4, 2023</span>
                  </div>
                </div>
                <Link
                  to="/article/1"
                  className="btn capitalize bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-dark py-1 px-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 border border-white bg-white" data-aos="fade-left">
            <div className="relative w-full md:w-1/3 bg-white grid place-items-center h-[320px] lg:h-auto">
              <img
                src={staticImages.temp1}
                alt="tailwind logo"
                className="rounded-xl w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full md:w-2/3 blue-gradient rounded-lg flex flex-col px-5 py-6 text-white">
              <div className="flex justify-between item-center mb-5">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <BsBookFill />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <AiFillHeart />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                  इतिहास तथा भूगोल
                </div>
              </div>
              <h3 className="font-bold text-gray-800 md:text-2xl text-xl font-lora">
                Every Next Level of Your Life Will Demand a Different You
              </h3>
              <div className="my-5">
                <p className="text-base text text-white">
                  स्याङ्जा- सूचना एवम् प्रबिधिले निकै फड्को मारेको पाचौँ
                  जेनेरेसनको अवस्थामा आईपुगेको सञ्चार जगत् कुनै ठाउँ यस्ता पनि
                  छन् जहाँ सञ्चारबिहिन बन्न पुगेका छन् । त्यसैको उदाहरणको रुपमा
                  रहेको छ, स्याङजाको ...
                </p>
              </div>
              <div className="flex items-end justify-between gap-x-3 flex-wrap mt-2">
                <div className="text-sm leading-4 text-white flex items-center gap-x-3">
                  <div className="flex-shrink-0 flex">
                    <img
                      className="h-10 w-10 border-2 object-cover border-white rounded-full"
                      src={staticImages.member1}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
                    </span>
                    <span className="text-[13px]">Jan 4, 2023</span>
                  </div>
                </div>
                <Link
                  to="/article/1"
                  className="btn capitalize bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-dark py-1 px-4"
                >
                  Read More
                </Link>
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
            <span>See All Articles</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles;
