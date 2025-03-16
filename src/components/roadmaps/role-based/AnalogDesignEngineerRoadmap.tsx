import React from 'react';

const AnalogDesignEngineerRoadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Removed heading */}
      <iframe 
        src="https://roadmap.sh/r/embed?id=67c3eed8580201fc77bdb4ed" 
        width="100%" 
        height="500px" 
        frameBorder="0"
        title="Analog Design Engineer Roadmap"
        className="mt-12 mb-8" // Adjusted margin-top and added margin-bottom
      ></iframe>
    </div>
  );
};

export default AnalogDesignEngineerRoadmap;