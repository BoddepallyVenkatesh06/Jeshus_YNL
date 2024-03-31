import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";

const MaintenanceScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <div>
      Under maintenance
    </div>
  )
}

export default MaintenanceScreen
