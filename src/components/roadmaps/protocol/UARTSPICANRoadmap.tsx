import React from 'react';

const UARTSPICANRoadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 h-screen overflow-hidden">
      <iframe 
        src="https://roadmap.sh/r/embed?id=67d8625c0ac560d683dffe0e" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="UART, SPI, I2C Roadmap"
        className="mt-12 mb-8 overflow-auto"
      ></iframe>
    </div>
  );
};

export default UARTSPICANRoadmap;
