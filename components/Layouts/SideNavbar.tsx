'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuLayoutDashboard } from 'react-icons/lu';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import { RiShareForward2Fill } from 'react-icons/ri';
import { GiTimeTrap } from 'react-icons/gi';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { TiSocialInstagram } from 'react-icons/ti';
import { DiGoogleAnalytics } from 'react-icons/di';
import { IoSettingsSharp } from 'react-icons/io5';

const sideNavItems = [
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
		link: '/withdrawal',
		icon: <RiShareForward2Fill />,
	},
	{
		id: 4,
		name: 'Transaction History',
		link: '/transactionHistory',
		icon: <GiTimeTrap />,
	},
	{
		id: 5,
		name: 'Analytics',
		link: '/analytics',
		icon: <TbDeviceDesktopAnalytics />,
	},
	{
		id: 6,
		name: 'Wallet',
		link: '/wallet',
		icon: <MdOutlineAccountBalanceWallet />,
	},
	{
		id: 7,
		name: 'Settings',
		link: '/settings',
		icon: <IoSettingsSharp />,
	},
	{
		id: 8,
		name: 'Support',
		link: '/support',
		icon: <TiSocialInstagram />,
	},

	{
		id: 9,
		name: 'About',
		link: '/about',
		icon: <DiGoogleAnalytics />,
	},
];

const SideNavBar = () => {
	const pathname = usePathname();
	return (
		<div className='hidden md:block '>
			<ul className='space-y-1 mb-10'>
				{sideNavItems.map((item) => (
					<li key={item.id}>
						<Link
							href={item.link}
							className={`flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium  hover:bg-green-500 hover:text-white ${
								pathname === item.link
									? 'bg-green-500 text-white'
									: 'text-gray-300'
							}`}
						>
							<span>{item.icon}</span>
							<span>{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideNavBar;
