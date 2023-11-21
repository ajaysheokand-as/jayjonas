import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Booking from "./pages/booking";
// import Feature from "./pages/feature";
import NavbarComponent from "./components/navbar.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <NavbarComponent />
        </Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="./services" element={<Service />} />
          <Route path="./talent-booking" element={<Booking />} />
          {/* <Route path="features" element={<Feature />} /> */}
          {/* <Route path="about-me" element={<About />} /> */}
          <Route path="./blog" element={<Blog />} />
          <Route path="./contact-me" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <RouteComponent /> */}
    </div>
  );
}

export default App;
