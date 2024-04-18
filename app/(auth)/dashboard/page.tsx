'use client';
import { formatBalance } from '@/lib/functions';
import Link from 'next/link';
import React from 'react';
import { PiDownloadSimpleBold, PiWarningLight } from 'react-icons/pi';
import { RiShareForward2Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const Dashboard = () => {
	const { user } = useSelector((state: any) => state.auth);
	return (
		<div className=' z-0 px-4 '>
			<h1 className='text-3xl text-slate-800 font-semibold my-4'>Dashboard</h1>
			<div className='py-8 '>
				<div className='flex items-center gap-10'>
					<div className='flex items-center gap-2'>
						<p className='text-gray-800 font-semibold'>Name:</p>
						<p className='text-gray-800'>{user?.name}</p>
					</div>
					<div className='flex items-center gap-2'>
						<p className='text-gray-800 font-semibold'>Partner id:</p>
						<p className='text-gray-800'>
							{user?.partner_id ? user?.partner_id : 'N/A'}
						</p>
					</div>
				</div>
				<div className='border border-gray-400 p-5 my-10'>
					<div className='py-5'>
						<div className='flex  items-center justify-between'>
							<div>
								<p className='uppercase md:mb-0 mb-5 text-lg text-slate-600'>
									<span className='font-semibold text-xl text-black'>
										{formatBalance(user?.m_balance)}
									</span>{' '}
									USDT
								</p>
							</div>
							{/* Buttons */}
							<div className='grid md:grid-cols-3 items-center gap-5'>
								<Link href={`/deposit`}>
									<button className='flex items-center gap-2 border border-slate-400 duration-300 rounded py-2 text-[15px] font-medium w-[150px] justify-center hover:bg-[#F1F2F2] text-slate-700'>
										{' '}
										<span className='text-xl'>
											{' '}
											<PiDownloadSimpleBold />
										</span>{' '}
										Deposit
									</button>
								</Link>
								<Link href={`/withdrawal`}>
									<button className='flex items-center gap-2 border border-slate-400 duration-300 rounded py-2 text-[15px] font-medium w-[150px] justify-center hover:bg-[#F1F2F2] text-slate-700'>
										{' '}
										<span className='text-xl'>
											{' '}
											<RiShareForward2Fill />
										</span>{' '}
										Withdraw
									</button>
								</Link>
								<button className='flex items-center gap-2 border border-slate-400 duration-300 rounded py-2 text-[15px] font-medium w-[150px] justify-center hover:bg-[#F1F2F2] text-slate-700'>
									Buy Package
								</button>
							</div>
						</div>
						<div className='secondary-bg p-4 rounded-lg border border-gray-400 mt-5'>
							<div className='flex items-center gap-2 text-[#886D20] font-semibold'>
								<span className='text-2xl'>
									<PiWarningLight />
								</span>
								<p className='text-sm'>Fund your account to start trading</p>
							</div>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
					<div className='border border-gray-400 p-5'>
						<h3 className='text-[1.5rem] text-slate-800 font-semibold text-center'>
							Active Package
						</h3>
						<p className='text-gray-800 text-center mt-3'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
							impedit, itaque exercitationem deserunt officia iusto labore,
							sapiente quas unde atque nisi sit id veniam ad incidunt tempore
							iste optio tenetur.
						</p>
					</div>
					<div className='border border-gray-400 p-5'>
						<h3 className='text-[1.5rem] text-slate-800 font-semibold text-center'>
							Retel Earning
						</h3>
						<p className='text-gray-800 text-center mt-3'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
							impedit, itaque exercitationem deserunt officia iusto labore,
							sapiente quas unde atque nisi sit id veniam ad incidunt tempore
							iste optio tenetur.
						</p>
					</div>
					<div className='border border-gray-400  p-5'>
						<h3 className='text-[1.5rem] text-slate-800 font-semibold text-center'>
							Genaration Earning
						</h3>
						<p className='text-gray-800 text-center mt-3'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
							impedit, itaque exercitationem deserunt officia iusto labore,
							sapiente quas unde atque nisi sit id veniam ad incidunt tempore
							iste optio tenetur.
						</p>
					</div>
					<div className='border border-gray-400 p-5'>
						<h3 className='text-[1.5rem] text-slate-800 font-semibold text-center'>
							Global Earning
						</h3>
						<p className='text-gray-800 text-center mt-3'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
							impedit, itaque exercitationem deserunt officia iusto labore,
							sapiente quas unde atque nisi sit id veniam ad incidunt tempore
							iste optio tenetur.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
