'use client';
import Link from 'next/link';
import React, { useState } from 'react';
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
import WithdrawSecurity from '@/components/Withdraw/WithdrawSecurity';
import { GoHistory } from 'react-icons/go';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const withdrawMethods = [
	{
		id: 1,
		title: 'ICM Money Agents',
		isActive: false,
		processingTime: 'instant - 12 Hours',
		fee: '5%',
		additionalFee: '1 USDT',
		limit: '20 - 20,000 USD',
		is_recommended: true,
		link: '/withdraw/agent-withdraw',
	},
	{
		id: 7,
		title: 'USDT (TRC20)',
		isActive: true,
		processingTime: 'instant - 12 Hours',
		fee: '9%',
		additionalFee: '1 USDT',
		limit: '20 - 20,000 USDT',
		icon: '/assets/images/tether-usdt.svg',
		link: '/withdraw/tether',
		is_recommended: false,
	},

	{
		id: 2,
		title: 'Neteller',
		isActive: false,
		processingTime: 'instant - 1 day',
		fee: '0%',
		additionalFee: '0 USDT',
		limit: '20 - 10,000 USDT',
		icon: '/assets/images/neteller.svg',
		link: '/withdraw',
	},
	{
		id: 3,
		title: 'Perfect Money',
		isActive: false,
		processingTime: 'instant - 1 day',
		fee: '0%',
		limit: '2 - 10,000 USDT',
		additionalFee: '0 USDT',
		icon: '/assets/images/perfect-momey.svg',
		link: '/withdraw',
	},
	{
		id: 4,
		title: 'Skrill',
		isActive: false,
		processingTime: 'instant - 1 day',
		fee: '0%',
		limit: '10 - 12,000 USDT',
		additionalFee: '0 USDT',
		icon: '/assets/images/skrill.svg',
		link: '/withdraw',
	},
	{
		id: 5,
		title: 'SticPay',
		isActive: false,
		processingTime: 'instant - 1 day',
		fee: '0%',
		limit: '10 - 12,000 USDT',
		additionalFee: '0 USDT',
		icon: '/assets/images/stickPay.svg',
		link: '/withdraw',
	},
];

const Withdraw = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className=' z-0 p-4'>
			<div className=' flex items-center justify-between'>
				<h1 className='text-2xl text-gray-800 font-semibold  my-4'>Withdraw</h1>
				<Link
					href='/withdraw/history'
					className='flex items-center gap-1 text-sm font-bold text-primary duration-300 hover:text-icm-green'
				>
					<GoHistory />
					History
				</Link>
			</div>

			<div className='bg-white w-full p-5 md:p-10 primary-shadow'>
				<h3 className='text-[1.25rem] text-slate-800 font-semibold py-3'>
					All payment methods
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
					{withdrawMethods.map((method) => (
						<Link href={method.link} key={method.id} className='cursor-pointer'>
							<button
								className='border rounded-lg w-full duration-300 verification-card disabled:opacity-50 disabled:cursor-not-allowed'
								disabled={!method.isActive}
							>
								<span className='p-4 border-b flex items-center justify-between'>
									<span className='flex items-center gap-2'>
										{method.icon && (
											<img
												className=' w-10 '
												src={method.icon}
												alt={method.title}
											/>
										)}
										<h3 className='text-sm text-black font-medium'>
											{method.title}
										</h3>
									</span>
									<span className=''>
										<span
											className=''
											data-tooltip-id='unavailable'
											data-tooltip-content='You need complete the verification'
											data-tooltip-place='bottom'
											data-tooltip-class-name='custom-tooltip'
										>
											{method.isActive ? (
												<div className='relative'>
													<div
														className=''
														data-tooltip-id='unavailable'
														data-tooltip-content='You need complete the verification'
														data-tooltip-place='bottom'
														data-tooltip-class-name='custom-tooltip'
													>
														{method.is_recommended ? (
															<p className='flex items-center gap-1 rounded-xl bg-green-100 px-2 py-1 text-sm text-black'>
																<span>
																	<CiUnlock />
																</span>
																<span>Recommended</span>
															</p>
														) : (
															<p className='flex items-center gap-1 rounded-xl bg-gray-100 px-2 py-1 text-sm text-black'>
																<span>
																	<CiUnlock />
																</span>
																<span>Available</span>
															</p>
														)}
													</div>
												</div>
											) : (
												<span className='relative'>
													<span
														className=''
														data-tooltip-id='unavailable'
														data-tooltip-content='You need complete the verification'
														data-tooltip-place='bottom'
														data-tooltip-class-name='custom-tooltip'
													>
														<p className='flex items-center gap-1 rounded-xl secondary-bg px-2 py-1 text-sm text-[#745500]'>
															<span>
																<IoMdLock />
															</span>
															<span>Unavailable</span>
														</p>
													</span>
												</span>
											)}
										</span>
									</span>
								</span>
								<div className=' text-sm font-light text-left p-4'>
									<p>
										Processing time{' '}
										<span className='text-black font-normal'>
											{method.processingTime}
										</span>
									</p>
									<p>
										Fee{' '}
										<span className='text-black font-normal'>{method.fee}</span>
									</p>
									<p>
										Additional Fee{' '}
										<span className='text-black font-normal'>
											{method.additionalFee}
										</span>
									</p>
									<p>
										Limits{' '}
										<span className='text-black font-normal'>
											{method.limit}
										</span>
									</p>
								</div>
							</button>
						</Link>
					))}
				</div>
			</div>
			<>
				<Modal
					show={openModal}
					size='md'
					onClose={() => setOpenModal(false)}
					popup
				>
					<Modal.Header />
					<Modal.Body>
						<div className='text-center'>
							<HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-orange-500 dark:text-gray-200' />
							<h3 className='mb-5 text-lg font-normal text-orange-500 dark:text-gray-400'>
								Withdraw will be temporarily closed due to server issues. Please
								try again later. We sincerely apologize for this inconvenience.
							</h3>
							<div className='flex justify-center gap-4'>
								<Button color='failure' onClick={() => setOpenModal(false)}>
									Close
								</Button>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</>
		</div>
	);
};

export default Withdraw;
