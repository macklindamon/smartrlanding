import React from 'react';

export function ArcadeEmbed() {
  return (
    <div style={{ position: 'relative', paddingBottom: 'calc(56.29139072847682% + 41px)', height: 0, width: '100%' }}>
      <iframe
        src="https://demo.arcade.software/fsMRxl7ADZR3OeyKBRqV?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
        title="Arcade Flow (Wed Jul 16 2025)"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          colorScheme: 'light',
          border: 'none',
          borderRadius: '16px',
          overflow: 'hidden'
        }}
      />
    </div>
  )
}

export default ArcadeEmbed;
