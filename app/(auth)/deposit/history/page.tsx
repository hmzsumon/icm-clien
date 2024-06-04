'use client';
import HistoryCard from '@/components/Deposits/HistoryCard';
import { useGetMyDepositsQuery } from '@/redux/features/deposit/depositApi';
import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import GoBack from '@/components/GoBack';
const DepositHistory = () => {
	const { data, isLoading } = useGetMyDepositsQuery(undefined);
	const { deposits } = data || [];

	return (
		<div className='p-4'>
			<div className=' flex items-center gap-1'>
				<GoBack />
				<h1 className='my-3 ml-2 font-bold'>Deposit History</h1>
			</div>
			<div>
				{isLoading ? (
					<div className='flex justify-center items-center'>
						<GridLoader color='#2563EB' size={30} />
					</div>
				) : (
					<div className=''>
						{deposits.map((deposit: any) => (
							<div key={deposit.id} className=' space-y-2'>
								<HistoryCard transaction={deposit} />
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default DepositHistory;
