import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';

const Notification = () => {
	return (
		<div className='drawer z-50 drawer-end w-[fit-content]  flex items-center justify-center '>
			<input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>
				{/* Page content here */}
				<label htmlFor='my-drawer-4' className='text-2xl '>
					<IoMdNotifications className='text-3xl text-white cursor-pointer' />
				</label>
			</div>

			<div className='drawer-side'>
				<ul className='menu p-4 bg-icm-black-2   w-full md:w-80 min-h-full  text-base-content'>
					<li className='border-b border-slate-700 '>
						{' '}
						<label
							htmlFor='my-drawer-4'
							aria-label='close sidebar'
							className='text-2xl mt-3 mb-5 flex items-center justify-between text-white'
						>
							<span className='text-lg    ml-3'>Your Notifications</span>
							<FaTimes />
						</label>
					</li>
					{/* Sidebar content here */}
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Notification;
