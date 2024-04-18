'use client';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { useLogoutUserMutation } from '@/redux/features/auth/authApi';
import React, { useEffect } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { useRouter } from 'next/navigation';

const Profile = () => {
	const router = useRouter();
	const [logout, { data, isLoading, isSuccess, isError, error }] =
		useLogoutUserMutation();

	// handle logout
	const handleLogout = async () => {
		logout(undefined);
	};

	// useEffect to handle success
	useEffect(() => {
		if (isSuccess) {
			toast.success('Logout successful');
			router.push('/');
		}

		if (isError) {
			toast.error((error as fetchBaseQueryError).data?.message);
		}
	}, [isSuccess, isError, error]);

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
				className=' bg-icm-black-2 dropdown-content rounded-bl-lg -right-2 md:-right-6 w-[300px] h-[fit-content] z-[1] mt-4 md:mt-6'
			>
				<div className='space-y-3'>
					<div className='text-center py-5 space-y-3'>
						<p className='text-sm text-[#73787C] font-semibold'>
							zakaria@gmail.com
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
							<button
								className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-icm-green'
								onClick={handleLogout}
							>
								Sign Out
							</button>
						</li>
					</ul>
				</div>
			</ul>
		</div>
	);
};

export default Profile;
