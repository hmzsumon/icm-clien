import HomeFooter from '@/components/Layouts/HomeFooter';
import SideNavBar from '@/components/Layouts/SideNavbar';
import TopNavBar from '@/components/Layouts/TopNavbar';
import React from 'react';

const AuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			<TopNavBar />
			<div className=' grid md:grid-cols-6 pt-16 md:pt-20'>
				<div className=' col-span-1'>
					<SideNavBar />
				</div>
				<div className=' md:col-span-5 bg-white w-full'>{children}</div>
			</div>
			<HomeFooter />
		</div>
	);
};

export default AuthLayout;
