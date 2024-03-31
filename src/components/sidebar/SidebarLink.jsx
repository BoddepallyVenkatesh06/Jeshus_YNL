import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarLink = ({ closeDrawerRight, linkData }) => {
  return (
    <li>
      <Link
        to={linkData.link}
        className="text-white text-base capitalize py-2 block hover:opacity-80 font-inter tracking-[0.5px] font-medium outline-none px-3 hover:bg-white/10 hover:rounded"
        onClick={closeDrawerRight}
      >
        {linkData.name}
      </Link>
    </li>
  );
};

export default SidebarLink;

SidebarLink.propTypes = {
  closeDrawerRight: PropTypes.func,
  linkData: PropTypes.object,
};
