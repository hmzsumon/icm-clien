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
			<div className='container px-5 lg:px-0 mx-auto'>
				<div className='navbar p-0'>
					{/*Start Small Device drawer content here */}
					<SmallDeviceSidebar />
					{/*End Small Device drawer content here */}

					{/* Nav bar Big Device All Contents */}
					<Link
						className='flex items-center gap-2 lg:navbar-start navbar-center'
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

					<div className='navbar-end '>
						{/*Start Wallet Info  */}
						<WalletInfo />
						{/*End Wallet Info  */}

						{/*Start Notification Nav Item  */}
						<Notification />
						{/*End Notification Nav Item  */}

						{/*Start Profile Nav Item  */}
						<Profile />
						{/*End Profile Nav Item  */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNavBar;
