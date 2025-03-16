import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import TawkToChat from './components/TawkToChat'; // Commented out
import Login from './components/Login';
import MainContent from './components/MainContent';
import RTLDesignEngineerRoadmap from './components/roadmaps/role-based/RTLDesignEngineerRoadmap';
import VerificationEngineerRoadmap from './components/roadmaps/role-based/VerificationEngineerRoadmap';
import DFTEngineerRoadmap from './components/roadmaps/role-based/DFTEngineerRoadmap';
import SynthesisAndSTAEngineerRoadmap from './components/roadmaps/role-based/SynthesisAndSTAEngineerRoadmap';
import PDEngineerRoadmap from './components/roadmaps/role-based/PDEngineerRoadmap';
import PVEngineerRoadmap from './components/roadmaps/role-based/PVEngineerRoadmap';
import AnalogDesignEngineerRoadmap from './components/roadmaps/role-based/AnalogDesignEngineerRoadmap';
import ArchitectRoadmap from './components/roadmaps/role-based/ArchitectRoadmap';
import SafetyAndSecurityHWEngineerRoadmap from './components/roadmaps/role-based/SafetyAndSecurityHWEngineerRoadmap';
import VerilogForDesignRoadmap from './components/roadmaps/language/VerilogForDesignRoadmap';
import SystemVerilogForVerificationRoadmap from './components/roadmaps/language/SystemVerilogForVerificationRoadmap';
import SVUVMForVerificationRoadmap from './components/roadmaps/language/SVUVMForVerificationRoadmap';
import SystemCForModelingRoadmap from './components/roadmaps/language/SystemCForModelingRoadmap';
import PythonForFlowAutomationRoadmap from './components/roadmaps/language/PythonForFlowAutomationRoadmap';
import AMBAAXI4Roadmap from './components/roadmaps/protocol/AMBAAXI4Roadmap';
import UARTSPICANRoadmap from './components/roadmaps/protocol/UARTSPICANRoadmap';
import PCIeGen5Roadmap from './components/roadmaps/protocol/PCIeGen5Roadmap';
import CxL2Roadmap from './components/roadmaps/protocol/CxL2Roadmap';
import AutomotiveProtocolsRoadmap from './components/roadmaps/protocol/AutomotiveProtocolsRoadmap';

function App() {
  return (
    <Router>
      <div className="font-sans text-base leading-relaxed">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/rtl-design-engineer-roadmap" element={<RTLDesignEngineerRoadmap />} />
          <Route path="/verification-engineer-roadmap" element={<VerificationEngineerRoadmap />} />
          <Route path="/dft-engineer-roadmap" element={<DFTEngineerRoadmap />} />
          <Route path="/synthesis-and-sta-engineer-roadmap" element={<SynthesisAndSTAEngineerRoadmap />} />
          <Route path="/pd-engineer-roadmap" element={<PDEngineerRoadmap />} />
          <Route path="/pv-engineer-roadmap" element={<PVEngineerRoadmap />} />
          <Route path="/analog-design-engineer-roadmap" element={<AnalogDesignEngineerRoadmap />} />
          <Route path="/architect-roadmap" element={<ArchitectRoadmap />} />
          <Route path="/safety-and-security-hw-engineer-roadmap" element={<SafetyAndSecurityHWEngineerRoadmap />} />
          <Route path="/verilog-for-design-roadmap" element={<VerilogForDesignRoadmap />} />
          <Route path="/systemverilog-for-verification-roadmap" element={<SystemVerilogForVerificationRoadmap />} />
          <Route path="/sv-uvm-for-verification-roadmap" element={<SVUVMForVerificationRoadmap />} />
          <Route path="/systemc-for-modeling-roadmap" element={<SystemCForModelingRoadmap />} />
          <Route path="/python-for-flow-automation-roadmap" element={<PythonForFlowAutomationRoadmap />} />
          <Route path="/amba-axi4-roadmap" element={<AMBAAXI4Roadmap />} />
          <Route path="/uart-spi-can-roadmap" element={<UARTSPICANRoadmap />} />
          <Route path="/pcie-gen5-roadmap" element={<PCIeGen5Roadmap />} />
          <Route path="/cxl2-roadmap" element={<CxL2Roadmap />} />
          <Route path="/automotive-protocols-roadmap" element={<AutomotiveProtocolsRoadmap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;