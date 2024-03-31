import { BaseLayout } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Articles,
  Home,
  PageNotFound,
  ArticleSingle,
  About,
  GalleryAlbum,
  GAlleryPhotos,
  Media,
  Donate,
  Request,
  Event,
  WatchLive,
  Branch,
  Media2
} from "./screens";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/article" element={<Articles />} />
            <Route path="/article/:id" element={<ArticleSingle />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<GalleryAlbum />} />
            <Route path="/gallery/:id" element={<GAlleryPhotos />} />
            <Route path="/media" element={<Media />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/request" element={<Request />} />
            <Route path="/event" element={<Event />} />
            <Route path="/watch" element={<WatchLive />} />
            <Route path="/branch" element={<Branch />} />
            <Route path="/media2" element={<Media2 /> } />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
