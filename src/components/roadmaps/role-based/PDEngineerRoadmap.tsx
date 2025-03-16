import React from 'react';

const PDEngineerRoadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Removed heading */}
      <iframe 
        src="https://roadmap.sh/r/embed?id=67c3eed8580201fc77bdb4ed" 
        width="100%" 
        height="600px" 
        frameBorder="0"
        title="PD Engineer Roadmap"
        className="mt-12 mb-8" // Adjusted margin-top and added margin-bottom
      ></iframe>
    </div>
  );
};

export default PDEngineerRoadmap;