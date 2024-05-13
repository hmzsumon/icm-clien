'use client';
import React, { useEffect } from 'react';

const TawkTo = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://embed.tawk.to/66423e2007f59932ab3f11de/1htpc5c6n';
		script.charset = 'UTF-8';
		script.setAttribute('crossorigin', '*');

		document.body.appendChild(script);
	}, []);

	return <div id='tawkto-chat-widget' />;
};

export default TawkTo;
