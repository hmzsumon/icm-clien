import React from 'react';
import { Card } from 'flowbite-react';

interface Package {
	id: number;
	title: string;
	price: number;
	profit_day: string;
	weekly: string;
	return: string;
	total_return: number;
}

const packages: Package[] = [
	{
		id: 1,
		title: 'Starter',
		price: 50,
		profit_day: '0.5% - 15%',
		weekly: 'Five days',
		return: '3x',
		total_return: 150,
	},
	{
		id: 2,
		title: 'Initiative',
		price: 100,
		profit_day: '0.8% - 1.2%',
		weekly: 'Five days',
		return: '3x',
		total_return: 300,
	},
	{
		id: 3,
		title: 'Explorer',
		price: 200,
		profit_day: '1.3% - 1.5%',
		weekly: 'Five days',
		return: '3x',
		total_return: 600,
	},
	{
		id: 4,
		title: 'Progressive',
		price: 300,
		profit_day: '1.5% - 1.9%',
		weekly: 'Five days',
		return: '3x',
		total_return: 900,
	},
	{
		id: 5,
		title: 'Advanced',
		price: 400,
		profit_day: '1.9% - 2.1%',
		weekly: 'Five days',
		return: '3x',
		total_return: 1200,
	},
	{
		id: 6,
		title: 'Intensive',
		price: 500,
		profit_day: '2.1% - 2.4%',
		weekly: 'Five days',
		return: '3x',
		total_return: 1500,
	},
	{
		id: 7,
		title: 'Exclusive',
		price: 1000,
		profit_day: '2.4% - 2.8%',
		weekly: 'Five days',
		return: '3.2x',
		total_return: 3200,
	},
	{
		id: 8,
		title: 'Prime',
		price: 3000,
		profit_day: '2.6% - 3%',
		weekly: 'Five days',
		return: '3.2x',
		total_return: 9600,
	},
	{
		id: 9,
		title: 'Premium',
		price: 5000,
		profit_day: '3.2% - 4.5%',
		weekly: 'Five days',
		return: '3.5x',
		total_return: 17500,
	},
	{
		id: 10,
		title: 'Elite',
		price: 10000,
		profit_day: '4.5% - 6%',
		weekly: 'Five days',
		return: '3.5',
		total_return: 35000,
	},
];

const Investment = () => {
	return (
		<div className=' p-4 tracking-tight text-gray-700'>
			<h2 className=' my-4 text-2xl md:text-4xl  font-semibold text-gray-700  '>
				<span className=''>Investment Plans</span>
			</h2>
			<div className=' '>
				<div className='grid gap-4 grid-cols-1 md:grid-cols-2 '>
					{packages.map((p) => (
						<Card className='w-full '>
							<h5 className='text-2xl  font-semibold text-center text-gray-700  '>
								{p.title}
							</h5>
							<div className='flex items-baseline gap-1 '>
								<span className='text-2xl font-extrabold tracking-tight'>
									{Number(p.price).toLocaleString(undefined, {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</span>
								<span>USDT</span>
							</div>
							<ul className='my-4 space-y-4'>
								<li className='flex space-x-3'>
									<svg
										className='h-5 w-5 shrink-0 text-icm-green dark:text-icm-green-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clipRule='evenodd'
										/>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-700 dark:text-gray-400'>
										Profit/Day - {p.profit_day}
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										className='h-5 w-5 shrink-0 text-icm-green dark:text-cyan-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clipRule='evenodd'
										/>
									</svg>
									<span className='text-base font-normal leading-tigh700 dark:text-gray-400'>
										Weekly - {p.weekly}
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										className='h-5 w-5 shrink-0 text-icm-green dark:text-cyan-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clipRule='evenodd'
										/>
									</svg>
									<span className='text-base font-normal leading-tigh700 dark:text-gray-400'>
										Return - {p.return}
									</span>
								</li>

								<li className='flex space-x-3'>
									<svg
										className='h-5 w-5 shrink-0 text-icm-green dark:text-cyan-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clipRule='evenodd'
										/>
									</svg>
									<span className='text-base font-normal leading-tigh700 dark:text-gray-400'>
										Total Return - ${p.total_return}
									</span>
								</li>
							</ul>
							<button
								type='button'
								className='inline-flex w-full justify-center rounded-lg bg-icm-green px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900'
							>
								Active Now
							</button>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};

export default Investment;
