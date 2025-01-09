import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Selected from "./pages/Selected.jsx";
// import Login  from './pages/login.jsx';
import Header from "./templates/Header.jsx";
import Footer from "./templates/Footer.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import Timeline from "./pages/Timeline.jsx";
import Future from "./pages/Future.jsx";
import Progress from "./pages/Progress.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div>
              <Header />
              {/* Route to all pages */}
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NoMatch />} />
                  <Route path="/timeline" element={<Timeline />} />
                  <Route path={"/future"} element={<Future />} />
                  <Route path={"/current"} element={<Progress />} />
              </Routes>
              <Footer />
          </div>
      </>
  );
}

export default App
