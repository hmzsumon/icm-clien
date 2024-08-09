'use client';
import HomeFooter from '@/components/Layouts/HomeFooter';
import UserNavbar from '@/components/Layouts/UserNavbar';
import UserSidebar from '@/components/Layouts/UserSidebar';
import { Button, Modal } from 'flowbite-react';
import React, { useState, useEffect } from 'react';

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		const lastShown = localStorage.getItem('noticeLastShown');
		const today = new Date().toLocaleDateString();

		if (lastShown !== today) {
			setOpenModal(true);
			localStorage.setItem('noticeLastShown', today);
		}
	}, []);

	return (
		<div>
			<UserNavbar />
			<div className='grid md:grid-cols-10 pt-14'>
				<div className='hidden md:block md:col-span-2'>
					<UserSidebar />
				</div>

				<div className='md:col-span-8 bg-white w-full'>{children}</div>
			</div>
			<HomeFooter />

			{/* Start Modal */}
			<>
				<Modal show={openModal} onClose={() => setOpenModal(false)}>
					<Modal.Header>
						Notice: Update to Profit Distribution Schedule
					</Modal.Header>
					<Modal.Body>
						<div className='space-y-6'>
							<p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
								Dear Users,
								<br /> As you may already know, ICM MONEY has been providing
								users with profits 6 days a week by investing money in
								international forex markets and providing financial services to
								various companies. But as crypto trade is currently risky, the
								security of invested assets is reduced. In this case, ICM Money
								will refrain from crypto market trade from next week for the
								financial security of users, so it has been decided to pay
								profit 5 days a week instead of 6 days from next week. All users
								are requested to look positively in this regard.
								<br />
								Thank you, <br /> ICM MONEY Admin.
							</p>
						</div>
					</Modal.Body>
				</Modal>
			</>
			{/* End Modal */}
		</div>
	);
};

export default AuthLayout;
