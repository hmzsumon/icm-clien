import TransactionCards from '@/components/Transactions/TransactionCards';
import React from 'react';

const Transactions = () => {
	return (
		<div className=' px-2 py-4'>
			<h3 className='text-xl text-slate-800 font-semibold my-2'>
				Transaction History
			</h3>
			<div className='hidden lg:flex items-center gap-5 py-10'>
				<div className='border border-slate-500 cursor-pointer text-slate-500 w-[fit-content] custom-select rounded-badge px-3 bg-slate-200 focus:outline-none '>
					<select className='w-full h-full cursor-pointer py-2 px-1 border-none bg-transparent focus:outline-none'>
						<option>Last 3 Days</option>
						<option>Last 7 Days</option>
						<option selected>Last 30 Days</option>
						<option>Last 3 months</option>
					</select>
				</div>
				<div className='border border-slate-500 cursor-pointer text-slate-500 w-[fit-content] custom-select rounded-badge px-3 bg-white focus:outline-none '>
					<select className='w-full h-full border-none cursor-pointer py-2 px-1 bg-transparent focus:outline-none'>
						<option selected>All transaction types</option>
						<option>Deposit</option>
						<option>Withdrawal</option>
						<option>transfer</option>
						<option>Reward</option>
					</select>
				</div>
				<div className='border border-slate-500 cursor-pointer text-slate-500 w-[fit-content] custom-select rounded-badge px-3 bg-white focus:outline-none '>
					<select className='w-full h-full border-none cursor-pointer py-2 px-1 bg-transparent focus:outline-none'>
						<option>All statuses</option>
						<option>Processing</option>
						<option>Done</option>
						<option>Rejected</option>
					</select>
				</div>
				<div className='border border-slate-500 cursor-pointer text-slate-500 w-[fit-content] custom-select rounded-badge px-3 bg-white focus:outline-none '>
					<select className='w-full h-full border-none cursor-pointer py-2 px-1 bg-transparent focus:outline-none'>
						<option>All accounts</option>
					</select>
				</div>
			</div>
			<div>
				<TransactionCards />
			</div>
		</div>
	);
};

export default Transactions;
