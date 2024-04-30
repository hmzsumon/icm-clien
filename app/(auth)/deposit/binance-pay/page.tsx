'use client';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import Image from 'next/image';
import { Card } from 'flowbite-react';
import CopyToClipboard from '@/lib/CopyToClipboard';
import { useDepositWithBinanceMutation } from '@/redux/features/deposit/depositApi';

const BinancePayment = () => {
	const [depositWithBinance, { isLoading, isError, isSuccess, error }] =
		useDepositWithBinanceMutation();
	const depositAddress = 'TGsQsHmKSQ3xcuMsPoVwQzbnkCxtrJ6sDu';
	const [txId, setIxId] = React.useState('');

	const handleConfirm = () => {
		if (!txId) {
			toast.error('Please enter a valid transaction ID');
			return;
		}
		depositWithBinance({ txId });
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Deposit confirmed');
		}
		if (isError) {
			toast.error((error as fetchBaseQueryError).data?.message);
		}
	}, [isSuccess, isError, error]);
	return (
		<div className=' p-4'>
			<h2 className=' text-center text-2xl text-gray-700 font-semibold my-4'>
				Binance Payment
			</h2>
			<Card className=' '>
				<h1 className=' text-center font-semibold text-gray-700'>
					Deposit USDT
				</h1>
				<div className=' md:w-fit mx-auto'>
					<Image src='/binance_qr.png' width={300} height={300} alt='Binance' />
				</div>
				<div>
					<Card className='w-full mx-auto'>
						<div>
							<h3>Network</h3>
							<h2 className=' text-gray-700 font-semibold'>Tron (TRC20)</h2>
						</div>
						<hr className='my-2 border-gray-300 border-b-1' />
						<div className=' w-full ober'>
							<h3>Deposit Address</h3>
							<div className=' flex items-center'>
								<h2 className=' text-gray-700 font-semibold text-xs '>
									{depositAddress}
								</h2>
								<CopyToClipboard text={depositAddress} />
							</div>
						</div>

						<div>
							<div className=' '>
								<label className='block mb-1'>Transaction ID (txId):</label>
								<input
									type='text'
									className='border border-gray-300 rounded px-3 py-2 w-full'
									value={txId}
									onChange={(e) => setIxId(e.target.value)}
								/>
							</div>
						</div>
					</Card>
				</div>

				<div>
					<button
						type='submit'
						className='bg-icm-green text-white px-4 py-2 rounded flex items-center justify-center gap-2 w-full disabled:opacity-50 disabled:cursor-not-allowed'
						disabled={!txId}
						onClick={handleConfirm}
					>
						Confirm
					</button>
				</div>
			</Card>
		</div>
	);
};

export default BinancePayment;
