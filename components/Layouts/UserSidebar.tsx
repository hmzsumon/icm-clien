'use client';

import { CustomFlowbiteTheme, Sidebar } from 'flowbite-react';
import Link from 'next/link';
import { LuLayoutDashboard } from 'react-icons/lu';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import { RiShareForward2Fill } from 'react-icons/ri';
import { FaFilterCircleDollar, FaHandshakeSimple } from 'react-icons/fa6';
import { GiTimeTrap } from 'react-icons/gi';
import { IoSettingsSharp } from 'react-icons/io5';
import { TiSocialInstagram } from 'react-icons/ti';

const UserSidebar = ({ handleClose }: any) => {
	return (
		<Sidebar
			aria-label='Sidebar with multi-level dropdown example'
			className='dark w-full '
		>
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Link href='/dashboard' onClick={handleClose}>
						<Sidebar.Item icon={LuLayoutDashboard}>Dashboard</Sidebar.Item>
					</Link>
					<Link href='/deposit' onClick={handleClose}>
						<Sidebar.Item icon={PiDownloadSimpleBold}>Deposit</Sidebar.Item>
					</Link>
					<Link href='/withdraw' onClick={handleClose}>
						<Sidebar.Item icon={RiShareForward2Fill}>Withdraw</Sidebar.Item>
					</Link>
					{/* Start Packages */}
					<Sidebar.Collapse icon={FaFilterCircleDollar} label='Investment'>
						<Link href='/withdraw' onClick={handleClose}>
							<Sidebar.Item>Packages</Sidebar.Item>
						</Link>
						<Link href='/withdraw' onClick={handleClose}>
							<Sidebar.Item> My Package</Sidebar.Item>
						</Link>
					</Sidebar.Collapse>
					{/* End Packages */}
					{/* Start Partnership */}
					<Sidebar.Collapse icon={FaHandshakeSimple} label='Partnership'>
						<Link href='/withdraw' onClick={handleClose}>
							<Sidebar.Item>Referral Program</Sidebar.Item>
						</Link>
						<Link href='/withdraw' onClick={handleClose}>
							<Sidebar.Item>Generation Program</Sidebar.Item>
						</Link>
						<Link href='/withdraw' onClick={handleClose}>
							<Sidebar.Item>Global Program</Sidebar.Item>
						</Link>
					</Sidebar.Collapse>
					{/* End Partnership */}

					{/* start transaction */}
					<Link href='/transactions' onClick={handleClose}>
						<Sidebar.Item icon={GiTimeTrap}>Transactions</Sidebar.Item>
					</Link>
					{/* end transaction */}

					{/* start settings */}
					<Link href='/settings' onClick={handleClose}>
						<Sidebar.Item icon={IoSettingsSharp}>Settings</Sidebar.Item>
					</Link>
					{/* end settings */}

					{/* start support */}
					<Link href='/support' onClick={handleClose}>
						<Sidebar.Item icon={TiSocialInstagram}>Support</Sidebar.Item>
					</Link>
					{/* end support */}
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
};

export default UserSidebar;
