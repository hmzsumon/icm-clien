import HomeFooter from '@/components/Layouts/HomeFooter';
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
			<div className=' grid md:grid-cols-10 pt-14 '>
				<div className=' hidden md:block md:col-span-2'>
					<UserSidebar />
				</div>

				<div className=' md:col-span-8 bg-white w-full '>{children}</div>
			</div>
			<HomeFooter />
		</div>
	);
};

export default AuthLayout;
