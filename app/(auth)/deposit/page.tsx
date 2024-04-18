'use client';
import Link from 'next/link';
import React from 'react';
import { CiUnlock } from 'react-icons/ci';
import { FaRegCreditCard } from 'react-icons/fa';
import { FcMoneyTransfer } from 'react-icons/fc';
import { IoMdLock } from 'react-icons/io';
import { IoLogoUsd } from 'react-icons/io5';
import { SiBinance, SiTether } from 'react-icons/si';
import {
	TbBrandNetflix,
	TbBrandTether,
	TbCircleLetterS,
	TbLetterS,
} from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';

const Deposit = () => {
	return (
		<div className=' px-4 py-6'>
			<h3 className='text-xl text-slate-800 font-semibold'>Deposit</h3>
			<h3 className=' text-slate-800 font-semibold py-3'>
				Verification required
			</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				<Link href={`/ps`}>
					<div className='border rounded-lg w-full duration-300 verification-card '>
						<div className='p-4 border-b flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>
									<SiBinance />
								</span>
								<h3 className='text-lg font-medium'>BinancePay</h3>
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
										<span>Unavialble</span>
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
				<Link href={`/ps`}>
					<div className='border rounded-lg w-full duration-300 verification-card '>
						<div className='p-4 border-b flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>
									<SiTether />
								</span>
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
							<p>Processing time instant - 1 day</p>
							<p>Fee 0%</p>
							<p>Limits 10 - 10,000,000 USD</p>
						</div>
					</div>
				</Link>
				<Link href={`/ps`}>
					<div className='border rounded-lg w-full duration-300 verification-card '>
						<div className='p-4 border-b flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>
									<FaRegCreditCard />
								</span>
								<h3 className='text-lg font-medium'>Bank Card</h3>
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
										<span>Unavialble</span>
										<Tooltip id='unavialble' />
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 text-sm font-light'>
							<p>Processing time instant - 30 minutes</p>
							<p>Fee 0%</p>
							<p>Limits 10 - 10,000 USD</p>
						</div>
					</div>
				</Link>
				<Link href={`/ps`}>
					<div className='border rounded-lg w-full duration-300 verification-card '>
						<div className='p-4 border-b flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>
									<TbBrandNetflix />
								</span>
								<h3 className='text-lg font-medium'>Neteller</h3>
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
										<span>Unavialble</span>
										<Tooltip id='unavialble' />
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 text-sm font-light'>
							<p>Processing time instant - 30 minutes</p>
							<p>Fee 0%</p>
							<p>Limits 10 - 50,000 USD</p>
						</div>
					</div>
				</Link>
				<Link href={`/ps`}>
					<div className='border rounded-lg w-full duration-300 verification-card '>
						<div className='p-4 border-b flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>
									<FcMoneyTransfer />
								</span>
								<h3 className='text-lg font-medium'>Perfect Money</h3>
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
										<span>Unavialble</span>
										<Tooltip id='unavialble' />
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 text-sm font-light'>
							<p>Processing time instant - 30 minutes</p>
							<p>Fee 0%</p>
							<p>Limits 10 - 100,000 USD</p>
						</div>
					</div>
				</Link>
				<Link href={`/ps`}>
					<div className='border rounded-lg w-full duration-300 verification-card '>
						<div className='p-4 border-b flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>
									<TbLetterS />
								</span>
								<h3 className='text-lg font-medium'>Skrill</h3>
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
										<span>Unavialble</span>
										<Tooltip id='unavialble' />
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 text-sm font-light'>
							<p>Processing time instant - 30 minutes</p>
							<p>Fee 0%</p>
							<p>Limits 10 - 100,000 USD</p>
						</div>
					</div>
				</Link>
				<Link href={`/ps`}>
					<div className='border rounded-lg w-full duration-300 verification-card '>
						<div className='p-4 border-b flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>
									<TbCircleLetterS />
								</span>
								<h3 className='text-lg font-medium'>SticPay</h3>
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
										<span>Unavialble</span>
										<Tooltip id='unavialble' />
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 text-sm font-light'>
							<p>Processing time instant - 30 minutes</p>
							<p>Fee 0%</p>
							<p>Limits 10 - 100,000 USD</p>
						</div>
					</div>
				</Link>
				<Link href={`/ps`}>
					<div className='border rounded-lg w-full duration-300 verification-card '>
						<div className='p-4 border-b flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>
									<TbBrandTether />
								</span>
								<h3 className='text-lg font-medium'>Tether (USDT ERC20)</h3>
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
										<span>Unavialble</span>
										<Tooltip id='unavialble' />
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 text-sm font-light'>
							<p>Processing time instant - 1 day</p>
							<p>Fee 0%</p>
							<p>Limits 10 - 100,000,000 USD</p>
						</div>
					</div>
				</Link>
				<Link href={`/ps`}>
					<div className='border rounded-lg w-full duration-300 verification-card '>
						<div className='p-4 border-b flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>
									<IoLogoUsd />
								</span>
								<h3 className='text-lg font-medium'>USD Coin (USDT ERC20)</h3>
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
										<span>Unavialble</span>
										<Tooltip id='unavialble' />
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 text-sm font-light'>
							<p>Processing time instant - 1 day</p>
							<p>Fee 0%</p>
							<p>Limits 10 - 100,000,000 USD</p>
						</div>
					</div>
				</Link>
				<Link href={`/ps`}>
					<div className='border rounded-lg w-full duration-300 verification-card '>
						<div className='p-4 border-b flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>
									<IoLogoUsd />
								</span>
								<h3 className='text-lg font-medium'>USD Coin (USDT ERC20)</h3>
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
										<span>Unavialble</span>
										<Tooltip id='unavialble' />
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 text-sm font-light'>
							<p>Processing time instant - 1 day</p>
							<p>Fee 0%</p>
							<p>Limits 10 - 100,000,000 USD</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Deposit;
