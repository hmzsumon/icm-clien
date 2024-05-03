import HomeFooter from '@/components/Layouts/HomeFooter';
import HomeFooter2 from '@/components/Layouts/HomeFooter2';
import SideNavBar from '@/components/Layouts/SideNavbar';
import TopNavBar from '@/components/Layouts/TopNavbar';
import UserNavbar from '@/components/Layouts/UserNavbar';
import UserSidebar from '@/components/Layouts/UserSidebar';
import React from 'react';

const AuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			<UserNavbar />
			<div className=' grid md:grid-cols-12 pt-16 '>
				<div className=' md:col-span-2'>
					<SideNavBar />
				</div>

				<div className=' md:col-span-10 bg-white w-full '>{children}</div>
			</div>
			<HomeFooter />
		</div>
	);
};

export default AuthLayout;
