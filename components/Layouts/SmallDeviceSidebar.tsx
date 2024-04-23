'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { DiGoogleAnalytics } from 'react-icons/di';
import { FaAngleLeft, FaAngleRight, FaBars } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { GiTimeTrap } from 'react-icons/gi';
import { IoCloseCircleSharp, IoSettingsSharp } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { PiDownloadSimpleBold, PiPlugsLight } from 'react-icons/pi';
import { RiShareForward2Fill } from 'react-icons/ri';
import { SiWebstorm } from 'react-icons/si';
import { TbDeviceDesktopAnalytics, TbLayoutGridAdd } from 'react-icons/tb';
import { TiSocialInstagram } from 'react-icons/ti';
import navItems from '@/lib/navItems';

const linkItems = [
	{
		id: 1,
		name: 'Dashboard',
		link: '/dashboard',
		icon: <LuLayoutDashboard />,
	},
	{
		id: 2,
		name: 'Deposit',
		link: '/deposit',
		icon: <PiDownloadSimpleBold />,
	},
	{
		id: 3,
		name: 'Withdraw',
		link: '/withdraw',
		icon: <PiPlugsLight />,
	},
	{
		id: 12,
		name: 'Transactions',
		link: '/transactions',
		icon: <GiTimeTrap />,
	},
	{
		id: 4,
		name: 'Security',
		link: '/security',
		icon: <IoSettingsSharp />,
	},
	{
		id: 5,
		name: 'Profile',
		link: '/profile',
		icon: <FaUserGroup />,
	},
	{
		id: 6,
		name: 'Referral',
		link: '/referral',
		icon: <TiSocialInstagram />,
	},
	{
		id: 7,
		name: 'Analytics',
		link: '/analytics',
		icon: <TbDeviceDesktopAnalytics />,
	},
	{
		id: 8,
		name: 'Support',
		link: '/support',
		icon: <SiWebstorm />,
	},

	{
		id: 10,
		name: 'Partner',
		link: '/partner',
		icon: <DiGoogleAnalytics />,
	},
	{
		id: 11,
		name: 'Settings',
		link: '/settings',
		icon: <IoSettingsSharp />,
	},
];

const SmallDeviceSidebar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const closeSidebar = () => {
		setIsOpen(false);
	};
	return (
		<div className='drawer  w-[fit-content] mr-6 lg:hidden navbar-start drawer-start'>
			<input
				id='sideBarSmallDevice'
				type='checkbox'
				className='drawer-toggle'
				defaultChecked={isOpen}
			/>
			<div className='drawer-content'>
				{/* Page content here */}
				<label
					htmlFor='sideBarSmallDevice'
					className='drawer-button my-2 text-2xl'
				>
					<FaBars onClick={toggleSidebar} />
				</label>
			</div>
			<div className='drawer-side z-[90]'>
				<ul className='menu py-4 p-0 w-full min-h-full bg-slate-900'>
					{/* Sidebar content here */}
					<li className='pl-2 text-white mb-5 flex flex-row justify-between items-center'>
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
						<label
							htmlFor='sideBarSmallDevice'
							aria-label='close sidebar'
							className=' text-5xl'
						>
							<IoCloseCircleSharp onClick={toggleSidebar} />
						</label>
					</li>

					{navItems.map((item) => (
						<label
							key={item.id}
							aria-label='close sidebar'
							htmlFor='sideBarSmallDevice'
						>
							<Link
								href={item.link}
								className={`flex flex-row items-center gap-4 p-2 text-white font-medium  hover:bg-green-500 hover:text-white ${
									pathname === item.link
										? 'bg-green-500 text-white'
										: 'text-gray-300'
								}`}
								onClick={closeSidebar}
							>
								<span className='text-lg text-white font-semibold '>
									{<item.icon />}
								</span>
								<span className='text-sm text-white font-bold '>
									{item.name}
								</span>
							</Link>
						</label>
					))}

					{/* Top Exness Product nav drawer */}
					{/* <li className='cursor-pointer w-full border-b pb-2 border-t border-slate-700'>
						<div className='drawer pt-0 z-50 drawer-end'>
							<input id='produts' type='checkbox' className='drawer-toggle' />
							<div className='drawer-content'></div>
							<div className='drawer-side'>
								<ul className='menu p-0 w-full min-h-full bg-slate-900'>
									<li className='border-b border-slate-700'>
										{' '}
										<label
											htmlFor='produts'
											aria-label='close sidebar'
											className='text-2xl mt-3 mb-5 text-white'
										>
											<FaAngleLeft />
											<span className='text-lg ml-3'>Gxness Products</span>
										</label>
									</li>
									<div className='py-5 text-white'>
										<div className='grid grid-cols-2 gap-10 p-4 text-center'>
											<a
												className='hover:text-[#FFCF01] text-white text-nowrap'
												href=''
											>
												<span className='mx-auto text-2xl w-[fit-content] flex justify-center mb-3 p-2 bg-[#0F171C]'>
													<TbLayoutGridAdd />
												</span>
												<span> Personal area</span>
											</a>
											<a
												className='hover:text-[#FFCF01] text-white text-nowrap'
												href=''
											>
												<span className='mx-auto text-2xl w-[fit-content] flex justify-center mb-3 p-2 bg-[#0F171C]'>
													<PiPlugsLight />
												</span>
												<span>Exness terminal</span>
											</a>
											<a
												className='hover:text-[#FFCF01] text-white text-nowrap'
												href=''
											>
												<span className='mx-auto text-2xl w-[fit-content] flex justify-center mb-3 p-2 bg-[#0F171C]'>
													<SiWebstorm />
												</span>
												<span>Public website</span>
											</a>
											<a
												className='hover:text-[#FFCF01] text-white text-nowrap'
												href=''
											>
												<span className='mx-auto text-2xl w-[fit-content] flex justify-center mb-3 p-2 bg-[#0F171C]'>
													<FaUserGroup />
												</span>
												<span>Partnership</span>
											</a>
										</div>
									</div>
								</ul>
							</div>
						</div>
						<label htmlFor='produts' className=' block w-full'>
							<div className='flex justify-between items-center'>
								<span className=' text-white font-bold'>Gxness Products</span>
								<span className='text-lg text-white '>
									<FaAngleRight />
								</span>
							</div>
						</label>
					</li> */}
					{/* Top Exness Product nav drawer */}
					{/* <li className='cursor-pointer w-full border-b pb-3 mb-3 border-slate-700'>
						<div className='drawer pt-0 z-50 drawer-end'>
							<input
								id='helpDrawer'
								type='checkbox'
								className='drawer-toggle'
							/>
							<div className='drawer-content'></div>
							<div className='drawer-side'>
								<ul className='menu p-0 w-full min-h-full bg-slate-900'>
									<li className='border-b border-slate-700'>
										{' '}
										<label
											htmlFor='helpDrawer'
											aria-label='close sidebar'
											className='text-2xl mt-3 mb-5 text-white'
										>
											<FaAngleLeft />
											<span className='text-lg ml-3'>Help</span>
										</label>
									</li>

									<p className='text-sm font-semibold text-[#73787C] pt-3 pl-3'>
										Tools & Services
									</p>
									<ul className='py-3'>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												MetaTrader4
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												MetaTrader5
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												WebTerminal
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Trader's Calculator
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Currency Converter
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Free VPS Hosting
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Economic Calender
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Web Tv
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Tick History
											</a>
										</li>
									</ul>

									<p className='text-sm text-[#73787C] pt-3 pl-3 font-semibold'>
										Trading
									</p>
									<ul className='py-3'>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Contract Specifications
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Margin & Leverage
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Forex Market trading
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Dividends on Indices
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Deposit And Withdraw
											</a>
										</li>
										<p className='text-sm text-[#73787C] py-3 pl-3 font-semibold'>
											Help
										</p>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Xness Help Center
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												How to Become Our Partner
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Suggest a Feature
											</a>
										</li>
										<li>
											<a
												className='w-full block pl-5 text-[14px]  hover:bg-[#0F171C] py-2 hover:text-[#FFCF01]'
												href=''
											>
												Support
											</a>
										</li>
									</ul>
								</ul>
							</div>
						</div>
						<label htmlFor='helpDrawer' className=' block w-full'>
							<div className='flex justify-between items-center'>
								<span className=' text-white font-bold'>Help</span>
								<span className='text-lg text-white '>
									<FaAngleRight />
								</span>
							</div>
						</label>
					</li> */}
				</ul>
			</div>
		</div>
	);
};

export default SmallDeviceSidebar;
