import React from 'react';

const PDEngineerRoadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 h-screen overflow-hidden">
      <iframe 
        src="https://roadmap.sh/r/embed?id=67c40577580201fc77c076ad" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="PD Engineer Roadmap"
        className="mt-12 mb-8 overflow-auto"
      ></iframe>
    </div>
  );
};

export default PDEngineerRoadmap;