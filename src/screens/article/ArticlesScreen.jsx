import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BiChevronDown } from "react-icons/bi";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { FiSearch } from "react-icons/fi";
import ArticleList from "../../components/article/ArticleList";
import ArticleSidebar from "../../components/article/ArticleSidebar";

const ArticlesScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <main className="content-wrapper">
      <div className="pg-article py-8 bg-white">
        <div>
          <div className="container">
            <form className="max-w-[600px] mb-10 mx-auto border-2 border-gray/10 rounded-full">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  className="block w-full px-5 py-3 text-gray rounded-full"
                  placeholder="Search your keyword here ..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-1/2 -translate-y-1/2 right-4 font-medium rounded-full text-base text-dark"
                >
                  <FiSearch size={24} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="container grid lg:grid-cols-[2fr_1fr] gap-10 items-start">
          <div className="w-full">
            <div className="flex items-center justify-between pb-2 mb-6 border-b-[1px] border-dark/10">
              <h1 className="text-xl font-bold text-gray-700 font-lora">
                Articles To Read
              </h1>
              <Menu>
                <MenuHandler>
                  <div className="py-1 rounded text text-base font-semibold flex items-center gap-x-2 cursor-pointer">
                    <span>Latest</span>
                    <BiChevronDown size={22} />
                  </div>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="text text-[14px] py-1">Latest</MenuItem>
                  <MenuItem className="text text-[14px] py-1">
                    Last Week
                  </MenuItem>
                  <MenuItem className="text text-[14px] py-1">Popular</MenuItem>
                </MenuList>
              </Menu>
            </div>
            <ArticleList />
          </div>
          <ArticleSidebar />
        </div>
      </div>
    </main>
  );
};

export default ArticlesScreen;
