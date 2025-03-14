// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import MyNavbar from "./components/MyNavbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Society from "./pages/Society";
import MeetingRoom from "./pages/MeetingRoom";
// import ServiceSolution from "./pages/service/ServiceSolution";
import NetworkSolutions from "./pages/service/NetworkSolutions";
import DataCenter from "./pages/service/DataCenter";
import DataManagement from "./pages/service/DataManagement";
import CentralizeManagement from "./pages/service/CentralizeManagement";
import MultimediaSolution from "./pages/service/MultimediaSolution";
import DigitalTransformation from "./pages/service/DigitalTransformation";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        {/* หน้าเพจหลัก */}
        <Route path="/" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/society" element={<Society />} />
        <Route path="/meetingRoom" element={<MeetingRoom />} />

        {/* หน้า Service & Solution */}
        {/* <Route path="/service" element={<ServiceSolution />} /> */}
        <Route
          path="/service/network-solutions"
          element={<NetworkSolutions />}
        />
        <Route path="/service/data-center" element={<DataCenter />} />
        <Route path="/service/data-management" element={<DataManagement />} />
        <Route
          path="/service/centralize-management"
          element={<CentralizeManagement />}
        />
        <Route
          path="/service/multimedia-solution"
          element={<MultimediaSolution />}
        />
        <Route
          path="/service/digital-transformation"
          element={<DigitalTransformation />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
