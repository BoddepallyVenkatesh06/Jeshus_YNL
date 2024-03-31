import { Drawer, IconButton } from "@material-tailwind/react";
import { BiSolidLeaf } from "react-icons/bi";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { menuData } from "../../data/MenuData";
import SidebarLink from "./SidebarLink";

const Sidebar = ({ closeDrawerRight, openRight }) => {
  return (
    <>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="py-4 px-2 sidebar-drawer red-gradient shadow-shadow3 border-l-[3px] border-l-white"
      >
        <div className="mb-6 flex items-center justify-between absolute right-3 top-3">
          <IconButton
            variant="text"
            className="bg-white rounded w-[34px] h-[34px] ms-auto hover:opacity-90 default-transition"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#000"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="grid gap-y-6">
          <div className="px-3 flex items-center gap-x-2 text-2xl text-white font-bold border-b-[1px] border-b-white/30 pb-3">
            <BiSolidLeaf className="text-red" />
            <span className="text-white">YNL.</span>
          </div>
          <ul className="flex flex-col gap-y-2">
            {menuData?.map((menuItem) => (
              <SidebarLink
                closeDrawerRight={closeDrawerRight}
                key={menuItem.id}
                linkData={menuItem}
              />
            ))}
          </ul>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 px-3">
            <li>
              <Link
                to=""
                className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded-full bg-blue group border-[1px] border-white hover:border-transparent"
              >
                <FaFacebookSquare
                  size={20}
                  className="group-hover:scale-90 default-transition"
                />
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded-full instagram group border-[1px] border-white hover:border-transparent"
              >
                <FaInstagram
                  size={20}
                  className="group-hover:scale-90 default-transition"
                />
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded-full bg-red group border-[1px] border-white hover:border-transparent"
              >
                <TbBrandYoutubeFilled
                  size={23}
                  className="me-[1px] group-hover:scale-90 default-transition"
                />
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  closeDrawerRight: PropTypes.func,
  openRight: PropTypes.bool,
};
