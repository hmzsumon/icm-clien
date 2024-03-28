'use client';
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
	return (
		<FacebookProvider appId='394322920048471' chatSupport>
			<CustomChat pageId='218924607964834' minimized={true} />
		</FacebookProvider>
	);
};

export default FacebookMsg;
