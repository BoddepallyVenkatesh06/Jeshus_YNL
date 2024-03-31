import { useEffect } from "react";
import { About, Banner, Events, Gallery, Intro, Members, Ministries } from "../../components";
import Articles from "../../components/common/Articles";
import { scrollToTop } from "../../utils/scrollToTop";

const Home = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <div>
      <Banner />
      <Intro />
      <About />
      <Events />
      <Ministries />
      <Gallery />
      <Articles />
      <Members />
    </div>
  );
};

export default Home;
