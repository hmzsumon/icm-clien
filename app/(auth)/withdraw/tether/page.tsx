'use client';
import React, { useEffect, useState } from 'react';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useSelector } from 'react-redux';
import WithdrawSecurity from '@/components/Withdraw/WithdrawSecurity';
import PulseLoader from 'react-spinners/PulseLoader';
import { useCreateWithdrawRequestMutation } from '@/redux/features/withdraw/withdrawApi';

const TetherUsdt = () => {
	const { user } = useSelector((state: any) => state.auth);

	// call new withdraw api
	const [withdraw, { isLoading, isSuccess, isError, error }] =
		useCreateWithdrawRequestMutation();

	const [address, setAddress] = React.useState('');
	const [network, setNetwork] = React.useState('');
	const [amount, setAmount] = React.useState('');
	const [availableAmount, setAvailable] = useState<number>(0);
	const [receiveAmount, setReceiveAmount] = useState<number>(0);
	const [errorText, setErrorText] = React.useState<string>('');
	const [codeError, setCodeError] = useState<boolean>(false);

	const [openModal, setOpenModal] = useState(false);

	// set available amount
	useEffect(() => {
		const balance = user?.m_balance;
		setAvailable(balance);
	}, [user]);

	// handle amount change
	const handleAmountChange = (e: any) => {
		const value = e.target.value;
		setAmount(value);
		if (value < 20) {
			setErrorText('Minimum amount is 20 USDT');
			return;
		} else if (value > availableAmount) {
			setErrorText('Insufficient balance');
			return;
		} else {
			setErrorText('');
		}

		setReceiveAmount(Number(value) - Number(value) * 0.05 - 1);
	};

	// handle submit form
	const handleSubmit = () => {
		console.log('submitting form');
		const data = {
			amount: amount,
			net_amount: receiveAmount,
			charge_p: 0.05,
			charge_a: 1,
			method: {
				name: 'Tether (USDT TRC20)',
				network: 'Tron (TRC20)',
				address: address,
			},
		};

		withdraw(data);
	};
	return (
		<div className='p-4'>
			<h1 className=' text-xl text-gray-800 font-bold my-4'>Withdraw USDT</h1>
			<div>
				<Card className=' light w-full text-gray-700'>
					<div className='flex flex-col gap-4'>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='email1' value='Address' />
							</div>
							<TextInput
								id='address'
								type='text'
								placeholder='Enter your trc-20 address'
								value={address}
								required
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='password1' value='Network' />
							</div>
							<TextInput
								id='password1'
								type='text'
								readOnly
								value='Tron (TRC20)'
							/>
						</div>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='password1' value='Amount' />
							</div>
							<TextInput
								id='password1'
								type='number'
								placeholder='Enter amount to withdraw'
								required
								value={amount}
								onChange={handleAmountChange}
							/>
							<small className='flex items-center justify-between px-1 mt-1 text-gray-700'>
								<span className=''>
									Available:
									{user?.m_balance >= 0 ? (
										<span className='mx-1 text-gray-800 font-bold'>
											{Number(user?.m_balance ? user?.m_balance : 0).toFixed(2)}
										</span>
									) : (
										<PulseLoader size={10} color={'#fff'} />
									)}
									USDT
								</span>
								<span>
									Min Amount:
									<span className='mx-1 text-gray-800 font-bold'>20</span>
									USDT
								</span>
							</small>
							{errorText && (
								<small className='text-red-500 font-bold'>{errorText}</small>
							)}
						</div>
						<div className=' grid grid-cols-2 gap-4 my-2'>
							<div className='space-y-1 '>
								<p className='text-xs text-blue-gray-600'>
									Processing fee:{' '}
									<span className='italic font-bold text-blue-gray-300'>
										5%
									</span>{' '}
								</p>
								<p className='text-xs text-blue-gray-600'>
									Additional fee:{' '}
									<span className='italic font-bold text-blue-gray-300'>
										1 USDT
									</span>{' '}
								</p>
								<p className='text-xs text-blue-gray-600'>Receive Amount:</p>
								<p className='font-bold text-blue-gray-300'>
									<span>{receiveAmount.toFixed(2)}</span> USDT
								</p>
							</div>
							<div className='flex items-center'>
								<Button
									onClick={() => setOpenModal(true)}
									className='w-full bg-icm-green text-gray-800 font-bold hover:bg-green-500'
									disabled={!!errorText || !amount || !address}
								>
									Withdraw
								</Button>
							</div>
						</div>
					</div>
				</Card>
			</div>
			<WithdrawSecurity
				openModal={openModal}
				setOpenModal={setOpenModal}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default TetherUsdt;
