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
				<div className='px-2 md:col-span-5 bg-zinc-300 w-full'>{children}</div>
			</div>
			<HomeFooter />
		</div>
	);
};

export default AuthLayout;
