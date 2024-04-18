'use client';
import GlobalTeam from '@/components/Partnership/GlobalTeam';
import PartnerLinkCard from '@/components/Partnership/PartnerLinkCard';
import Partners from '@/components/Partnership/Partners';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import { IoIosLink } from 'react-icons/io';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { RiArrowRightUpLine } from 'react-icons/ri';

const GlobalProgram = () => {
	return (
		<div className=''>
			<div className=' w-full custom-shadow'>
				<div className='program-banner p-10 bg-no-repeat bg-top bg-cover text-white '>
					<div className='w-full md:w-2/3'>
						<h3 className='text-3xl font-bold'>
							All-new: Rebates are now 3 times faster*
						</h3>
						<p className='w-full md:w-2/3 text-xl mt-5'>
							Boot client loyalty with stable auto-payouts and maximize your
							commission
						</p>
						<button className='px-6 py-3 my-5 primary-bg hover:bg-[#FFDA39] rounded font-semibold text-primary duration-300'>
							Check it out
						</button>
						<p className='text-slate-300'>
							*Average rebateexecution speed is faster of as October 2023
							whencompared to prior month. Speed is subjecct to change..
						</p>
					</div>
				</div>
				<div className='my-5 gap-5 grid grid-cols-1 md:grid-cols-2 px-2 '>
					<div className=''>
						<div className='bg-white border p-5 rounded'>
							<div className='flex justify-between items-center'>
								<p className='flex items-center gap-2'>
									<span className='text-[#0022FF]'>
										<MdOutlineAccountBalanceWallet />
									</span>
									<span className='font-semibold text-primary'>Balance</span>
								</p>
								<Link
									href=''
									className='bg-[#ffcf01] rounded-full p-1 text-2xl text-primary'
								>
									<RiArrowRightUpLine />
								</Link>
							</div>
							<div className='text-center my-10'>
								<p className='text-primary text-lg'>
									<span className='text-2xl font-bold '>0</span>.00 USD
								</p>
								<p className='text-secondary'>Total Global Earning 0.00 USD</p>
							</div>
						</div>

						<PartnerLinkCard />
					</div>
					{/* Partners */}
					<GlobalTeam />
				</div>
			</div>
		</div>
	);
};

export default GlobalProgram;
