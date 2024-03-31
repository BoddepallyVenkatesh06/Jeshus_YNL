import { Button } from "@material-tailwind/react";
import staticImages from "../../utils/images";
import { FaShareAlt } from "react-icons/fa";

const ArticleSingleTop = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3 border-y-[1px] border-dashed border-gray/40 py-4">
        <div className="grow">
          <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center gap-5">
            <address className="flex items-center not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <div className="w-14 h-14 mr-4">
                  <img
                    className="w-full h-full object-cover object-top rounded-full"
                    src={staticImages.member1}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <a
                    href="#"
                    rel="author"
                    className="text-[18px] font-bold text-gray-900 dark:text-white mb-1"
                  >
                    David Paul Limbu
                  </a>
                  <div className="inline-flex items-center">
                    <p className="text-[14px] text">Feb. 8, 2022</p>
                    <p className="w-[5px] mx-2 h-[5px] inline-block rounded-full bg-gray/50"></p>
                    <p className="text-[14px] text">5 min read</p>
                  </div>
                </div>
              </div>
            </address>
            <Button className="bg-green py-1.5 px-2.5 rounded inline-flex gap-x-2 items-center">
              {" "}
              <FaShareAlt /> Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSingleTop;
