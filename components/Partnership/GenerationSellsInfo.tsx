import Link from 'next/link';
import React from 'react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { RiArrowRightUpLine } from 'react-icons/ri';

const GenerationSellsInfo = () => {
	return (
		<div className='bg-white p-5 border rounded mt-5 space-y-4'>
			<div className=' '>
				<p className=' text-gray-700 flex items-center justify-between'>
					<span className=' font-semibold'>
						1<sup>st</sup> Generation Buy Package:
					</span>{' '}
					<span className=' font-bold'>100 USDT</span>
				</p>
			</div>
			<div>
				<p className=' text-gray-700 flex items-center justify-between'>
					<span className=' font-semibold'>Total Team Buy Package:</span>{' '}
					<span className=' font-bold'>100 USDT</span>
				</p>
			</div>
		</div>
	);
};

export default GenerationSellsInfo;