'use client';

import Script from 'next/script';

const ChatWidget = () => {
  return (
    <>
      <Script
        id="chat-widget-loader"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="68faaaffbb21f14a2f41c494"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Chat widget loaded successfully');
        }}
        onError={(e) => {
          console.error('Chat widget failed to load:', e);
        }}
      />
      <div
        data-chat-widget
        data-widget-id="68faaaffbb21f14a2f41c494"
        data-location-id="fNJSD3BioM98OXxY17Gm"
      />
    </>
  );
};

export default ChatWidget;

