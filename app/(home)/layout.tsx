import HomeFooter from '@/components/Layouts/HomeFooter';
import HomeFooter2 from '@/components/Layouts/HomeFooter2';
import HomeNavbar from '@/components/Layouts/HomeNavbar';
import RegisterBanner from '@/components/Register/RegisterBanner';
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
			<HomeFooter2 />
		</div>
	);
};

export default HomeLayout;
