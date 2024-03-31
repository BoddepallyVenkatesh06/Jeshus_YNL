import { Outlet } from "react-router-dom";
import { Header, Footer, SideMediaLinks } from "../index";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <SideMediaLinks />
      <main className="overflow-y-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default BaseLayout
