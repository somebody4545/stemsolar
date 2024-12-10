import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Selected from "./pages/Selected.jsx";
// import Login  from './pages/login.jsx';
import Header from "./templates/Header.jsx";
import Footer from "./templates/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div>
              <Header />
              {/* Route to all pages */}
              <Routes>
                  <Route path="/" element={<Home />} />
              </Routes>
              <Footer />
          </div>
      </>
  );z
}

export default App
