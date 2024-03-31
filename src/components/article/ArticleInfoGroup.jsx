import { BsFillEyeFill } from "react-icons/bs";

const ArticleInfoGroup = () => {
  return (
    <div className="fixed mt-6 bottom-3 inset-x-0 text-center">
      <div className="inline-block blue-gradient text-white shadow-md rounded-full py-2 px-4 dark:bg-gray-800">
        <div className="flex items-center gap-x-1.5">
          <div className="hs-tooltip inline-block">
            <button
              type="button"
              className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <BsFillEyeFill size={16} />
              875
              <span
                className="hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-black"
                role="tooltip"
              >
                Like
              </span>
            </button>
          </div>

          <div className="block h-3 border-r border-gray-300 mx-3 dark:border-gray-600"></div>

          <div className="relative inline-flex">
            <button
              type="button"
              className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInfoGroup;
