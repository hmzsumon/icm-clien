'use client';
import { formatBalance } from '@/lib/functions';
import Link from 'next/link';
import React from 'react';
import { PiDownloadSimpleBold, PiWarningLight } from 'react-icons/pi';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { FaFilterCircleDollar } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Button, Card } from 'flowbite-react';
import { FaWallet } from 'react-icons/fa6';
import ItemCard from '@/components/Dashboard/ItemCard';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { RiArrowRightUpLine, RiGlobalFill } from 'react-icons/ri';
import { BiLogoMicrosoftTeams } from 'react-icons/bi';
import { useMyWalletQuery } from '@/redux/features/auth/authApi';

const Dashboard = () => {
	const { user } = useSelector((state: any) => state.auth);
	const { data, isLoading, isError, isSuccess, error } =
		useMyWalletQuery(undefined);
	const { wallet } = data || {};
	return (
		<div className=' z-0 px-2 '>
			<div className='py-4  '>
				{/*Start Balance Card */}
				<Card href='#' className='w-full'>
					<div className='py-5'>
						<div className='grid grid-cols-2 md:grid-cols-3'>
							<div className=' md:col-span-1 grid md:flex gap-2 items-center'>
								<Card className=' w-20 h-20 rounded-full  flex items-center justify-center'>
									<FaWallet className=' text-icm-green text-3xl' />
								</Card>
								<p className='uppercase md:mb-0 mb-5 text-lg text-slate-600'>
									<span className='font-semibold text-xl text-black'>
										{formatBalance(user?.m_balance)}
									</span>{' '}
									USDT
								</p>
							</div>
							{/* Buttons */}
							<div className='md:col-span-2 grid md:grid-cols-3 items-center gap-5'>
								<Link href='/deposit'>
									<Button
										gradientDuoTone='purpleToBlue'
										className=' w-full flex items-center gap-2'
									>
										<span className='text-xl mr-2'>
											{' '}
											<PiDownloadSimpleBold />
										</span>{' '}
										Deposit
									</Button>
								</Link>

								<Link href='/withdraw'>
									<Button
										gradientDuoTone='purpleToBlue'
										className=' w-full flex items-center gap-2'
									>
										<span className='text-xl mr-2'>
											{' '}
											<FaHandHoldingDollar />
										</span>{' '}
										Withdraw
									</Button>
								</Link>

								<Link href='/investment'>
									<Button
										gradientDuoTone='purpleToBlue'
										className=' w-full flex items-center gap-2 '
									>
										<span className='text-xl mr-2'>
											{' '}
											<FaFilterCircleDollar />
										</span>{' '}
										<span className=''>Buy Package</span>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</Card>
				{/*End Balance Card */}
				<div className=' my-6 grid md:grid-cols-2 gap-4'>
					<ItemCard
						icon={<GiReceiveMoney />}
						title='Total Earn'
						balance={wallet?.total_earing}
					/>

					<ItemCard
						icon={<FaWallet />}
						title='Total Profit'
						balance={user?.active_package}
					/>
					<ItemCard
						icon={<FaFilterCircleDollar />}
						title='Active Package'
						balance={user?.active_package}
					/>

					<ItemCard
						icon={<FaUsers />}
						title='Referral Earn'
						balance={user?.active_package}
					/>

					<ItemCard
						icon={<BiLogoMicrosoftTeams />}
						title='Generation Earn'
						balance={user?.active_package}
					/>

					<ItemCard
						icon={<RiGlobalFill />}
						title='Global Earn'
						balance={user?.active_package}
					/>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
