'use client';

import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useSelector } from 'react-redux';
import WithdrawSecurity from '@/components/Withdraw/WithdrawSecurity';
import {
	useCreateWithdrawRequestMutation,
	useGetAllAgentsQuery,
} from '@/redux/features/withdraw/withdrawApi';
import CustomSelect from '@/components/CustomSelect';
import { useRouter } from 'next/navigation';

const AgentWithdraw = () => {
	const router = useRouter();
	const { user } = useSelector((state: any) => state.auth);

	const { data: agentsData } = useGetAllAgentsQuery(undefined);
	const { agents } = agentsData || [];
	const options = agents?.map((agent: any) => ({
		label: agent.agent_name,
		value: agent.agent_name,
	}));

	// call new withdraw api
	const [withdraw, { isLoading, isSuccess, isError, error }] =
		useCreateWithdrawRequestMutation();

	const [address, setAddress] = React.useState('');
	const [accountNumber, setAccountNumber] = React.useState('');
	const [network, setNetwork] = React.useState('');
	const [amount, setAmount] = React.useState('');
	const [availableAmount, setAvailable] = useState<number>(0);
	const [receiveAmount, setReceiveAmount] = useState<number>(0);
	const [receiveAmountBDT, setReceiveAmountBDT] = useState<number>(0);

	const [errorText, setErrorText] = React.useState<string>('');
	const [codeError, setCodeError] = useState<boolean>(false);
	const [agent, setAgent] = useState<any>({});
	const [method, setMethod] = useState<any>({});
	const [rate, setRate] = useState<number>(0);

	const [openModal, setOpenModal] = useState(false);

	// method options
	const methodOptions = agent?.payment_methods?.map((method: any) => ({
		label: method.title,
		value: method.title,
	}));

	// handle select method
	const handleSelectMethod = (value: any) => {
		const selectedMethod = agent?.payment_methods?.find(
			(method: any) => method.title === value
		);
		setMethod(selectedMethod);
		setRate(selectedMethod?.rate);
		setReceiveAmountBDT(Number(amount) * selectedMethod?.rate);
	};

	// handle select agent
	const handleSelectAgent = (value: any) => {
		const selectedAgent = agents?.find(
			(agent: any) => agent.agent_name === value
		);
		setAgent(selectedAgent);
	};

	// set available amount
	useEffect(() => {
		const balance = user?.m_balance;
		setAvailable(balance);
	}, [user]);

	// handle amount change
	const handleAmountChange = (e: any) => {
		const value = e.target.value;
		setAmount(value);
		if (value < 10) {
			setErrorText('Minimum amount is 12 USDT');
			return;
		} else if (value > availableAmount) {
			setErrorText('Insufficient balance');
			return;
		} else {
			setErrorText('');
		}

		setReceiveAmount(Number(value) - Number(value) * 0.05);

		if (method?.title !== 'Binance') {
			setReceiveAmountBDT(Number(value) * rate);
		}
	};

	// handle submit form
	const handleSubmit = () => {
		// console.log('submitting form');
		const data = {
			amount: amount,
			net_amount: receiveAmount,
			bdt_amount: receiveAmountBDT,
			charge_p: 0.05,
			charge_a: 0,
			agent_id: agent?._id,
			agent_name: agent?.agent_name,
			method: {
				name: method?.title,
				network: 'TRC20',
				address: address,
				account_number: accountNumber,
			},
		};

		withdraw(data);
	};

	// handle success and error
	useEffect(() => {
		if (isSuccess) {
			toast.success('Withdraw request sent successfully');
			setOpenModal(false);
			setAmount('');
			setAddress('');
			setAccountNumber('');
			setAgent({});
			setMethod({});
			router.push('/withdraw/history');
		}
		if (isError) {
			toast.error((error as fetchBaseQueryError).data?.message);
		}
	}, [isSuccess, isError]);

	return (
		<div className='p-4'>
			<h1 className=' text-xl text-gray-800 font-bold my-4'>
				Withdraw USDT to Agent
			</h1>
			<div>
				<Card className=' light w-full text-gray-700'>
					<div className='flex flex-col gap-4'>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='email1' value='Select Agent' />
							</div>
							<CustomSelect
								options={options || []}
								value={agent.agent_name}
								onChange={handleSelectAgent}
								title='Select Agent'
								defaultValue='Select Agent'
							/>
						</div>

						{agent?.agent_name && (
							<div>
								<div className='mb-2 block'>
									<Label htmlFor='email1' value='Select Payment Method' />
								</div>
								<CustomSelect
									options={methodOptions || []}
									value={method.title}
									onChange={handleSelectMethod}
									title='Select Payment Method'
									defaultValue='Select Payment Method'
								/>
							</div>
						)}
						<div>
							{agent?.agent_name && method?.title && (
								<>
									{/* Start Binance */}
									{(method?.title === 'Binance' || !method.title) && (
										<div>
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
																{Number(
																	user?.m_balance ? user?.m_balance : 0
																).toFixed(2)}
															</span>
														) : (
															<PulseLoader size={10} color={'#fff'} />
														)}
														USDT
													</span>
													<span>
														Min Amount:
														<span className='mx-1 text-gray-800 font-bold'>
															10
														</span>
														USDT
													</span>
												</small>
												{errorText && (
													<small className='text-red-500 font-bold'>
														{errorText}
													</small>
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
														Receive Amount:
													</p>
													<p className='font-bold text-blue-gray-300'>
														<span>{receiveAmount.toFixed(2)}</span> USDT
													</p>
												</div>
												<div className='flex flex-col items-center'>
													<Button
														onClick={() => setOpenModal(true)}
														className='w-full bg-icm-green text-gray-800 font-bold hover:bg-green-500 disabled:opacity-50 disabled:text-gray-800 disabled:cursor-not-allowed'
														disabled={
															!!errorText ||
															!amount ||
															!address ||
															!user?.is_package_active
														}
													>
														Withdraw
													</Button>
													{!user?.is_package_active && (
														<small className='text-red-500 font-bold'>
															Please activate your package to withdraw!
														</small>
													)}
												</div>
											</div>
										</div>
									)}
									{/* End Binance */}
									{/* Start Other Payment Methods */}
									{method?.title !== 'Binance' && (
										<div className=' space-y-3'>
											<div>
												<div className='mb-2 block'>
													<Label
														htmlFor='email1'
														value='Some Note for The Payment Methods'
													/>
												</div>
												<TextInput
													id='description'
													type='text'
													placeholder={`Enter your ${method?.title} number`}
													value={agent?.payment_description}
													disabled
													readOnly
												/>
											</div>
											<div>
												<div className='mb-2 block'>
													<Label
														htmlFor='email1'
														value={`${method?.title} Number`}
													/>
												</div>
												<TextInput
													id='account_number'
													type='text'
													placeholder={`Enter your ${method?.title} number`}
													value={accountNumber}
													required
													onChange={(e) => setAccountNumber(e.target.value)}
												/>
											</div>

											<div>
												<div className='mb-2 block'>
													<Label htmlFor='password1' value='Amount (USDT)' />
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
																{Number(
																	user?.m_balance ? user?.m_balance : 0
																).toFixed(2)}
															</span>
														) : (
															<PulseLoader size={10} color={'#fff'} />
														)}
														USDT
													</span>
													<span>
														Min Amount:
														<span className='mx-1 text-gray-800 font-bold'>
															10
														</span>
														USDT
													</span>
												</small>
												{errorText && (
													<small className='text-red-500 font-bold'>
														{errorText}
													</small>
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
														Rate:{' '}
														<span className='italic font-bold text-blue-gray-300'>
															1 USDT = {method?.rate} BDT
														</span>{' '}
													</p>

													<p className='text-xs text-blue-gray-600'>
														Receive Amount:
													</p>
													<p className='font-bold text-blue-gray-300'>
														<span>{receiveAmountBDT.toFixed(2)}</span> BDT
													</p>
												</div>
												<div className='flex flex-col items-center'>
													<Button
														onClick={() => setOpenModal(true)}
														className='w-full bg-icm-green text-gray-800 font-bold hover:bg-green-500 disabled:opacity-50 disabled:text-gray-800 disabled:cursor-not-allowed'
														disabled={
															!!errorText ||
															!amount ||
															!user?.is_package_active ||
															method?.title === 'Binance'
																? !address
																: !accountNumber
														}
													>
														Withdraw
													</Button>
													{!user?.is_package_active && (
														<small className='text-red-500 font-bold'>
															Please activate your package to withdraw!
														</small>
													)}
												</div>
											</div>
										</div>
									)}
									{/* End Other Payment Methods */}
								</>
							)}
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

export default AgentWithdraw;
