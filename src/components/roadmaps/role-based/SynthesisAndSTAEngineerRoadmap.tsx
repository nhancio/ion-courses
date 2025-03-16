import React from 'react';

const SynthesisAndSTAEngineerRoadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 h-screen overflow-hidden">
      <iframe 
        src="https://roadmap.sh/r/embed?id=67c3eed8580201fc77bdb4ed" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="Synthesis and STA Engineer Roadmap"
        className="mt-12 mb-8 overflow-auto" // Adjusted margin-top and added margin-bottom
      ></iframe>
    </div>
  );
};

export default SynthesisAndSTAEngineerRoadmap;