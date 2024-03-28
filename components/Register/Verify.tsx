'use client';
import React, { useEffect, useState } from 'react';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStep } from '@/redux/stepperSlice';

const Verify = () => {
	const dispatch = useDispatch();
	// useEffect to set the active step
	useEffect(() => {
		dispatch(setActiveStep(5));
	}, [dispatch]);

	const { personalData } = useSelector((state: any) => state.stepper);
	const { email } = personalData;
	const [verificationCode, setVerificationCode] = useState('');
	const [codeError, setCodeError] = useState(false);

	return (
		<div className='my-10'>
			<h2 className=' my-4 text-gray-800  font-bold'>Verify Your Email</h2>
			<Card className='w-[23rem]'>
				<p className='text-xs'>
					We have sent a verification code to{' '}
					<span className='font-bold'>{email}</span>
				</p>
				<form className='flex flex-col gap-4'>
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='email1' value='Enter Verification Code' />
						</div>
						<TextInput
							id='email1'
							type='text'
							placeholder='verification code'
							required
						/>
					</div>

					<Button type='submit'>Submit</Button>
				</form>
			</Card>
		</div>
	);
};

export default Verify;
