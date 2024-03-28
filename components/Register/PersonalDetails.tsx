'use client';
import React, { useEffect, useState } from 'react';
import {
	Button,
	Card,
	Checkbox,
	Label,
	Select,
	TextInput,
} from 'flowbite-react';

import countries from '@/lib/countries';

import {
	setActiveStep,
	setCompletedStep,
	handleNext,
	setPersonalData,
} from '@/redux/stepperSlice';
import { useDispatch, useSelector } from 'react-redux';

const PersonalDetails = () => {
	const dispatch = useDispatch();

	const [country, setCountry] = useState('');
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [mobile, setMobile] = useState('');
	const [mobileError, setMobileError] = useState(false);

	// useEffect to set the active step
	useEffect(() => {
		dispatch(setActiveStep(1));
	}, [dispatch]);

	// next handler
	const nextHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (nameError || name === '' || emailError || email === '' || mobileError)
			return;
		dispatch(setPersonalData({ country, name, email, mobile }));
		dispatch(setCompletedStep(1));
		dispatch(handleNext());
	};
	return (
		<div className=' '>
			<h1 className='text-xl font-bold mb-4 ml-1'>
				Fill in your personal details
			</h1>
			<Card className='max-w-md w-full'>
				<form className='flex flex-col gap-4' onSubmit={nextHandler}>
					{/* Country */}

					<div className='max-w-md'>
						<div className='mb-2 block'>
							<Label htmlFor='countries' value='Select your country' />
						</div>
						<Select
							id='countries'
							value={country}
							onChange={(e) => setCountry(e.target.value)}
							required
						>
							<option value='' disabled>
								Select your country
							</option>
							{countries.map((countryItem) => (
								<option key={countryItem.code}>{countryItem.name}</option>
							))}
						</Select>
					</div>
					{/* End Country */}

					{/* Start Name */}
					<div>
						<div className='mb-2 block'>
							<Label
								htmlFor='name1'
								value='Your name'
								color={nameError ? 'failure' : ''}
							/>
						</div>
						<TextInput
							id='name1'
							type='text'
							placeholder='Enter your name'
							required
							color={nameError ? 'failure' : ''}
							value={name}
							onChange={(e) => setName(e.target.value)}
							onBlur={() => setNameError(name.length === 0)}
							helperText={
								<>
									{nameError && (
										<span className='text-xs'>Please enter your name</span>
									)}
								</>
							}
						/>
					</div>
					{/* End Name */}

					{/* Start Email */}

					{/* Start Email */}
					<div>
						<div className='mb-2 block'>
							<Label
								htmlFor='email1'
								value='Your email'
								color={emailError ? 'failure' : ''}
							/>
						</div>
						<TextInput
							id='email1'
							type='email'
							placeholder='Enter your email address'
							required
							color={emailError ? 'failure' : ''}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onBlur={() =>
								setEmailError(
									(email.length > 0 && !email.includes('@')) ||
										email.length === 0
								)
							}
							helperText={
								<>
									{emailError && (
										<span className='text-xs'>
											Please enter a valid email address
										</span>
									)}
								</>
							}
						/>
					</div>
					{/* End Email */}

					{/* Start mobile */}
					<div>
						<div className='mb-2 block'>
							<Label
								htmlFor='mobile'
								value='Your mobile number'
								color={mobileError ? 'failure' : ''}
							/>
						</div>
						<TextInput
							id='mobile'
							type='text'
							placeholder='Enter your mobile number'
							required
							color={mobileError ? 'failure' : ''}
							value={mobile}
							onChange={(e) => setMobile(e.target.value)}
							onBlur={() => setMobileError(mobile.length < 10)}
							helperText={
								<>
									{mobileError && (
										<span className='text-xs'>
											Please enter a valid mobile number
										</span>
									)}
								</>
							}
						/>
					</div>
					{/* End mobile */}

					<Button
						type='submit'
						className='w-full bg-icm-green hover:bg-icm-green-700 text-gray-800 font-semibold'
					>
						Next
					</Button>
				</form>
			</Card>
		</div>
	);
};

export default PersonalDetails;
