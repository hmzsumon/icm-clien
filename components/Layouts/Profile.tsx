import React from 'react';
import { RxAvatar } from 'react-icons/rx';

const Profile = () => {
	return (
		<div className='dropdown '>
			<div
				tabIndex={0}
				role='button'
				className='focus:bg-[#363d42] focus:text-[#FFCF01] rounded-none flex items-center gap-3 p-5 top-nav-item cursor-pointer'
			>
				<RxAvatar className='text-3xl' />
			</div>
			<ul
				tabIndex={0}
				className='dropdown-bg bg-icm-black-2 dropdown-content rounded-none right-0 w-[300px] h-[fit-content] z-[1] mt-0'
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
