'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { useSelector } from 'react-redux';
import { useGetUserByPartnerIdQuery } from '@/redux/features/auth/authApi';
import {
	useFindUserByCustomerIdMutation,
	useSendMutation,
} from '@/redux/features/send/sendApi';
import { Card } from 'flowbite-react';
import { useRouter } from 'next/navigation';

const SendMoney = () => {
	const router = useRouter();
	const { user } = useSelector((state: any) => state.auth);
	const [userId, setUserId] = React.useState('');
	const [amount, setAmount] = React.useState('');
	const [fee, setFee] = React.useState(0);
	const [receiveAmount, setReceiveAmount] = React.useState(0);
	const [amountError, setAmountError] = React.useState('');
	const [recipient, setRecipient] = useState<any>(null);
	const [recipientError, setRecipientError] = React.useState('');
	const [code, setCode] = useState<string>('');
	const [codeError, setCodeError] = useState<boolean>(false);
	const [errorText, setErrorText] = React.useState<string>('');
	const [open2, setOpen2] = useState(false);
	const [isResend, setIsResend] = useState<boolean>(false);
	const handleOpen2 = () => setOpen2(!open2);

	const [findUserByCustomerId, { data, isLoading, isError, error, isSuccess }] =
		useFindUserByCustomerIdMutation();

	// calculate fee by 5%
	useEffect(() => {
		if (Number(amount) >= 10) {
			const fee = (Number(amount) * 0) / 100;
			setFee(fee);
			setReceiveAmount(Number(amount) - fee);
		}
	}, [amount]);

	const handleChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRecipientError('');
		setUserId(e.target.value);
	};

	// handle change amount & check amount > user e_balance
	const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAmountError('');
		setAmount(e.target.value);

		// check min amount
		if (Number(e.target.value) < 10) {
			setAmountError('Minimum amount is 10 USDT');
		}

		if (Number(e.target.value) > user?.m_balance) {
			setAmountError('Amount is greater than your balance');
		}
	};

	// handle find user by customer id
	const handleFindUserByCustomerId = async () => {
		try {
			const res = await findUserByCustomerId(userId).unwrap();
			setRecipient(res?.user);
		} catch (error) {
			console.log(error);
			setRecipientError((error as fetchBaseQueryError).data.message);
		}
	};

	// send usdt
	const [
		send,
		{
			isLoading: s_isLoading,
			isError: s_isError,
			isSuccess: s_isSuccess,
			error: s_error,
		},
	] = useSendMutation();

	// handle submit
	const handleSubmit = () => {
		const data = {
			recipient_id: recipient?.partner_id,
			amount: Number(amount),
			fee: fee,
			receive_amount: receiveAmount,
		};
		console.log(data);
		send(data);
	};

	// for send
	useEffect(() => {
		if (s_isError) {
			toast.error((s_error as fetchBaseQueryError).data.message);
		}
		if (s_isSuccess) {
			toast.success('Send successfully');
			router.push('/transactions');
		}
	}, [s_isError, s_error, s_isSuccess]);

	return (
		<div className='p-4'>
			<Card>
				<div>
					<div className='space-y-2'>
						<h2 className='text-2xl font-bold text-center text-blue-gray-300 '>
							Send USDT
						</h2>
					</div>
					<hr className='my-2 border border-blue-gray-800 ' />
					<p className=' text-center text-xs font-semibold'>User To User</p>
					<div className='my-4 space-y-3'>
						<div>
							<label
								htmlFor=''
								className='block mb-2 ml-1 text-sm font-medium text-blue-gray-300'
							>
								Partner ID
							</label>
							<input
								type='text'
								className='w-full px-2 py-2 border rounded-lg border-blue-gray-800 bg-black_2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
								placeholder='Enter User ID'
								value={userId}
								onChange={(e) => handleChangeUserId(e)}
							/>
							<small>
								{recipientError && (
									<span className='text-xs text-red-500'>{recipientError}</span>
								)}
							</small>
						</div>
						{/* Amount */}
						<div>
							<label
								htmlFor=''
								className='block mb-2 ml-1 text-sm font-medium text-blue-gray-300'
							>
								Send Amount
							</label>
							<input
								type='number'
								className='w-full px-2 py-2 border rounded-lg border-blue-gray-800 bg-black_2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
								placeholder='Enter Amount'
								value={amount}
								onChange={(e) => handleChangeAmount(e)}
							/>
							<small>
								{amountError && (
									<span className='text-xs text-red-500'>{amountError}</span>
								)}
							</small>
						</div>

						{recipient && (
							<>
								<hr className='my-2 border border-blue-gray-800 ' />
								<div className='px-4 '>
									<div className='space-y-2 '>
										<li className='flex items-center justify-between list-none '>
											<span className='font-bold'>Send Mod:</span>{' '}
											<span>User Id</span>
										</li>
										<li className='flex items-center justify-between list-none '>
											<span className='font-bold'>To:</span>{' '}
											<span className='flex flex-col'>
												{recipient?.customer_id}
												<span className='text-xs text-blue-gray-500'>
													({recipient?.name})
												</span>
											</span>
										</li>

										<li className='flex items-center justify-between list-none '>
											<span className='font-bold'>Total amount:</span>{' '}
											<span>{amount} USDT</span>
										</li>

										<li className='flex items-center justify-between list-none '>
											<span className='font-bold'>Charge:</span>{' '}
											<span>{fee} USDT</span>
										</li>

										<li className='flex items-center justify-between list-none '>
											<span className='font-bold'>Receive Amount:</span>{' '}
											<span>{receiveAmount} USDT</span>
										</li>

										<li className='flex items-center justify-between list-none '>
											<span className='font-bold'>Send From:</span>{' '}
											<span>Main Wallet ( USDT)</span>
										</li>
									</div>
								</div>
								<hr className='my-2 border border-blue-gray-800 ' />
							</>
						)}

						<div>
							{recipient ? (
								<button
									onClick={handleSubmit}
									className='w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500'
								>
									Submit
								</button>
							) : (
								<button
									onClick={handleFindUserByCustomerId}
									className='w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
									disabled={
										!userId || !amount || Number(amount) > user?.m_balance
									}
								>
									Find Recipient
								</button>
							)}
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default SendMoney;