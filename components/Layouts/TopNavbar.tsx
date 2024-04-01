'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TbWorld } from 'react-icons/tb';
import { GoQuestion } from 'react-icons/go';
import { PiDotsNineBold, PiPlugsLight } from 'react-icons/pi';
import { TbLayoutGridAdd } from 'react-icons/tb';
import {
	FaAngleLeft,
	FaAngleRight,
	FaBars,
	FaUserGroup,
} from 'react-icons/fa6';
import { SiWebstorm } from 'react-icons/si';
import { IoMdNotifications } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import { LuLayoutDashboard } from 'react-icons/lu';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import { RiShareForward2Fill } from 'react-icons/ri';
import { GiTimeTrap } from 'react-icons/gi';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { TiSocialInstagram } from 'react-icons/ti';
import { DiGoogleAnalytics } from 'react-icons/di';
import { IoCloseCircleSharp, IoSettingsSharp } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';
import SmallDeviceSidebar from './SmallDeviceSidebar';
import WalletInfo from './WalletInfo';
import Notification from './Notification';
import Profile from './Profile';

const TopNavBar = () => {
	return (
		<div className='text-center bg-[#0f171c] text-white fixed top-0 w-full'>
			<div className=' px-2 lg:px-6 mx-auto'>
				<div className='navbar p-0 '>
					<div className='mr-16 '>
						{/*Start Small Device drawer content here */}
						<SmallDeviceSidebar />
						{/*End Small Device drawer content here */}
					</div>

					<div className='navbar-end w-full flex items-center justify-between gap-4 py-4'>
						<Link
							className='md:flex hidden items-center gap-2 lg:navbar-start navbar-center'
							href='/'
						>
							<Image
								className='w-[200px]'
								src='/logo.png'
								alt=''
								width={200}
								height={100}
								quality={100}
							/>
						</Link>

						<Link
							className='flex lg:hidden items-center gap-2 lg:navbar-start navbar-center'
							href='/'
						>
							<Image
								className='w-[200]'
								src='/logo2.png'
								alt=''
								width={150}
								height={50}
								quality={100}
							/>
						</Link>
					</div>

					{/*Start Wallet Info  */}
					<WalletInfo />
					{/*End Wallet Info  */}

					<div className='navbar-end w-full  items-center flex justify-end  gap-4 '>
						{' '}
						{/*Start Notification Nav Item  */}
						<div className=' '>
							<Notification />
						</div>
						{/*End Notification Nav Item  */}
						{/*Start Profile Nav Item  */}
						<div className=''>
							<Profile />
						</div>
						{/*End Profile Nav Item  */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNavBar;
