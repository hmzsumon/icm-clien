import HomeFooter from '@/components/Layouts/HomeFooter';
import HomeNavbar from '@/components/Layouts/HomeNavbar';
import RegisterBanner from '@/components/Register/RegisterBanner';
import TawkTo from '@/lib/TawkTo';
import React from 'react';

const HomeLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			<HomeNavbar />
			{children}
			<HomeFooter />
			<TawkTo />
		</div>
	);
};

export default HomeLayout;
