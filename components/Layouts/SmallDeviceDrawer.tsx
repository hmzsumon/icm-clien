'use client';

import { Button, Drawer, Sidebar, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import {
	HiChartPie,
	HiClipboard,
	HiCollection,
	HiInformationCircle,
	HiLogin,
	HiPencil,
	HiSearch,
	HiShoppingBag,
	HiUsers,
} from 'react-icons/hi';
import navItems from '@/lib/navItems';
import Link from 'next/link';
import Image from 'next/image';

const SmallDeviceDrawer = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className='flex  items-center justify-center md:hidden'>
				<span onClick={() => setIsOpen(true)}>
					<FaBars className=' text-3xl text-white' />
				</span>
			</div>
			<Drawer
				open={isOpen}
				onClose={handleClose}
				className=' bg-gray-900 px-0 '
			>
				<Drawer.Header
					title=''
					titleIcon={() => (
						<>
							<Link
								className='flex items-center gap-2 lg:navbar-start navbar-center mt-2'
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
						</>
					)}
				/>
				<Drawer.Items className=''>
					<Sidebar
						aria-label='Sidebar with multi-level dropdown example'
						className='[&>div]:bg-transparent [&>div]:p-0 w-full'
					>
						<div className=' flex flex-col justify-start items-start  w-full  '>
							{navItems.map((item) => (
								<Link
									href={item.link}
									key={item.id}
									onClick={() => setIsOpen(false)}
									className=' w-full p-4  hover:bg-green-600 transition duration-300 ease-in-out border-b border-gray-600 text-gray-200 '
								>
									<li className=' list-none flex items-center gap-4  w-full '>
										<span className='text-2xl  font-semibold '>
											{<item.icon />}
										</span>
										<span className='text-lg  font-bold '>{item.name}</span>
									</li>
								</Link>
							))}
						</div>
					</Sidebar>
				</Drawer.Items>
			</Drawer>
		</>
	);
};

export default SmallDeviceDrawer;
