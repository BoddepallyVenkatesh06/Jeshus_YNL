import { BsBookHalf } from "react-icons/bs";
import staticImages from "../../utils/images";

const ArticleSidebar = () => {
  return (
    <div className="w-full grid gap-6 items-start">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        <div data-aos="fade-up">
          <h1 className="mb-4 text-xl font-bold text-gray-700 font-lora">
            Authors
          </h1>
          <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-md">
            <ul className="-mx-4">
              <li className="flex items-center bg-gray/5 py-2 rounded-md">
                <img
                  src={staticImages.member1}
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full"
                />
                <p className="flex-1 flex justify-between items-center">
                  <a
                    href="#"
                    className="font-bold text-gray-700 hover:underline"
                  >
                    David Paul Limbu
                    <span className="block text-xs font-normal">
                      Founder of YNL
                    </span>
                  </a>
                  <span className="text-xs font-light text bg-blue text-white rounded px-2 py-1 drop-shadow me-3">
                    230 Articles
                  </span>
                </p>
              </li>
              <li className="flex items-center mt-3.5 bg-gray/5 py-2 rounded-md">
                <img
                  src={staticImages.member2}
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full"
                />
                <p className="flex-1 flex justify-between items-center">
                  <a
                    href="#"
                    className="font-bold text-gray-700 hover:underline"
                  >
                    John Doe
                    <span className="block text-xs font-normal">
                      Co-founder of YNL
                    </span>
                  </a>
                  <span className="text-xs font-light text bg-blue text-white rounded px-2 py-1 drop-shadow me-3">
                    52 Articles
                  </span>
                </p>
              </li>
              <li className="flex items-center mt-3.5 bg-gray/5 py-2 rounded-md">
                <img
                  src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full"
                />
                <p className="flex-1 flex justify-between items-center">
                  <a
                    href="#"
                    className="font-bold text-gray-700 hover:underline"
                  >
                    Lisa Way
                    <span className="block text-xs font-normal">
                      Women's leader
                    </span>
                  </a>
                  <span className="text-xs font-light text bg-blue text-white rounded px-2 py-1 drop-shadow me-3">
                    73 Articles
                  </span>
                </p>
              </li>
              <li className="flex items-center mt-3.5 bg-gray/5 py-2 rounded-md">
                <img
                  src={staticImages.member5}
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full"
                />
                <p className="flex-1 flex justify-between items-center">
                  <a
                    href="#"
                    className="font-bold text-gray-700 hover:underline"
                  >
                    Steve Matt
                    <span className="block text-xs font-normal">
                      Teacher / Preacher
                    </span>
                  </a>
                  <span className="text-xs font-light text bg-blue text-white rounded px-2 py-1 drop-shadow me-3">
                    245 Articles
                  </span>
                </p>
              </li>
              <li className="flex items-center mt-3.5 bg-gray/5 py-2 rounded-md">
                <img
                  src={staticImages.member4}
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full"
                />
                <p className="flex-1 flex justify-between items-center">
                  <a
                    href="#"
                    className="font-bold text-gray-700 hover:underline"
                  >
                    Rajiv Shrestha
                    <span className="block text-xs font-normal">
                      Service Leader
                    </span>
                  </a>
                  <span className="text-xs font-light text bg-blue text-white rounded px-2 py-1 drop-shadow me-3">
                    332 Articles
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up">
          <h1 className="mb-4 text-xl font-bold text-gray-700 font-lora">
            Popular Topics / Tags
          </h1>
          <div className="flex flex-col px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#"
                  className="font-bold text-gray-700 hover:text-gray-600 hover:underline bg-gray/5 px-3 py-1 inline-flex rounded"
                >
                  Study
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-gray-700 hover:text-gray-600 hover:underline bg-gray/5 px-3 py-1 inline-flex rounded"
                >
                  Spiritualism
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-gray-700 hover:text-gray-600 hover:underline bg-gray/5 px-3 py-1 inline-flex rounded"
                >
                  Archaeology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-gray-700 hover:text-gray-600 hover:underline bg-gray/5 px-3 py-1 inline-flex rounded"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-gray-700 hover:text-gray-600 hover:underline bg-gray/5 px-3 py-1 inline-flex rounded"
                >
                  Tribulation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <h1 className="mb-4 text-xl font-bold text-gray-700 font-lora">
          Recent Post
        </h1>
        <div className="grid gap-4">
          <div className="flex w-full flex-col p-6 mx-auto bg-white rounded-lg shadow-md">
            <div>
              <span className="text-sm font-medium inline-flex items-center gap-x-2 px-2.5 py-1 bg-blue/10 text-blue rounded">
                <BsBookHalf />
                <span>Theoritical Studies</span>
              </span>
            </div>
            <div className="mt-2">
              <a
                href="#"
                className="text-base font-semibold text-gray-700 hover:underline"
              >
                यी ७ खाने कुरालाई कहिल्यै फ्रिजमा नराख्नुस्
              </a>
            </div>
            <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  className="object-cover w-8 h-8 rounded-full"
                />
                <a href="#" className="mx-3 text-sm text hover:underline">
                  Alex John
                </a>
              </div>
              <span className="text-sm text">Jun 1, 2020</span>
            </div>
          </div>

          <div className="flex w-full flex-col p-6 mx-auto bg-white rounded-lg shadow-md">
            <div>
              <span className="text-sm font-medium inline-flex items-center gap-x-2 px-2.5 py-1 bg-blue/10 text-blue rounded">
                <BsBookHalf />
                <span>Theoritical Studies</span>
              </span>
            </div>
            <div className="mt-2">
              <a
                href="#"
                className="text-base font-semibold text-gray-700 hover:underline"
              >
                एमबीबीएस अध्ययनका लागि राक्सिराङ गाउँपालिकाले अनुदान दिने
              </a>
            </div>
            <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  className="object-cover w-8 h-8 rounded-full"
                />
                <a href="#" className="mx-3 text-sm text hover:underline">
                  Alex John
                </a>
              </div>
              <span className="text-sm text">Jun 1, 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
