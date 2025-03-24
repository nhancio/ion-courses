import React from 'react';

const VerilogForDesignRoadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 h-screen overflow-hidden">
      <iframe 
        src="https://roadmap.sh/r/embed?id=67d862a00ac560d683e01137" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="Verilog for Design Roadmap"
        className="mt-12 mb-8 overflow-auto" // Adjusted margin-top and added margin-bottom
      ></iframe>
    </div>
  );
};

export default VerilogForDesignRoadmap;
