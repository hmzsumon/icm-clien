'use client';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import UserImg from '@/public/user.png';
import SmallDeviceDrawer from './SmallDeviceDrawer';
import { useSelector } from 'react-redux';
import { FcMoneyTransfer } from 'react-icons/fc';
import Notification from './Notification';
import CopyToClipboard from '@/lib/CopyToClipboard';
import { useRouter } from 'next/navigation';
import { useLogoutUserMutation } from '@/redux/features/auth/authApi';
import { useEffect } from 'react';

const UserNavbar = () => {
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
		<Navbar
			fluid
			rounded
			className=' fixed w-full rounded-none bg-gray-900 z-40'
		>
			<div className=' md:hidden '>
				{/*Start Small Device drawer content here */}
				<SmallDeviceDrawer />
				{/*End Small Device drawer content here */}
			</div>
			<Navbar.Brand>
				<Link
					className='md:flex items-center gap-2 lg:navbar-start navbar-center'
					href='/'
				>
					<Image src={Logo} alt='' quality={100} className='w-44 md:w-96' />
				</Link>
			</Navbar.Brand>

			<div className=' hidden md:block'>
				<div className=' text-gray-100 flex items-center gap-2 md:text-xl '>
					<FcMoneyTransfer />
					{Number(user?.m_balance).toLocaleString(undefined, {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}{' '}
					USDT
				</div>
			</div>

			<div className=' flex items-center justify-between gap-6'>
				{/*Start Notification Nav Item  */}
				<div className=' '>
					<Notification />
				</div>
				{/*End Notification Nav Item  */}

				{/* Start  Dropdown */}
				<Dropdown
					arrowIcon={false}
					className=''
					inline
					label={
						<Avatar
							alt='User settings'
							img='https://i.ibb.co/0XyYZ6j/user.png'
							rounded
							className='bg-gray-200 w-10 h-10 rounded-full object-cover ring-2 ring-lime-500 p-1'
						/>
					}
				>
					<Dropdown.Header className='space-y-1'>
						<span className='block text-sm'>{user?.name}</span>
						<span className='block truncate text-sm font-medium'>
							{user?.email}
						</span>
						<span className=' flex text-left col-span-5 text-[#73787C] font-semibold '>
							{user?.partner_id}
							<CopyToClipboard text={user?.partner_id} />
						</span>
					</Dropdown.Header>
					<Dropdown.Item>
						<div className=' text-gray-700 flex items-center gap-2 font-semibold '>
							<FcMoneyTransfer className=' text-xl' />
							{Number(user?.m_balance).toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}{' '}
							USDT
						</div>
					</Dropdown.Item>

					<Dropdown.Divider />
					<Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
				</Dropdown>
			</div>
		</Navbar>
	);
};

export default UserNavbar;
