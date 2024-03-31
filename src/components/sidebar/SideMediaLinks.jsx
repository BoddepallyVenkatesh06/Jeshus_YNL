import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideMediaLinks = () => {
  return (
    <ul className="flex flex-col gap-y-2 items-center z-[999] fixed top-1/2 left-0 ms-2 xl:hidden">
      <li>
        <Link
          to=""
          className="text-white w-[38px] h-[38px] shadow-md inline-flex rounded-full items-center justify-center bg-blue group"
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
          className="text-white w-[38px] h-[38px] shadow-md inline-flex rounded-full items-center justify-center instagram group"
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
          className="text-white w-[38px] h-[38px] shadow-md inline-flex rounded-full items-center justify-center bg-red group"
        >
          <TbBrandYoutubeFilled
            size={23}
            className="me-[1px] group-hover:scale-90 default-transition"
          />
        </Link>
      </li>
    </ul>
  );
};

export default SideMediaLinks;
