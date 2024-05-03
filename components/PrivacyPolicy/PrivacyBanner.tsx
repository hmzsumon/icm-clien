import React from 'react';

const PrivacyBanner = ({ title }: any) => {
	return (
		<div className='privacy-banner-bg bg-cover bg-center h-[200px] text-white space-y-2'>
			{/* <img src='/assets/live-banner.webp' alt='' /> */}
			<h2 className='text-3xl font-semibold  text-center pt-10'>{title}</h2>
		</div>
	);
};

export default PrivacyBanner;
