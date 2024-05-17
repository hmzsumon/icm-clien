'use client';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

const RankAndReward = () => {
	const { user } = useSelector((state: any) => state.auth);
	return (
		<div className='p-4'>
			<h1 className=' text-center text-xl font-semibold text-gray-800'>
				Rank and Reward
			</h1>
			<div>
				<Card className='max-w-lg mx-auto my-6'>
					<h5 className='text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white'>
						Your Current Rank
					</h5>
					<h2 className=' text-center'>
						<span>
							{user?.rank && (
								<span className='text-gray-500 dark:text-gray-400 font-bold uppercase'>
									{user.rank}
								</span>
							)}
						</span>
					</h2>
					<div>
						<Image
							src='/rank/first-rank.jpg'
							alt='Rank'
							width={200}
							height={200}
							className='rounded-lg mx-auto'
						/>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default RankAndReward;
