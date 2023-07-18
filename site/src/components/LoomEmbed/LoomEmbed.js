import React from 'react';

function LoomEmbed() {
  return (
    <div style={{position: "relative", paddingBottom: "NaN%", height: 0}}>
      <iframe 
        src="https://www.loom.com/embed/c9cf7f2ed54b4eeba6e7121bc9e15c71?sid=04b4edfb-ce60-469e-a425-5d8385de5dea" 
        frameborder="0" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
      </iframe>
    </div>
  );
}
export default LoomEmbed;