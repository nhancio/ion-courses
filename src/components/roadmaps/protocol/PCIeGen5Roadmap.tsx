import React from 'react';

const PCIeGen5Roadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 h-screen overflow-hidden">
      <iframe 
        src="https://roadmap.sh/r/embed?id=67dc2f2b0bcc62b83d2879c9" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="PCIe Gen5 Roadmap"
        className="mt-12 mb-8 overflow-auto"
      ></iframe>
    </div>
  );
};

export default PCIeGen5Roadmap;
