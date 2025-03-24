import React from 'react';

const CxL2Roadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 h-screen overflow-hidden">
      <iframe 
        src="https://roadmap.sh/r/embed?id=67dc2f420bcc62b83d287e2a" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="CxL 2.0 Roadmap"
        className="mt-12 mb-8 overflow-auto"
      ></iframe>
    </div>
  );
};

export default CxL2Roadmap;
