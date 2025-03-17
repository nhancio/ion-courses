import React from 'react';

const PVEngineerRoadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 h-screen overflow-hidden">
      <iframe 
        src="https://roadmap.sh/r/embed?id=67c40a59580201fc77c11ad8" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="PV Engineer Roadmap"
        className="mt-12 mb-8 overflow-auto"
      ></iframe>
    </div>
  );
};

export default PVEngineerRoadmap;