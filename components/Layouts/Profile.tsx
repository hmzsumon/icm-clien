import React from 'react';
import { RxAvatar } from 'react-icons/rx';

const Profile = () => {
	return (
		<div className='dropdown dropdown-bottom  flex justify-end'>
			<div
				tabIndex={0}
				role='button'
				className='rounded-none flex items-center cursor-pointer'
			>
				<RxAvatar className='text-3xl' />
			</div>
			<ul
				tabIndex={0}
				className=' bg-icm-black-2 dropdown-content rounded-b-lg -right-2 md:-right-6 w-[300px] h-[fit-content] z-[1] mt-4 md:mt-6'
			>
				<div className='space-y-3'>
					<div className='text-center py-5 space-y-3'>
						<p className='w-[fit-content] mx-auto p-3 text-2xl bg-[#0F171C] rounded-full'>
							<RxAvatar />
						</p>
						<p className='text-sm text-[#73787C] font-semibold'>
							your············25@gmail.com
						</p>
					</div>
					<div className='h-[0.5px] bg-slate-500 w-full my-3'></div>
					<ul className='text-left py-3'>
						<li>
							<a
								className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
								href=''
							>
								Setting
							</a>
						</li>
						<li>
							<a
								className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
								href=''
							>
								Tranding conditions
							</a>
						</li>
						<div className='h-[0.5px] bg-slate-500 w-full my-5'></div>
						<li>
							<a
								className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
								href=''
							>
								Sign Out
							</a>
						</li>
					</ul>
				</div>
			</ul>
		</div>
	);
};

export default Profile;
