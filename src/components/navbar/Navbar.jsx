import { Link, useLocation } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import useNavbarBackground from "../../hooks/useNavbarBackground";
import { BiMenu } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FaInstagram } from "react-icons/fa";
import { BiSolidLeaf } from "react-icons/bi";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import Sidebar from "../sidebar/Sidebar";
import useScrollProgress from "../../hooks/useScrollProgress";

const Navbar = () => {
  const location = useLocation();
  const scrollProgress = useScrollProgress();
  console.log(Math.ceil(scrollProgress));

  // ### HEADER CHANGE ON SCROLL
  const scrollThreshold = 100;
  const hasBackground = useNavbarBackground(scrollThreshold);
  const navbarStyle = hasBackground
    ? `bg-white shadow-normal scrolled-navbar h-[72px]`
    : "bg-transparent h-[84px]";

  const [openRight, setOpenRight] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const [openMenu4, setOpenMenu4] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  // smooth scroll on link click
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      // console.log("begin");
    });
    Events.scrollEvent.register("end", (to, element) => {
      // console.log("end");
    });
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <Sidebar
        openDrawerRight={openDrawerRight}
        closeDrawerRight={closeDrawerRight}
        openRight={openRight}
      />
      <nav
        className={`${navbarStyle} ${
          location.pathname !== "/" && "non-index-navbar default-transition"
        } fixed top-0 left-0 right-0 z-[999] flex items-center`}
      >
        <div
          className="absolute bottom-0 left-0 h-[5px] bg-red"
          style={{
            width: `${hasBackground ? Math.ceil(scrollProgress) : 0}%`,
          }}
        ></div>
        <div className="container flex items-center justify-between">
          <Link
            to="/"
            className="font-bold text-3xl inline-flex items-center gap-x-2 nav-brand"
          >
            <BiSolidLeaf className="text-red" />
            <span
              className={`${
                location.pathname === "/" ? "text-white" : "text-dark"
              }`}
            >
              YNL.
            </span>
          </Link>
          <button
            onClick={openDrawerRight}
            type="button"
            className="text-white lg:hidden ms-auto navbar-open-btn"
          >
            <BiMenu size={36} />
          </button>
          <div>
            <ul className="items-center gap-x-3 nav-list hidden lg:flex">
              <li>
                <Menu
                  placement="top-end"
                  open={openMenu3}
                  handler={setOpenMenu3}
                  allowHover
                >
                  <MenuHandler>
                    <Link className="text-white capitalize py-1 xl:mx-3 mx-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium flex items-center gap-x-2 outline-none group">
                      <span className="">About</span>
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform  ${
                          openMenu3 ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </MenuHandler>
                  <MenuList className="hidden min-w-[auto] w-12rem grid-cols-7 lg:grid p-0 px-2 m-0  border-none bg-white">
                    <ul className="col-span-7 flex w-full flex-col gap-1 py-2 outline-none border-0">
                      <Link
                        to="/about"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Who we are
                          </h4>
                        </div>
                      </Link>
                      {location.pathname === "/" ? (
                        <ScrollLink
                          className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                          to="intro"
                          smooth={true}
                          duration={400}
                          offset={-40}
                        >
                          <div className="px-1 py-1">
                            <h4 className="text-sm font-medium text">
                              Our beliefs
                            </h4>
                          </div>
                        </ScrollLink>
                      ) : (
                        <Link
                          className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                          to="/"
                        >
                          <div className="px-1 py-1">
                            <h4 className="text-sm font-medium text">
                              Our beliefs
                            </h4>
                          </div>
                        </Link>
                      )}

                      {location.pathname === "/" ? (
                        <ScrollLink
                          className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                          to="members"
                          smooth={true}
                          duration={400}
                          offset={-40}
                        >
                          <div className="px-1 py-1">
                            <h4 className="text-sm font-medium text">
                              Leadership
                            </h4>
                          </div>
                        </ScrollLink>
                      ) : (
                        <Link
                          className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                          to="/"
                        >
                          <div className="px-1 py-1">
                            <h4 className="text-sm font-medium text">
                              Leadership
                            </h4>
                          </div>
                        </Link>
                      )}
                      {location.pathname === "/" ? (
                        <ScrollLink
                          className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                          to="ministries"
                          smooth={true}
                          duration={400}
                          offset={-40}
                        >
                          <div className="px-1 py-1">
                            <h4 className="text-sm font-medium text">
                              Ministries
                            </h4>
                          </div>
                        </ScrollLink>
                      ) : (
                        <Link
                          className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                          to="/"
                        >
                          <div className="px-1 py-1">
                            <h4 className="text-sm font-medium text">
                              Ministries
                            </h4>
                          </div>
                        </Link>
                      )}
                    </ul>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Menu
                  placement="top-end"
                  open={openMenu}
                  handler={setOpenMenu}
                  allowHover
                >
                  <MenuHandler>
                    <Link className="text-white capitalize py-1 xl:mx-3 mx-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium flex items-center gap-x-2 outline-none group">
                      <span className="">Locations</span>
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform  ${
                          openMenu ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </MenuHandler>
                  <MenuList className="hidden w-[10rem] grid-cols-7 lg:grid p-0 px-2 m-0 border-none">
                    <ul className="col-span-7 flex w-full flex-col gap-1 py-2 outline-none border-0">
                      <ScrollLink
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                        to="map"
                        smooth={true}
                        duration={400}
                        offset={-40}
                      >
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Lamachour Marg, Jhamsikhel, Lalitpur
                          </h4>
                        </div>
                      </ScrollLink>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Damak, Jhapa
                          </h4>
                        </div>
                      </MenuItem>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Surunga, Jhapa
                          </h4>
                        </div>
                      </MenuItem>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Birtamod, Jhapa
                          </h4>
                        </div>
                      </MenuItem>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Urlabari, Morang
                          </h4>
                        </div>
                      </MenuItem>
                      <Link
                        to="/branch"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">See ALL</h4>
                        </div>
                      </Link>
                    </ul>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Menu
                  placement="top-end"
                  open={openMenu2}
                  handler={setOpenMenu2}
                  allowHover
                >
                  <MenuHandler>
                    <Link className="text-white capitalize py-1 xl:mx-3 mx-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium flex items-center gap-x-2 outline-none group">
                      <span className="">Services</span>
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform  ${
                          openMenu2 ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </MenuHandler>
                  <MenuList className="hidden min-w-[auto] w-12rem grid-cols-7 lg:grid p-0 px-2 m-0  border-none bg-white">
                    <ul className="col-span-7 flex w-full flex-col gap-1 py-2 outline-none border-0">
                      <Link
                        to="/watch"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">
                            Worship Service
                          </h4>
                        </div>
                      </Link>
                      <Link
                        to="/event"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">Events</h4>
                        </div>
                      </Link>
                      <Link
                        to="/request"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">
                            Prayer Request
                          </h4>
                        </div>
                      </Link>
                    </ul>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Menu
                  placement="top-end"
                  open={openMenu4}
                  handler={setOpenMenu4}
                  allowHover
                >
                  <MenuHandler>
                    <Link className="text-white capitalize py-1 xl:mx-3 mx-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium flex items-center gap-x-2 outline-none group">
                      <span className="">Media</span>
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform  ${
                          openMenu4 ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </MenuHandler>
                  <MenuList className="hidden min-w-[auto] w-12rem grid-cols-7 lg:grid p-0 px-2 m-0 border-none bg-white">
                    <ul className="col-span-7 flex w-full flex-col gap-1 py-2 outline-none border-0">
                      <Link
                        to="/gallery"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">Photos</h4>
                        </div>
                      </Link>
                      <Link
                        to="/media"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">Sermons</h4>
                        </div>
                      </Link>
                      <Link
                        to="/media2"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">
                            Testimonials
                          </h4>
                        </div>
                      </Link>
                      <Link
                        to="/watch"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-1.5 cursor-pointer hover:bg-whitesmoke rounded"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">
                            Watch Live
                          </h4>
                        </div>
                      </Link>
                    </ul>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Link
                  className="text-white capitalize py-1 xl:px-3 px-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium cursor-pointer group"
                  to="/event"
                >
                  <span className="">Events</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/article"
                  className="text-white capitalize py-1 xl:px-3 px-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium group"
                >
                  <span className="">Articles</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-white capitalize py-1 xl:px-3 px-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium inline-flex items-center gap-x-2 group"
                >
                  <span className="">Contribute</span>
                  <FaHandHoldingHeart className="" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="social-links hidden xl:block">
            <ul className="flex items-center gap-x-4">
              <li>
                <Link
                  to=""
                  className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded-full bg-blue group"
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
                  className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded-full instagram group"
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
                  className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded-full bg-red group"
                >
                  <TbBrandYoutubeFilled
                    size={23}
                    className="me-[1px] group-hover:scale-90 default-transition"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
