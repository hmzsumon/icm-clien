import HomeFooter from '@/components/Layouts/HomeFooter';
import HomeNavbar from '@/components/Layouts/HomeNavbar';
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
		</div>
	);
};

export default HomeLayout;
