import React from 'react';

const ArchitectRoadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 h-screen overflow-hidden">
      <iframe 
        src="https://roadmap.sh/r/embed?id=67b9c43da8c88d6e35f46002" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="Architect Roadmap"
        className="mt-12 mb-8 overflow-auto"
      ></iframe>
    </div>
  );
};

export default ArchitectRoadmap;