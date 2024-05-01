'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
