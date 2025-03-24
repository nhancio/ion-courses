import React from 'react';

const AnalogDesignEngineerRoadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 h-screen overflow-hidden">
      <iframe 
        src="https://roadmap.sh/r/embed?id=67d862e20ac560d683e022bb" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="Analog Design Engineer Roadmap"
        className="mt-12 mb-8 overflow-auto" // Adjusted margin-top and added margin-bottom
      ></iframe>
    </div>
  );
};

export default AnalogDesignEngineerRoadmap;