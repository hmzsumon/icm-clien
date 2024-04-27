'use client';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { useLogoutUserMutation } from '@/redux/features/auth/authApi';
import React, { useEffect } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import CopyToClipboard from '@/lib/CopyToClipboard';

const Profile = () => {
	const router = useRouter();
	const [logout, { data, isLoading, isSuccess, isError, error }] =
		useLogoutUserMutation();

	const { user } = useSelector((state: any) => state.auth);

	// handle logout
	const handleLogout = async () => {
		logout(undefined);
		Cookies.remove('icm-token');
		router.push('/');
	};

	// useEffect to handle success
	useEffect(() => {
		if (isSuccess) {
			toast.success('Logout successful');
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
					{/* Upper Section */}
					<div className='py-5 px-1 text-xs text-left space-y-1  '>
						<li className=' grid grid-cols-9 gap-3'>
							<span className=' col-span-3'>Name</span>
							<span className=' col-span-1'>:</span>
							<span className=' text-left col-span-5 text-[#73787C] font-semibold '>
								{user?.name}
							</span>
						</li>
						<li className=' grid grid-cols-9 gap-3'>
							<span className=' col-span-3'>Email</span>
							<span className=' col-span-1'>:</span>
							<span className=' text-left col-span-5 text-[#73787C] font-semibold '>
								{user?.email}
							</span>
						</li>
						<li className=' grid grid-cols-9 gap-3'>
							<span className=' col-span-3'>Partner Id</span>
							<span className=' col-span-1'>:</span>
							<span className=' flex text-left col-span-5 text-[#73787C] font-semibold '>
								{user?.partner_id}
								<CopyToClipboard text={user?.partner_id} />
							</span>
						</li>
					</div>
					{/* End Upper Section */}
					<div className='h-[0.5px] bg-slate-500 w-full my-3'></div>
					{/* Middle Section */}

					{/* End Middle Section */}
				</div>
				<li>
					<button
						className='w-full block  text-[14px] bg-icm-green rounded-b-md hover:bg-[#0F171C] py-2 hover:text-icm-green'
						onClick={handleLogout}
					>
						Sign Out
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Profile;
