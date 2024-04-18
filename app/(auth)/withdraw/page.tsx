'use client';
import Link from 'next/link';
import React from 'react';
import { IoMdLock } from 'react-icons/io';
import { Tooltip } from 'react-tooltip';
import Binance from '@/public/assets/images/binance.svg';
import Neteller from '@/public/assets/images/neteller.svg';
import PerfectMoney from '@/public/assets/images/perfect-momey.svg';
import Skrill from '@/public/assets/images/skrill.svg';
import SticPay from '@/public/assets/images/stickPay.svg';
import Between from '@/public/assets/images/between.svg';
import Tether from '@/public/assets/images/tether.svg';
import { CiUnlock } from 'react-icons/ci';

const Withdraw = () => {
	return (
		<div className=' z-0'>
			<h1 className='text-2xl text-gray-800 font-semibold  my-4'>Withdraw</h1>
			<div className='bg-white w-full p-5 md:p-10 primary-shadow'>
				<h3 className='text-[1.25rem] text-slate-800 font-semibold py-3'>
					All payment methods
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
					<Link href={`/swithdrawal`}>
						<div className='border rounded-lg w-full duration-300 verification-card '>
							<div className='p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img className='' src='/assets/images/binance.svg' alt='' />
									<h3 className='text-lg text-black font-medium'>BinancePay</h3>
								</div>
								<div className=''>
									<div
										className=''
										data-tooltip-id='unavialble'
										data-tooltip-content='You need complete the verification'
										data-tooltip-place='bottom'
										data-tooltip-class-name='custom-tooltip'
									>
										<p className='flex items-center gap-1 rounded-xl secondary-bg px-2 py-1 text-sm text-[#745500]'>
											<span>
												<IoMdLock />
											</span>
											<span>Unavilable</span>
											<Tooltip id='unavialble' />
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 text-sm font-light'>
								<p>
									Processing time{' '}
									<span className='text-black font-normal'>
										instant - 30 minutes
									</span>
								</p>
								<p>
									Fee <span className='text-black font-normal'>0%</span>
								</p>
								<p>
									Limits{' '}
									<span className='text-black font-normal'>1 - 20,000 USD</span>
								</p>
							</div>
						</div>
					</Link>
					<Link href={`/swithdrawal`}>
						<div className='border rounded-lg w-full duration-300 verification-card '>
							<div className='p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img className='' src='/assets/images/neteller.svg' alt='' />
									<h3 className='text-lg text-black font-medium'>Neteller</h3>
								</div>
								<div className=''>
									<div
										className=''
										data-tooltip-id='unavialble'
										data-tooltip-content='You need complete the verification'
										data-tooltip-place='bottom'
										data-tooltip-class-name='custom-tooltip'
									>
										<p className='flex items-center gap-1 rounded-xl secondary-bg px-2 py-1 text-sm text-[#745500]'>
											<span>
												<IoMdLock />
											</span>
											<span>Unavilable</span>
											<Tooltip id='unavialble' />
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 text-sm font-light'>
								<p>
									Processing time{' '}
									<span className='text-black font-normal'>
										instant - 1 day
									</span>
								</p>
								<p>
									Fee <span className='text-black font-normal'>0%</span>
								</p>
								<p>
									Limits{' '}
									<span className='text-black font-normal'>4 - 10,000 USD</span>
								</p>
							</div>
						</div>
					</Link>
					<Link href={`/swithdrawal`}>
						<div className='border rounded-lg w-full duration-300 verification-card '>
							<div className='p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img
										className=''
										src='/assets/images/perfect-momey.svg'
										alt=''
									/>
									<h3 className='text-lg text-black font-medium'>
										Perfect Money
									</h3>
								</div>
								<div className='relative'>
									<div
										className=''
										data-tooltip-id='unavialble'
										data-tooltip-content='You need complete the verification'
										data-tooltip-place='bottom'
										data-tooltip-class-name='custom-tooltip'
									>
										<p className='flex items-center gap-1 rounded-xl secondary-bg px-2 py-1 text-sm text-[#745500]'>
											<span>
												<IoMdLock />
											</span>
											<span>Unavilable</span>
											<Tooltip id='unavialble' />
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 text-sm font-light'>
								<p>
									Processing time{' '}
									<span className='text-black font-normal'>
										instant - 1 day
									</span>
								</p>
								<p>
									Fee <span className='text-black font-normal'>0%</span>
								</p>
								<p>
									Limits{' '}
									<span className='text-black font-normal'>2 - 10,000 USD</span>
								</p>
							</div>
						</div>
					</Link>
					<Link href={`/swithdrawal`}>
						<div className='border rounded-lg w-full duration-300 verification-card '>
							<div className='p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img className='' src='/assets/images/skrill.svg' alt='' />
									<h3 className='text-lg text-black font-medium'>Skrill</h3>
								</div>
								<div className='relative'>
									<div
										className=''
										data-tooltip-id='unavialble'
										data-tooltip-content='You need complete the verification'
										data-tooltip-place='bottom'
										data-tooltip-class-name='custom-tooltip'
									>
										<p className='flex items-center gap-1 rounded-xl secondary-bg px-2 py-1 text-sm text-[#745500]'>
											<span>
												<IoMdLock />
											</span>
											<span>Unavilable</span>
											<Tooltip id='unavialble' />
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 text-sm font-light'>
								<p>
									Processing time{' '}
									<span className='text-black font-normal'>
										instant - 1 day
									</span>
								</p>
								<p>
									Fee <span className='text-black font-normal'>0%</span>
								</p>
								<p>
									Limits{' '}
									<span className='text-black font-normal'>
										10 - 12,000 USD
									</span>
								</p>
							</div>
						</div>
					</Link>
					<Link href={`/swithdrawal`}>
						<div className='border rounded-lg w-full duration-300 verification-card '>
							<div className='p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img className='' src='/assets/images/stickPay.svg' alt='' />
									<h3 className='text-lg text-black font-medium'>SticPay</h3>
								</div>
								<div className='relative'>
									<div
										className=''
										data-tooltip-id='unavialble'
										data-tooltip-content='You need complete the verification'
										data-tooltip-place='bottom'
										data-tooltip-class-name='custom-tooltip'
									>
										<p className='flex items-center gap-1 rounded-xl secondary-bg px-2 py-1 text-sm text-[#745500]'>
											<span>
												<IoMdLock />
											</span>
											<span>Unavilable</span>
											<Tooltip id='unavialble' />
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 text-sm font-light'>
								<p>
									Processing time{' '}
									<span className='text-black font-normal'>
										instant - 1 day
									</span>
								</p>
								<p>
									Fee <span className='text-black font-normal'>0%</span>
								</p>
								<p>
									Limits{' '}
									<span className='text-black font-normal'>
										10 - 12,000 USD
									</span>
								</p>
							</div>
						</div>
					</Link>
				</div>
				<h3 className='text-[1.25rem] text-slate-800 font-semibold py-5'>
					Transfer
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
					<Link href=''>
						<div className='border rounded-lg w-full duration-300 verification-card '>
							<div className='p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img src='/assets/images/between.svg' alt='' />
									<h3 className='text-lg font-medium'>Between your account</h3>
								</div>
								<div className='relative'>
									<div
										className=''
										data-tooltip-id='unavialble'
										data-tooltip-content='You need complete the verification'
										data-tooltip-place='bottom'
										data-tooltip-class-name='custom-tooltip'
									>
										<p className='flex items-center gap-1 rounded-xl secondary-bg px-2 py-1 text-sm text-[#745500]'>
											<span>
												<IoMdLock />
											</span>
											<span>Unavilable</span>
											<Tooltip id='unavialble' />
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 text-sm font-light'>
								<p>Processing time instant - 30 minutes</p>
								<p>Fee 0%</p>
								<p>Limits 10 - 20,000 USD</p>
							</div>
						</div>
					</Link>
				</div>
				<h3 className='text-[1.25rem] text-slate-800 font-semibold py-5'>
					Verification required
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
					<Link href=''>
						<div className='border rounded-lg w-full duration-300 verification-card '>
							<div className='p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img src='/assets/images/tether.svg' alt='' />
									<h3 className='text-lg font-medium'>Tether (USDT TRC20)</h3>
								</div>
								<div className='relative'>
									<div
										className=''
										data-tooltip-id='unavialble'
										data-tooltip-content='You need complete the verification'
										data-tooltip-place='bottom'
										data-tooltip-class-name='custom-tooltip'
									>
										<p className='flex items-center gap-1 rounded-xl bg-green-100 px-2 py-1 text-sm text-black'>
											<span>
												<CiUnlock />
											</span>
											<span>Recomended</span>
											<Tooltip id='unavialble' />
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 text-sm font-light'>
								<p>Processing time instant - 30 minutes</p>
								<p>Fee 0%</p>
								<p>Limits 10 - 20,000 USD</p>
							</div>
						</div>
					</Link>
					<Link href=''>
						<div className='border rounded-lg w-full duration-300 verification-card '>
							<div className='p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img src='/assets/images/tether.svg' alt='' />
									<h3 className='text-lg font-medium'>Tether (USDT TRC20)</h3>
								</div>
								<div className='relative'>
									<div
										className=''
										data-tooltip-id='unavialble'
										data-tooltip-content='You need complete the verification'
										data-tooltip-place='bottom'
										data-tooltip-class-name='custom-tooltip'
									>
										<p className='flex items-center gap-1 rounded-xl bg-green-100 px-2 py-1 text-sm text-black'>
											<span>
												<CiUnlock />
											</span>
											<span>Recomended</span>
											<Tooltip id='unavialble' />
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 text-sm font-light'>
								<p>Processing time instant - 30 minutes</p>
								<p>Fee 0%</p>
								<p>Limits 10 - 20,000 USD</p>
							</div>
						</div>
					</Link>
					<Link href=''>
						<div className='border rounded-lg w-full duration-300 verification-card '>
							<div className='p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img src='/assets/images/tether.svg' alt='' />
									<h3 className='text-lg font-medium'>Tether (USDT TRC20)</h3>
								</div>
								<div className='relative'>
									<div
										className=''
										data-tooltip-id='unavialble'
										data-tooltip-content='You need complete the verification'
										data-tooltip-place='bottom'
										data-tooltip-class-name='custom-tooltip'
									>
										<p className='flex items-center gap-1 rounded-xl bg-green-100 px-2 py-1 text-sm text-black'>
											<span>
												<CiUnlock />
											</span>
											<span>Recomended</span>
											<Tooltip id='unavialble' />
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 text-sm font-light'>
								<p>Processing time instant - 30 minutes</p>
								<p>Fee 0%</p>
								<p>Limits 10 - 20,000 USD</p>
							</div>
						</div>
					</Link>
					<Link href=''>
						<div className='border rounded-lg w-full duration-300 verification-card '>
							<div className='p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img src='/assets/images/tether.svg' alt='' />
									<h3 className='text-lg font-medium'>Tether (USDT TRC20)</h3>
								</div>
								<div className='relative'>
									<div
										className=''
										data-tooltip-id='unavialble'
										data-tooltip-content='You need complete the verification'
										data-tooltip-place='bottom'
										data-tooltip-class-name='custom-tooltip'
									>
										<p className='flex items-center gap-1 rounded-xl bg-green-100 px-2 py-1 text-sm text-black'>
											<span>
												<CiUnlock />
											</span>
											<span>Recomended</span>
											<Tooltip id='unavialble' />
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 text-sm font-light'>
								<p>Processing time instant - 30 minutes</p>
								<p>Fee 0%</p>
								<p>Limits 10 - 20,000 USD</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Withdraw;
