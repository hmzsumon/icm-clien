'use client';
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
	return (
		<FacebookProvider appId='25022142210767444' chatSupport>
			<CustomChat pageId='218924607964834' minimized={true} />
		</FacebookProvider>
	);
};

export default FacebookMsg;
