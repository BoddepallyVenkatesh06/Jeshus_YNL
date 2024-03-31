import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";

const NotFoundScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <div>
      Page not found
    </div>
  )
}

export default NotFoundScreen
