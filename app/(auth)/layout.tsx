import HomeFooter from '@/components/Layouts/HomeFooter';
import HomeFooter2 from '@/components/Layouts/HomeFooter2';
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
			<div className=' grid md:grid-cols-9 pt-16 md:pt-20'>
				<div className=' md:col-span-2'>
					<SideNavBar />
				</div>

				<div className=' md:col-span-7 bg-white w-full'>{children}</div>
			</div>
			<HomeFooter />
		</div>
	);
};

export default AuthLayout;
