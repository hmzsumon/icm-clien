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
import { ImUserPlus } from 'react-icons/im';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { FaFilterCircleDollar } from 'react-icons/fa6';
import navItems from '@/lib/navItems';

const SideNavBar = () => {
	const pathname = usePathname();
	return (
		<div className='hidden md:block  '>
			<ul className='space-y-1 mb-10  w-full'>
				{navItems.map((item) => (
					<li key={item.id} className=''>
						<Link
							href={item.link}
							className={`flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium w-full  hover:bg-green-500 hover:text-white ${
								pathname === item.link
									? 'bg-green-500 text-white'
									: 'text-gray-300'
							}`}
						>
							<span>{<item.icon />}</span>
							<span>{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideNavBar;
