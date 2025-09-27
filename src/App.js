// import React from "react";
// import "./App.css";
// import backgroundVideo from "./components/assets/background.mp4"; // full-page background video
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import PSection from "./components/Psection"; // make sure filename matches
// import Project from "./components/Project";
// import Tech from "./components/Tech";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";


// export default function App() {
//   return (
//     <div className="app-container">
//       {/* Full-page background video */}
//       <video
//         className="background-video"
//         src={backgroundVideo}
//         autoPlay
//         loop
//         muted
//       />

//       {/* All content on top of video */}
//       <div className="content">
//         <Navbar />
//         <About />
//         <PSection />
//         <Project />
//         <Tech />
//         <Testimonials />
//         <Footer />
      
        
//       </div>
//     </div>
//   );
// }




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import backgroundVideo from "./components/assets/background.mp4";

import Navbar from "./components/Navbar";
import About from "./components/About";
import PSection from "./components/Psection";
import Project from "./components/Project";
import Tech from "./components/Tech";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact"; // ✅ import Contact

export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Full-page background video */}
        <video
          className="background-video"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />

        {/* All content on top of video */}
        <div className="content">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <PSection />
                  <Project />
                  <Tech />
                  <Testimonials />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} /> {/* ✅ Contact Route */}
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

